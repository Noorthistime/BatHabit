import { PrismaClient, QuestCategory } from '@prisma/client';
import { prisma } from '../db';

export const calculateRequiredXp = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.5));
};

export const rpgService = {
  calculateRequiredXp,

  processQuestCompletion: async (
    tx: any,
    userId: string,
    questId: string,
    xpReward: number,
    currencyReward: number,
    category: QuestCategory
  ) => {
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

      // Record transaction
      await tx.transaction.create({
        data: {
          userId,
          amount: currencyReward,
          type: 'EARN',
          description: `Quest completion reward for ${questId}`,
        }
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

      // Handle Streak
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const streak = await tx.streak.findUniqueOrThrow({ where: { userId } });
      let newCurrentStreak = streak.currentStreak;
      let newBestStreak = streak.bestStreak;
      const lastActivity = streak.lastActivityDate;
      
      let lastActivityDay = null;
      if (lastActivity) {
        lastActivityDay = new Date(lastActivity);
        lastActivityDay.setHours(0, 0, 0, 0);
      }

      if (!lastActivityDay || lastActivityDay.getTime() < today.getTime() - 86400000) {
        // Missed a day or first time
        newCurrentStreak = 1;
      } else if (lastActivityDay.getTime() === today.getTime() - 86400000) {
        // Yesterday
        newCurrentStreak += 1;
      }
      
      if (newCurrentStreak > newBestStreak) {
        newBestStreak = newCurrentStreak;
      }

      const updatedStreak = await tx.streak.update({
        where: { userId },
        data: {
          currentStreak: newCurrentStreak,
          bestStreak: newBestStreak,
          lastActivityDate: new Date(),
        },
      });

      // Basic Achievement checking
      const achievements: string[] = [];
      const userAchievements = await tx.achievement.findMany({ where: { userId } });
      const achievedBadges = new Set(userAchievements.map((a: any) => a.badgeName));

      const awardAchievement = async (badgeName: string) => {
        if (!achievedBadges.has(badgeName)) {
          await tx.achievement.create({
            data: { userId, badgeName }
          });
          achievements.push(badgeName);
        }
      };

      if (updatedStreak.currentStreak >= 7) await awardAchievement("7_DAY_STREAK");
      if (updatedStreak.currentStreak >= 30) await awardAchievement("30_DAY_STREAK");
      if (newLevel >= 5) await awardAchievement("LEVEL_5");
      if (newLevel >= 10) await awardAchievement("LEVEL_10");

      return { 
        completion, 
        currency, 
        character: updatedCharacter, 
        streak: updatedStreak,
        leveledUp,
        newAchievements: achievements 
      };
  }
};
