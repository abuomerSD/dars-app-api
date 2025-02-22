import mongoose from "mongoose";
const { Schema } = mongoose;
import {v4 as uuidv4} from 'uuid';

const lecturerSchema = new Schema({
    _id:{
        type: String,
        default: () => uuidv4(),
    },
    name: String,
    image: String,
    nationality: String,
});

export const lecturer = mongoose.model("Lecturer", lecturerSchema);