import { Request, Response, NextFunction } from "express";

export const asyncWrapper = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error); // Passes error to error handling middleware
      }
    };
  };