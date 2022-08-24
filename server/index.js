import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.routes.js"
import ('./database/connect.js')
dotenv.config() 

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/auth', authRoute)
app.listen(process.env.PORT, () =>console.log(`Listening at ${process.env.PORT}`))

