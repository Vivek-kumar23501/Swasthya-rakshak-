import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose"
mongoose.connect(process.env.DB)

import express from "express"
import { urlencoded } from "body-parser"
import { login, signup } from "./controller/Auth.controller.js"
const app=express()
app.listen(process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/signup',signup)
app.post('/login',login)