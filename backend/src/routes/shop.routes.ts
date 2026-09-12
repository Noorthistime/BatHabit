import { Router } from 'express';
import {
  getShopItems,
  purchaseItem,
  getInventory,
  equipItem
} from '../controllers/shop.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate); // Protect all shop routes

router.get('/items', getShopItems);
router.post('/purchase', purchaseItem);
router.get('/inventory', getInventory);
router.post('/equip', equipItem);

export default router;
