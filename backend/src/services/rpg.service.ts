import { PrismaClient, QuestCategory } from '@prisma/client';
import { prisma } from '../db';

export const calculateRequiredXp = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.5));
};

export const rpgService = {
  calculateRequiredXp,

  processQuestCompletion: async (
    userId: string,
    questId: string,
    xpReward: number,
    currencyReward: number,
    category: QuestCategory
  ) => {
    return prisma.$transaction(async (tx) => {
      // Create completion record
      const completion = await tx.questCompletion.create({
        data: {
          userId,
          questId,
          xpEarned: xpReward,
          currencyEarned: currencyReward,
          attributeGained: category,
        },
      });

      // Update currency
      const currency = await tx.currency.update({
        where: { userId },
        data: {
          balance: { increment: currencyReward },
          totalEarned: { increment: currencyReward },
        },
      });

      // Update attributes
      const attributeUpdateMap: Record<QuestCategory, any> = {
        STRENGTH: { strengthXp: { increment: xpReward } },
        INTELLECT: { intellectXp: { increment: xpReward } },
        WISDOM: { wisdomXp: { increment: xpReward } },
        FOCUS: { focusXp: { increment: xpReward } },
        VITALITY: { vitalityXp: { increment: xpReward } },
        GENERAL: {},
      };

      await tx.attribute.update({
        where: { userId },
        data: attributeUpdateMap[category],
      });

      // Update character XP and level
      const character = await tx.character.findUniqueOrThrow({ where: { userId } });
      let newTotalXp = character.totalXp + xpReward;
      let newLevel = character.level;
      let leveledUp = false;

      while (newTotalXp >= calculateRequiredXp(newLevel)) {
        newLevel++;
        leveledUp = true;
      }

      const updatedCharacter = await tx.character.update({
        where: { userId },
        data: {
          totalXp: newTotalXp,
          level: newLevel,
        },
      });

      return { completion, currency, character: updatedCharacter, leveledUp };
    });
  }
};
