import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/socialmedia')
const db = mongoose.connection
db.once('open', () => {
    console.log("Connected to MongoDB database")
})


