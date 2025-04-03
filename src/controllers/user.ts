import { Request, Response } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { saveUser, deleteUserById, findAllUsers, findUserById, updateUserById } from "../services/user";
import { User } from "../types/user";
import { FAIL_MESSAGE, SUCCESS_MESSAGE } from "../utils/responseStatusMessages";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userModel } from "../models/user";
import bcrypt from 'bcrypt';

dotenv.config();

const jwtSecret : any = process.env.JWT_SECRECT;
const maxAge = 1 * 24 * 60 * 60; // 1 day in seconds

export const save = asyncWrapper(async (req:Request, res: Response) => {
    const user: User = req.body;
    const saved = await saveUser(user);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: saved
    });
});

export const findAll = asyncWrapper(async (req:Request, res: Response) => {
    const users = await findAllUsers();
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: users
    });
});

export const updateById = asyncWrapper(async (req:Request, res: Response) => {
    const newUser: User = req.body;
    const {id} = req.params;
    const updated = await updateUserById(id, newUser);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: updated
    });
});

export const deleteById = asyncWrapper(async (req:Request, res: Response) => {
    const {id} = req.params;
    const deleted = await deleteUserById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: deleted
    });
});

export const findById = asyncWrapper(async (req:Request, res: Response) => {
    const {id} = req.params;
    const user = await findUserById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: user
    });
});

export const createToken = async (user: User) => {
    try {
        const token = jwt.sign(
            user,
            jwtSecret,
            {
                expiresIn: maxAge,
            }
        )
        return token;
    } catch (error) {
        console.log(error);
    }
}

// export const activateUser =  async(req: Request, res: Response) => {
//     const {userId} = req.params;
//     const user = await userModel.findOne({id: userId});
//     if (user) {
//        user.isActive = true;
//        await user.save();
//        const token = createToken(user);
//        res.cookie('jwt', token, {
//           httpOnly: true,
//           maxAge:  maxAge * 1000, // 1 day in msec
//        });
//        // res.locals.user = user;
//        const categories = await getAllCategories();
//        res.redirect('/');
//     }
//     else {
//        res.redirect('/');
//     }
//  } 

 export const login = asyncWrapper(async (req:Request, res: Response) => {
    const { username, password } = req.body;
    // finding the user on the database
    let user = await userModel.findOne({username});
 
    // if (!user) {
    //    user = await userModel.findOne({email: username});
    // }
 
    if (!user) {
       res.status(404).json({
        status: FAIL_MESSAGE,
        message: 'user not found',
       });
    }
 
    if (user) {
        // comparing the entered password with the hashed password on the database
        if(user.password) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                // creating jwt token 
                const token = jwt.sign({ id: user.id }, jwtSecret, {
                expiresIn: maxAge,
                });
                res.cookie('jwt', token, {
                maxAge : maxAge * 1000,
                httpOnly: true,
                });
                res.status(200).json({status: SUCCESS_MESSAGE, token});
            }
            else {
            res.status(400).json({
                status: FAIL_MESSAGE,
                message: 'password is not correct, please try again',
            });
            
            }
        }
        
    }
 });

 export const logout = asyncWrapper( async (req: Request, res: Response) => {
    // removing jwt token from browser
    res.cookie('jwt', '');
    // redirecting to index page
    res.json({
        status: SUCCESS_MESSAGE,
        message: 'user logged out successfully',
    });
 });