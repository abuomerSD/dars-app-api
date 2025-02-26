import express from 'express';
import { findAll, save } from '../controllers/lecturer'
export const router = express.Router();

router.route('/').get(findAll).post(save);