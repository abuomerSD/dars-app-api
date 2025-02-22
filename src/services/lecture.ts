import { lecture } from "../models/lecture";
import { asyncWrapper } from "../utils/asyncwrapper";
import { Lecture } from "../types/lecture";

export const saveLecture =  async (l: Lecture) => {
    try {
        await lecture.create(l);
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
export const findAllLectures = asyncWrapper( async () => {
    try {
        const lectures = await lecture.find();
        return lectures;
    } catch (error) {
        console.log(error); 
    }
})