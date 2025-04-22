import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { updateLecturerById, findAllLecturers, findLecturerById, saveLecturer, deleteLectureById, findLecturerByName} from "../services/lecturer";
import { Lecturer } from "../types/lecturer";
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";

export const findAll = asyncWrapper(async (req:Request, res:Response) => {
    const page:any = req.query.page;
    const limit:any = req.query.limit;
    let lecturers = await findAllLecturers(page, limit);
    const name: any = req.query.name;
    if(name) {
        const lecturers1 = await findLecturerByName(name);
        return res.status(200).json({
            status: SUCCESS_MESSAGE,
            data: lecturers1
        });
    } else {
        res.status(200).json({
            status: SUCCESS_MESSAGE,
            data: lecturers?.lecturers || []
        });
    }
    
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
    lecturer.image = '/images/'+ req.file?.filename;
    const saved = await saveLecturer(lecturer);
    res.status(201).json({
        status:SUCCESS_MESSAGE,
        data: saved
    })
});

export const deleteById = asyncWrapper(async(req:Request, res:Response) => {
    const { id } = req.params;
    const deleted = await deleteLectureById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: deleted
    });
});

export const updateById = asyncWrapper(async (req:Request, res:Response) => {
    const { id } = req.params;
    const newLecturer: Lecturer = req.body;
    newLecturer.image = '/images/'+ req.file?.filename;
    const updated = await updateLecturerById(id, newLecturer);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: updated
    });
});