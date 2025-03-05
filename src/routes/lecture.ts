import express from 'express';
import { updateById, deleteById, findAll, findById, findByLecturerName, save } from '../controllers/lecture';
import { upload } from '../middlewares/imageUpload';
export const router = express.Router();

router.route('/').get(findAll).post(upload.single('image') ,save);

router.route('/:id').get(findById).delete(deleteById).put(upload.single('image') ,updateById);

// router.route('/:lecturerName').get(findByLecturerName);