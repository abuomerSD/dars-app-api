import { lecturer } from "../models/lecturer"
import { Lecturer } from "../types/lecturer";
import fs from 'fs';

export const findAllLecturers = async(page:number, limit:number) => {
    try {
        const allLectures = await lecturer.find({})
        const tot = allLectures.length
        const skip = (page - 1) * limit;
        const lecturers = await lecturer.find().skip(skip).limit(limit).sort({'_id': -1});
        return {lecturers, tot};
    } catch (error) {
        console.log(error);
    }
}

export const findLecturerById = async(id: String) => {
    try{
        const lec = await lecturer.findById(id);
        return lec;
    } catch(error){
        console.log(error);
    }
}

export const saveLecturer = async (lec: Lecturer) => {
    try {
        const saved = await lecturer.create(lec);
        return saved;
    } catch (error) {
        console.log(error);
    }
}

export const deleteLectureById = async (id:String) => {
    try {
        const deleted = await lecturer.findByIdAndDelete(id);
        const imgName: any = deleted?.image;
        fs.unlinkSync(`./uploads${imgName}`);
        return deleted;
    } catch (error) {
        console.log(error);
    }
}

export const findLecturerByName = async (name: String) => {
    try {
        const lec = await lecturer.find({name: {$regex : name}});
        return lec;
    } catch (error) {
        console.log(error);
    }
}

export const updateLecturerById = async (id: String, newLecturer: Lecturer) => {
    try {
        const updated = await lecturer.findByIdAndUpdate({_id: id}, newLecturer);
        return updated;
    } catch (error) {
        console.log(error);
    }
}