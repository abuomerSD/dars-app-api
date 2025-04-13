import express from 'express';
import  {save, deleteById, findAll, findById, updateById, login} from '../controllers/user';
import { adminAuth } from '../middlewares/adminAuth';

export const router = express.Router();

router.route('/').get(findAll).post(save);

router.route('/login').post(login);

router.route('/:id').get(adminAuth, findById).put(adminAuth, updateById).delete(adminAuth, deleteById);