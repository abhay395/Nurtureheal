import express from 'express';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/error-handler.js';
import cors from 'cors';
import router from './routes/index.routes.js';
import rateLimit from "express-rate-limit";
import connectDb from  './db/connectdb.js'
dotenv.config();

const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests from this IP, please try again later.",
})

const allowedOrigins = [
  "http://localhost:5174",
  "https://trendora-i8b9.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server or curl
    const cleanedOrigin = origin.replace(/\/$/, ""); // remove trailing slash
    if (allowedOrigins.includes(cleanedOrigin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Not Allowed: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(limiter)
app.use(express.json());

app.get("/api/v1", (req, res) => res.send("Hello world"));
app.use('/api/v1', router);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server Is Running on Port ${PORT}`)
})
connectDb()