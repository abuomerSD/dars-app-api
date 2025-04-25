import express from 'express';
import { updateById, deleteById, findAll, findById, save } from '../controllers/lecture';
import { upload } from '../middlewares/imageUpload';
import { adminAuth } from '../middlewares/adminAuth';

export const router = express.Router();

router.route('/').get(findAll).post(adminAuth, upload.single('image') ,save);

router.route('/:id').get(findById).delete(adminAuth, deleteById).put(adminAuth, upload.single('image') ,updateById);