import mongoose from "mongoose"
import 'dotenv/config'

const url = process.env.DB_URL as string;

export const connectDb = async () => {
    await mongoose.connect(url);
    console.log('database connected');
}