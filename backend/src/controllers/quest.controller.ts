import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../db';
import { rpgService } from '../services/rpg.service';
import { QuestDifficulty, QuestCategory, QuestRecurrence } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.middleware';

const questSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  category: z.nativeEnum(QuestCategory),
  difficulty: z.nativeEnum(QuestDifficulty),
  recurrence: z.nativeEnum(QuestRecurrence).optional(),
  dueDate: z.string().optional().transform((val) => (val ? new Date(val) : undefined)),
});

export const createQuest = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const data = questSchema.parse(req.body);

    const quest = await prisma.quest.create({
      data: {
        ...data,
        userId,
      },
    });

    res.status(201).json(quest);
  } catch (error) {
    if (error instanceof z.ZodError) res.status(400).json({ error: error.errors });
    else res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuests = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const quests = await prisma.quest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(quests);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuestById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { id } = req.params;

    const quest = await prisma.quest.findFirst({ where: { id, userId } });
    if (!quest) {
      res.status(404).json({ error: 'Quest not found' });
      return;
    }

    res.status(200).json(quest);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateQuest = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { id } = req.params;
    const data = questSchema.partial().parse(req.body);

    const quest = await prisma.quest.findFirst({ where: { id, userId } });
    if (!quest) {
      res.status(404).json({ error: 'Quest not found' });
      return;
    }

    const updatedQuest = await prisma.quest.update({
      where: { id },
      data,
    });

    res.status(200).json(updatedQuest);
  } catch (error) {
    if (error instanceof z.ZodError) res.status(400).json({ error: error.errors });
    else res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteQuest = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { id } = req.params;

    const quest = await prisma.quest.findFirst({ where: { id, userId } });
    if (!quest) {
      res.status(404).json({ error: 'Quest not found' });
      return;
    }

    await prisma.quest.delete({ where: { id } });
    res.status(200).json({ message: 'Quest deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getRewardsForDifficulty = (difficulty: QuestDifficulty) => {
  switch (difficulty) {
    case 'EASY': return { xp: 10, currency: 5 };
    case 'MEDIUM': return { xp: 25, currency: 10 };
    case 'HARD': return { xp: 50, currency: 25 };
    default: return { xp: 10, currency: 5 };
  }
};

export const completeQuest = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { id } = req.params;

    const quest = await prisma.quest.findFirst({ where: { id, userId } });
    if (!quest) {
      res.status(404).json({ error: 'Quest not found' });
      return;
    }

    if (quest.status === 'COMPLETED') {
      res.status(400).json({ error: 'Quest is already completed' });
      return;
    }

    // Determine rewards server-side
    const rewards = getRewardsForDifficulty(quest.difficulty);

    const result = await prisma.$transaction(async (tx) => {
      // Mark as completed
      const updatedQuest = await tx.quest.update({
        where: { id },
        data: { status: 'COMPLETED' },
      });

      // Process RPG rewards
      const rpgResult = await rpgService.processQuestCompletion(
        userId,
        id,
        rewards.xp,
        rewards.currency,
        quest.category
      );

      return { quest: updatedQuest, ...rpgResult };
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
