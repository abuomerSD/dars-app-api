import express from 'express';
import { updateById, deleteById, findAll, findById, findByLecturerName, save } from '../controllers/lecture';
export const router = express.Router();

router.route('/').get(findAll).post(save);

router.route('/:id').get(findById).delete(deleteById).put(updateById);

router.route('/:lecturerName').get(findByLecturerName);