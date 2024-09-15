import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sonodsadman:pBRl0RQijnoyXUkZ@appayon.uix2kll.mongodb.net/project_appayon').then(() =>console.log('Database connected successfully'));
}