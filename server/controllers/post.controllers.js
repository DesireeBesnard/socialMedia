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

export const updatePost = async(req, res) => {
    const postId = req.params.id
    const {userId} = req.body

    try {
        const post = await postModel.findById(postId)

        if(post.userId === userId) {
            await post.updateOne( {$set: req.body})
            res.status(200).json("Post updated")
        } else {
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deletePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await postModel.findById(id)

        if(post.userId === userId) {
            await post.deleteOne()
            res.status(200).json("Post deleted")
        } else {
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}