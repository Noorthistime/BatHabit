import { Request, Response } from 'express';
import { prisma } from '../db';
import { AuthRequest } from '../middleware/auth.middleware';
import { ItemCategory } from '@prisma/client';

export const getShopItems = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const items = await prisma.shopItem.findMany({
      where: { isAvailable: true },
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const purchaseItem = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { itemId } = req.body;

    const item = await prisma.shopItem.findUnique({ where: { id: itemId } });
    if (!item || !item.isAvailable) {
      res.status(404).json({ error: 'Item not found or unavailable' });
      return;
    }

    const existingInventory = await prisma.inventory.findUnique({
      where: { userId_itemId: { userId, itemId } },
    });
    if (existingInventory) {
      res.status(400).json({ error: 'You already own this item' });
      return;
    }

    const result = await prisma.$transaction(async (tx) => {
      const currency = await tx.currency.findUniqueOrThrow({ where: { userId } });
      if (currency.balance < item.price) {
        throw new Error('Insufficient balance');
      }

      await tx.currency.update({
        where: { userId },
        data: {
          balance: { decrement: item.price },
          totalSpent: { increment: item.price },
        },
      });

      await tx.transaction.create({
        data: {
          userId,
          amount: item.price,
          type: 'SPEND',
          description: `Purchased ${item.name}`,
        },
      });

      const inventoryItem = await tx.inventory.create({
        data: {
          userId,
          itemId,
          isEquipped: false,
        },
      });

      return inventoryItem;
    });

    res.status(200).json({ message: 'Purchase successful', inventoryItem: result });
  } catch (error: any) {
    if (error.message === 'Insufficient balance') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const getInventory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const inventory = await prisma.inventory.findMany({
      where: { userId },
      include: { item: true },
    });
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const equipItem = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const { itemId } = req.body;

    const inventoryItem = await prisma.inventory.findUnique({
      where: { userId_itemId: { userId, itemId } },
      include: { item: true },
    });

    if (!inventoryItem) {
      res.status(404).json({ error: 'Item not found in inventory' });
      return;
    }

    await prisma.$transaction(async (tx) => {
      // Unequip items of the same category
      const sameCategoryItems = await tx.inventory.findMany({
        where: {
          userId,
          item: { category: inventoryItem.item.category },
          isEquipped: true,
        },
      });

      for (const item of sameCategoryItems) {
        await tx.inventory.update({
          where: { id: item.id },
          data: { isEquipped: false },
        });
      }

      // Equip new item
      await tx.inventory.update({
        where: { id: inventoryItem.id },
        data: { isEquipped: true },
      });
      
      // If it's a title, update the character profile
      if (inventoryItem.item.category === 'TITLE') {
        await tx.character.update({
          where: { userId },
          data: { currentTitle: inventoryItem.item.name }
        });
      }
      
      // If it's an avatar, update the character profile
      if (inventoryItem.item.category === 'AVATAR') {
        await tx.character.update({
          where: { userId },
          data: { avatarUrl: inventoryItem.item.name }
        });
      }
    });

    res.status(200).json({ message: 'Item equipped successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
