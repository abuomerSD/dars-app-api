import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userModel } from "../models/user";
import { FAIL_MESSAGE } from "../utils/responseStatusMessages";
dotenv.config();

const jwtSecret : any = process.env.JWT_SECRECT;

export function adminAuth(req: Request, res: Response, next: NextFunction) {

    const token: string | null = req.body.token;
    if (token) {
        jwt.verify(token, jwtSecret, async (err: any, decodedToken: any) => {
            if (err) {
                throw new Error(err);
                res.locals.user = null;
                next();
            }
            else {
                const user = await userModel.findOne({_id: decodedToken.id})
                res.locals.user = user;
                if (user) {
                    next();
                }
                else {
                    // throw new Error('This Route is only for Admins');
                    res.json({
                        status: FAIL_MESSAGE,
                        message: 'This Route is only for Admins',
                    });
                }
            }
        })
    }
    else {
        res.locals.user = null;
        // throw new Error("Please Login First");
        res.json({
            status: FAIL_MESSAGE,
            message: "Please Login First",
        });
        
    }

}