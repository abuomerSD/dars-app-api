import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { saveUser, deleteUserById, findAllUsers, findUserById, updateUserById } from "../services/user";
import { User } from "../types/user";
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";

export const save = asyncWrapper(async (req:Request, res: Response) => {
    const user: User = req.body;
    const saved = await saveUser(user);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: saved
    });
});

export const findAll = asyncWrapper(async (req:Request, res: Response) => {
    
});

export const updateById = asyncWrapper(async (req:Request, res: Response) => {
    
});

export const deleteById = asyncWrapper(async (req:Request, res: Response) => {
    
});

export const findById = asyncWrapper(async (req:Request, res: Response) => {
    
});