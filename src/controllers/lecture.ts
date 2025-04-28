import { Request, Response, NextFunction } from "express";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";
import { deleteLectureById, findAllLectures, findLectureById, findLectureByLecturerName, saveLecture, updateLectureById } from '../services/lecture';
import { SUCCESS_MESSAGE } from "../utils/responseStatusMessages";
const admin = require('firebase-admin');
import { lecture } from "../models/lecture";


// save lecture to database
export const save = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const lecture: Lecture = req.body;
    console.log('req file',req.file)
    lecture.image = '/images/'+ req.file?.filename;
    const saved = await saveLecture(lecture);
    res.status(201).json({
        status: SUCCESS_MESSAGE,
        data: saved,
    })
});

// returns all lectures as json
export const findAll = asyncWrapper(async (req:Request, res:Response, next: NextFunction) => {
    const page:any = req.query.page;
    const limit:any = req.query.limit;
    let lectures = await findAllLectures(page, limit);
    const name: any = req.query.name;
    console.log(name);
    if(name) {
        const lectures1 = await findLectureByLecturerName(name);
        return res.status(200).json({
            status: SUCCESS_MESSAGE,
            data: lectures1
        });
    } else {
        res.status(200).json({
            status: SUCCESS_MESSAGE,
            data: lectures?.lectures || [],
            tot: lectures?.tot || 0
        });
    }
    
});

// find lecture by id
export const findById = asyncWrapper(async (req:Request, res: Response) => {
    const { id } = req.params; 
    const lec = await findLectureById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: lec
    });
});


// delete By Id 
export const deleteById = asyncWrapper(async (req:Request, res: Response) => {
    const { id } = req.params;
    const deleted = await deleteLectureById(id);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: deleted,
    });
});

// update By Id
export const updateById = asyncWrapper(async (req:Request, res:Response) => {
    const { id } = req.params;
    const oldLecture = await findLectureById(id);
    const newLecture: Lecture = req.body;
    newLecture.image = '/images/'+ req.file?.filename;
    const updated = await updateLectureById(id, newLecture);
    res.status(200).json({
        status: SUCCESS_MESSAGE,
        data: updated,
    });
});


export const sendNotificationToAll = asyncWrapper(async (req: Request, res: Response) => {
    const { title, body, id } = req.body;

    if (!id || !title || !body) {
        return res.status(400).json({ message: "id, title, and body are required." });
    }

    const message = {
        notification: {
            title: title,
            body: body,
        },
        topic: 'all',
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message to topic:', response);

        // بعد الإرسال، حدّث المحاضرة واجعل NotificationSent = true
        await lecture.updateOne({ _id: id }, { NotificationSent: true });

        return res.status(200).json({ status: SUCCESS_MESSAGE ,message: "Notification sent and lecture updated successfully." });
    } catch (error) {
        console.error('Error sending message to topic:', error);
        return res.status(500).json({ message: "Failed to send notification.", error });
    }
});
