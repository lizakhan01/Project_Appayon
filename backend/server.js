/*import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import cartRouter from './routes/cartRoute.js';
import foodRouter from './routes/foodRoute.js';
import orderRouter from './routes/orderRoute.js';
import userRouter from './routes/userRoute.js';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Running Smoothly - Ready to Serve!");
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
*/

/*import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import cartRouter from './routes/cartRoute.js';
import foodRouter from './routes/foodRoute.js';
import orderRouter from './routes/orderRoute.js';
import userRouter from './routes/userRoute.js';

import cloudinary from 'cloudinary';
import multer from 'multer';
import streamifier from 'streamifier';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//cloudinary connection
const storage = multer.memoryStorage();
const upload = multer({ storage });
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
    secure: true,
});
app.post('/upload-cloud', upload.single('file'), (req, res) => {
    console.log('file->',req.file);
    const stream = cloudinary.uploader.upload_stream(
        {
            folder: 'cloud_image',
        },
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Upload to Cloudinary failed.' });
            }

            console.log(result);
            res.status(200).json(result);
        }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
});

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Running Smoothly - Ready to Serve!");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
*/


import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import cartRouter from './routes/cartRoute.js';
import foodRouter from './routes/foodRoute.js';
import orderRouter from './routes/orderRoute.js';
import userRouter from './routes/userRoute.js';

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import streamifier from 'streamifier';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//cloudinary connection
const storage = multer.memoryStorage();
const upload = multer({ storage });
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
    secure: true,
});

app.post('/upload-cloud', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
        {
            folder: 'cloud_image',
        },
        (error, result) => {
            if (error) {
                console.error("Cloudinary error:", error);
                return res.status(500).json({ error: 'Upload to Cloudinary failed.' });
            }

            // Log and send the secure URL
            console.log("Cloudinary upload result:", result);
            return res.status(200).json({ secure_url: result.secure_url });  // Send secure_url back to the client
        }
    );

    // Create a stream from the file buffer and pipe it to Cloudinary
    streamifier.createReadStream(req.file.buffer)
        .pipe(uploadStream)
        .on('finish', () => {
            console.log("File successfully uploaded to Cloudinary.");
        })
        .on('error', (err) => {
            console.error("Stream error:", err);
            return res.status(500).json({ error: "Stream failed." });
        });
});



// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Running Smoothly - Ready to Serve!");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

