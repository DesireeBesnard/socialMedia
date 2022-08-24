import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ('./database/connect.js')
dotenv.config() 
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/auth', authRoute)
app.use('/user', userRoute)

app.listen(process.env.PORT, () =>console.log(`Listening at ${process.env.PORT}`))

