import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";

export const findAll = asyncWrapper(async (req:Request, res:Response) => {
    const lecturers = await findAllLecturers();
});