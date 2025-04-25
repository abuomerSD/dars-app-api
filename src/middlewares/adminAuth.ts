import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userModel } from "../models/user";
import { FAIL_MESSAGE } from "../utils/responseStatusMessages";
dotenv.config();

const jwtSecret : any = process.env.JWT_SECRECT;


export function adminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    res.status(401).json({
      status: FAIL_MESSAGE,
      message: 'Please login first',
    });
    return;
  }

  let decoded = null

  jwt.verify(token, jwtSecret, async (err: any, decodedToken: any) => {
    decoded = decodedToken;
    if (err) {
      console.error('JWT Error:', err.message);
      res.status(403).json({
        status: FAIL_MESSAGE,
        message: 'Token verification failed',
      });
      return;
    }

    const user = await userModel.findById(decoded.id);
    if (!user) {
      res.status(403).json({
        status: FAIL_MESSAGE,
        message: 'This route is only for admins',
      });
      return;
    }

    res.locals.user = user;
    next(); // ✅ فقط بعد التأكد
  });
}


// export function adminAuth(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  
//   if (token) {
//         jwt.verify(token, jwtSecret, async (err: any, decodedToken: any) => {
//           if (err) {
//             console.error('JWT Error:', err.message);
//             return res.status(403).json({
//               status: FAIL_MESSAGE,
//               message: 'Token verification failed',
//             });
//           }

//           const user = await userModel.findById(decodedToken.id);
//           res.locals.user = user;

//           if (user) {
//             next();
//           } else {
//             return res.status(403).json({
//               status: FAIL_MESSAGE,
//               message: 'This route is only for admins',
//             });
//           }
//         });
//       } else {
//         return res.status(401).json({
//           status: FAIL_MESSAGE,
//           message: 'Please login first',
//         });
//       }
// }


// export function adminAuth(req: Request, res: Response, next: NextFunction) {

//     const token: string | null = req.body.token;
//     console.log('body',req.body)
//     console.log('token',token)
//     if (token) {
//         jwt.verify(token, jwtSecret, async (err: any, decodedToken: any) => {
//             if (err) {
//                 throw new Error(err);
//                 res.locals.user = null;
//                 next();
//             }
//             else {
//                 const user = await userModel.findOne({_id: decodedToken.id})
//                 res.locals.user = user;
//                 if (user) {
//                     next();
//                 }
//                 else {
//                     // throw new Error('This Route is only for Admins');
//                     res.json({
//                         status: FAIL_MESSAGE,
//                         message: 'This Route is only for Admins',
//                     });
//                 }
//             }
//         })
//     }
//     else {
//         res.locals.user = null;
//         // throw new Error("Please Login First");
//         res.json({
//             status: FAIL_MESSAGE,
//             message: "Please Login First",
//         });
        
//     }

// }