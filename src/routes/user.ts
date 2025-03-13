import express from 'express';
import  {save, deleteById, findAll, findById, updateById} from '../controllers/user';

export const router = express.Router();

router.route('/').get(findAll).post(save);

router.route('/:id').get(findById).put(updateById).delete(deleteById);