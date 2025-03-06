import mongoose from "mongoose";
const { Schema } = mongoose;
import {v4 as uuidv4} from 'uuid';

const userSchema = new Schema({
    _id:{
        type: String,
        default: () => uuidv4(),
    },
    username: String,
    password: String,
    isAdmin: String,
});

export const lecture = mongoose.model('User', userSchema);