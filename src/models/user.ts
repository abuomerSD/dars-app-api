import mongoose from "mongoose";
const { Schema } = mongoose;
import {v4 as uuidv4} from 'uuid';

const userSchema = new Schema({
    _id:{
        type: String,
        default: () => uuidv4(),
    },
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: String,
},{
    timestamps: true,
    versionKey: false,
});

export const lecture = mongoose.model('User', userSchema);