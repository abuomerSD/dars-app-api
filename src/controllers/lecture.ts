import { Request, Response, NextFunction } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";
import { deleteLectureById, findAllLectures, findLectureById, findLectureByLecturerName, saveLecture, updateLectureById } from '../services/lecture';
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";

// save lecture to database
export const save = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lecture: Lecture = req.body;
    lecture.image = '/images/'+ req.file?.filename;
    const saved = await saveLecture(lecture);
    res.status(201).json({
        status: SUCCESS_MESSAGE,
        data: saved,
    })
});

// returns all lectures as json
export const findAll = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lectures = await findAllLectures();
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lectures
    })
});

// find lecture by id
export const findById = asyncWrapper(async (req:Request, res: Response) => {
    const { id } = req.params; 
    const lec = await findLectureById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lec
    });
});

// filter By Lecturer name
export const findByLecturerName = asyncWrapper(async (req:Request, res: Response) => {
    const { lecturerName } = req.params;
    const lectures = await findLectureByLecturerName(lecturerName);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lectures,
    });
});

// delete By Id 
export const deleteById = asyncWrapper(async (req:Request, res: Response) => {
    const { id } = req.params;
    const deleted = await deleteLectureById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: deleted,
    });
});

// update By Id
export const updateById = asyncWrapper(async (req:Request, res:Response) => {
    const { id } = req.params;
    const oldLecture = await findLectureById(id);
    const newLecture: Lecture = req.body;
    newLecture.image = '/images/'+ req.file?.filename;
    const updated = await updateLectureById(id, newLecture);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: updated,
    });
});