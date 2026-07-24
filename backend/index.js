import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose"
mongoose.connect(process.env.DB)


import express from "express"
import cors from "cors"
import { urlencoded } from "body-parser"
import { login, signup, verifyOTP } from "./controller/Auth.controller.js"
const app=express()
app.listen(process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })
);


app.post('/signup',signup)
app.post('/login',login)
app.post('/verify-otp',verifyOTP)