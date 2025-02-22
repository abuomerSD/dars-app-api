import { Request, Response, NextFunction } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";
import {  } from '../services/lecture';

export const save = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lecture: Lecture = req.body; 
});

export const findAll = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    
    
});