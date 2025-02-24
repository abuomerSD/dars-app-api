import { Request, Response, NextFunction } from "express";
import { FAIL_MESSAGE } from "./responseStatusMessages";

export const asyncWrapper = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error : any) {
        next(error); // Passes error to error handling middleware
      }
    };
  };