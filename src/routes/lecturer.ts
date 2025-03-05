import express from 'express';
import { findAll, findById, save, deleteById, updateById } from '../controllers/lecturer'
import { upload } from '../middlewares/imageUpload';
export const router = express.Router();

router.route('/').get(findAll).post(upload.single('image') ,save);

router.route('/:id').get(findById).delete(deleteById).put(upload.single('image') ,updateById);