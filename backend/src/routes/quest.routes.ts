import { Router } from 'express';
import {
  createQuest,
  getQuests,
  getQuestById,
  updateQuest,
  deleteQuest,
  completeQuest,
} from '../controllers/quest.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate); // Protect all quest routes

router.post('/', createQuest);
router.get('/', getQuests);
router.get('/:id', getQuestById);
router.put('/:id', updateQuest);
router.delete('/:id', deleteQuest);
router.post('/:id/complete', completeQuest);

export default router;
