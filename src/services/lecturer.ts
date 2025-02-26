import { lecturer } from "../models/lecturer"
import { Lecturer } from "../types/lecturer";

export const findAllLecturers = async() => {
    try {
        const lecturers = await lecturer.find();
        return lecturers;
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