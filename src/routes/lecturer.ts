import express from 'express';
import { findAll, findById, save, deleteById, updateById } from '../controllers/lecturer'
import { upload } from '../middlewares/imageUpload';
import { adminAuth } from '../middlewares/adminAuth';

export const router = express.Router();

router.route('/').get(findAll).post(adminAuth, upload.single('image') ,save);

router.route('/:id').get(findById).delete(adminAuth, deleteById).put(adminAuth, upload.single('image') ,updateById);