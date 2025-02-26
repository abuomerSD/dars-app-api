import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { findAllLecturers, findLecturerById, saveLecturer } from "../services/lecturer";
import { Lecturer } from "../types/lecturer";
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";

export const findAll = asyncWrapper(async (req:Request, res:Response) => {
    const lecturers = await findAllLecturers();
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lecturers
    });
});

export const findById = asyncWrapper(async(req:Request, res:Response) => {
    const { id } = req.params;
    const lecturer = await findLecturerById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lecturer
    })
});

export const save = asyncWrapper(async (req:Request, res:Response) => {
    const lecturer: Lecturer = req.body;
    const saved = await saveLecturer(lecturer);
    res.status(201).json({
        status:SUCCESS_MESSAGE,
        data: saved
    })
});