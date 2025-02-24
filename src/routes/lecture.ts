import express, { NextFunction, Request, Response } from 'express';
import { asyncWrapper } from '../utils/asyncwrapper';
import { Lecture } from '../types/lecture';
import { findAll, findById, findByLecturerName, save } from '../controllers/lecture';
export const router = express.Router();

router.route('/').get(findAll).post(save);

router.route('/:id').get(findById);

router.route('/:lecturerName').get(findByLecturerName);