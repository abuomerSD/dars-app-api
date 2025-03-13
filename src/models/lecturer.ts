import mongoose from "mongoose";
const { Schema } = mongoose;
import {v4 as uuidv4} from 'uuid';

const lecturerSchema = new Schema({
    _id:{
        type: String,
        default: () => uuidv4(),
    },
    name: {
        type: String,
        unique: true,
    },
    image: String,
    nationality: String,
},{
    timestamps: true,
    versionKey: false,
});

export const lecturer = mongoose.model("Lecturer", lecturerSchema);