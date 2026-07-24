import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose"
mongoose.connect(process.env.DB)


import express from "express"
import cors from "cors"
import { urlencoded } from "body-parser"
import { login, signup, verifyOTP } from "./controller/Auth.controller.js"
import verifyToken from "./middleware/Auth.middleware.js"
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);


app.post('/signup',signup)
app.post('/login',login)
app.post('/verify-otp',verifyOTP)
// Example protected route
app.get('/dashboard-data', verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected data",
    user: req.user
  });
})
app.get("/verify-token", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});
app.get('/profile', verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user   // { id, fullname, email, mobile }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})