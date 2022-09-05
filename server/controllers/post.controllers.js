import mongoose from "mongoose";
import postModel from "../models/post.js";
import UserModel from "../models/user.js";
import {PostService} from "../services/post.service.js"


export class PostController {
    
    static instance

    static getInstance() {
        if (!PostController.instance) {
            PostController.instance = new PostController() 
        }
        return PostController.instance
    }

    async createPost(req, res) {
    
        const newPost = await PostService.getInstance().create(req.body)
        res.status(200).send(newPost)
    }

    async getPost(req, res) {

        const id = req.params.id
        const post = await PostService.getInstance.get(id)
        res.status(200).send(post)
    }

    async updatePost(req, res) {

        const postId = req.params.id
        const {userId} = req.body

        const post = await PostService.getInstance.update(postId, userId)
        res.status(200).send(post)
    }

    async deletePost(req, res) {

        const id = req.params.id
        const {userId} = req.body

        const post = await PostService.getInstance.delete(id, userId)
        res.status(200).send("Post deleted")
    }

    async likePost(req, res) {

        const id = req.params.id
        const {userId} = req.body

        const post = await PostService.getInstance.like(id, userId)
        res.status(200).send(post)
    }

    async getTimeLinePosts(req, res) {
        const userId = req.params.id

        const currentUserPosts = await PostService.getInstance.getTimeLinePosts(userId)
        res.status(200).send(currentUserPosts)

    }
}

/*
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
        const post = await postModel.findById(id)
        res.status(200).json(post)
        
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

export const likePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await postModel.findById(id)
        if(!post.likes.includes(userId)) {
            await post.updateOne({$push: {likes: userId}})
            res.status(200).json("Post liked")
        } else {
            await post.updateOne({$pull: {likes: userId}})
            res.status(200).json("Post unliked")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

//get Timeline posts
export const getTimeLinePosts = async(req, res) => {
    const userId = req.params.id

    try {
        const currentUserPosts = await postModel.find({userId: userId})
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            }
        ])
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a,b)=> {
            return b.createdAt - a.createdAt
        }))
        
    } catch (error) {
        res.status(500).json(error)
    }

}*/