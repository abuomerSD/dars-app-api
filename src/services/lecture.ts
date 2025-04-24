import { lecture } from "../models/lecture";
import { Lecture } from "../types/lecture";
import fs from "fs";

// save lecture to database
export const saveLecture =  async (l: Lecture) => {
    try {
        
        const lec = new lecture(l);
        const saved = await lec.save();
        return saved;
    } catch (error) {
        console.log(error);
    }    
}

// update By Id
export const updateLectureById = async (id: String, newLecture: Lecture) => {
    try {
        const updated = await lecture.findOneAndUpdate({_id: id}, newLecture);
        return updated;
    } catch (error) {
        console.log(error);
    }   
}

// delete lecture
export const deleteLectureById = async (id: String) => {
    try {
        const deleted = await lecture.findByIdAndDelete(id);
        const imgName: any = deleted?.image;
        fs.unlinkSync(`./uploads${imgName}`);
        return deleted;
    } catch (error) {
        console.log(error);
    }
}

// find by id
export const findLectureById = async (id: String) => {
    try {
        const lec = await lecture.findById(id);
        return lec;
    } catch (error) {
        console.log(error);
    }
}

// return array of lectures 
export const findAllLectures =  async (page: number, limit: number) => {
    try {
        const allLectures = await lecture.find({})
        const tot = allLectures.length
        const skip = (page - 1) * limit;
        const lectures = await lecture.find().skip(skip).limit(limit).sort({'_id': -1});
        return {lectures, tot};
    } catch (error) {
        console.log(error); 
    }
}

// find by lecturer name
export const findLectureByLecturerName = async(name: String) => {
    try {
        const lectures = await lecture.find({title: {$regex : name}});
        return lectures;
    } catch (error) {
        console.log(error);
    }
}