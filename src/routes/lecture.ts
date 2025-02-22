import express, { NextFunction, Request, Response } from 'express';
import { asyncWrapper } from '../utils/asyncwrapper';
import { Lecture } from '../types/lecture';
import { findAll, save } from '../controllers/lecture';
export const router = express.Router();

router.get('/', findAll);