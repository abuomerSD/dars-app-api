import mongoose from "mongoose";
const { Schema } = mongoose;

const lectureSchema = new Schema({
    id:{
        type: Schema.Types.UUID
    },
    title: String,
    lecturer: String,
    date: Schema.Types.Date,
    location,
    image: String,
    description: String,
})