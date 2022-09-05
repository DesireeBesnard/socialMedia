import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ('./database/connect.js')
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import postRoute from "./routes/post.routes.js"
dotenv.config() 

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/auth', authRoute)
//app.use('/user', userRoute)
//app.use('/posts', postRoute)

app.listen(process.env.PORT, () =>console.log(`Listening at ${process.env.PORT}`))

