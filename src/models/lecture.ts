import mongoose from "mongoose";
const { Schema } = mongoose;
import {v4 as uuidv4} from 'uuid';

const lectureSchema = new Schema({
    _id:{
        type: String,
        default: () => uuidv4(),
    },
    title: String,
    lecturer: String,
    date: Schema.Types.Date,
    location: String,
    image: String,
    description: String,
});

export const lecture = mongoose.model('Lecture', lectureSchema);