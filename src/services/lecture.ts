import { lecture } from "../models/lecture";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";

// save lecture to database
export const saveLecture =  async (l: Lecture) => {
    try {
        const saved = await lecture.create(l);
        return saved;
    } catch (error) {
        console.log(error);
    }    
}

export const updateLecture = asyncWrapper( async () => {
    
})

export const deleteLecture = asyncWrapper( async () => {
    
})

export const findLectureById = asyncWrapper( async () => {
    
})

// return array of lectures 
export const findAllLectures =  async () => {
    try {
        const lectures = await lecture.find();
        return lectures;
    } catch (error) {
        console.log(error); 
    }
}