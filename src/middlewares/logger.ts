import {Request, Response, NextFunction} from 'express';

export const logRequestMethodAndUrl :any = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
}