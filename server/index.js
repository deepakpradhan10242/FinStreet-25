import express from 'express';
import cors from 'cors';
import'dotenv/config';
import connectDB from './src/config/connectDB.js';
import authRouter from './src/routes/authRouter.js';
import userRouter from './src/routes/userRoutes.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Adjust to your frontend URL
    methods: ["GET", "POST"],
    credentials: true, // Allow cookies to be sent
  }));  // Add parentheses to call the cors middleware
app.use(express.json());
app.use(cookieParser());

const PORT = 8080;

app.listen(PORT, async () => {
    await connectDB();
    console.log("server is running on port", PORT);
});

// app.get('/', (request, response) => {
//     response.send("hello world");
// });

// API endpoints
// router.get("/verify-token", verifyToken, (req, res) => {
//   res.status(200).json({ success: true, user: req.user });
// });

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter); // Uncomment to use the router for /api

