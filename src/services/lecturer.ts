import { lecturer } from "../models/lecturer"

export const findAllLecturers = async() => {
    try {
        const lecturers = await lecturer.find();
        return lecturer;
    } catch (error) {
        console.log(error);
    }
}