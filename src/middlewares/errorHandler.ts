import { Response, Request, NextFunction } from "express";
import { FAIL_MESSAGE } from "../utils/responseStatusMessages";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if(error) {
        res.status(400).json({
            status : FAIL_MESSAGE,
            data: error.message,
        });
        next();
    }
}