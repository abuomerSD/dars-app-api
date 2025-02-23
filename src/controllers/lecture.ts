import { Request, Response, NextFunction } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";
import { findAllLectures, saveLecture } from '../services/lecture';
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";

// save lecture to database
export const save = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lecture: Lecture = req.body;
    const saved = await saveLecture(lecture);
    res.status(201).json({
        status: SUCCESS_MESSAGE,
        data: saved,
    })
});

// returns all lectures as json
export const findAll = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lectures = await findAllLectures();
    console.log(lectures);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lectures
    })
});