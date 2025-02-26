import express from 'express';
import { findAll, findById, save } from '../controllers/lecturer'
export const router = express.Router();

router.route('/').get(findAll).post(save);

router.route('/:id').get(findById);