/*import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sonodsadman:pBRl0RQijnoyXUkZ@appayon.uix2kll.mongodb.net/project_appayon').then(() => 
        console.log("DB Connected")
    );
} */


    import mongoose from "mongoose";

    export const connectDB = async () => {
        try {
            const conn = await mongoose.connect(process.env.DATABASE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    }
    