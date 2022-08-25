import mongoose from "mongoose";
import postModel from "../models/post.js";

export const createPost = async(req, res) => {
    const newPost = new postModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post created")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPost = async(req, res) => {
    const id = req.params.id
    try {
        const newPost = await postModel.findById(id)
        res.status(200).json(newPost)
        
    } catch (error) {
        res.status(500).json(error)
    }
}