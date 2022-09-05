import mongoose from "mongoose";
import postModel from "../models/post.js";
import UserModel from "../models/user.js";


export class PostDAO {

    static instance

    static getInstance() {
        if (!PostDAO.instance) {
            PostDAO.instance = new PostDAO()
        }
        return PostDAO.instance
    }

    async create(post) {
        const newPost = new postModel(post)
        await newPost.save()
        return newPost
    }

    async get(postId) {
        const post = await postModel.findById(postId)
        return post
    }

    async update(post, update) {
        const updatedPost = await post.updateOne({ $set: update })
        return updatedPost
    }

    async delete(post) {
        const deletedPost = await post.deleteOne()
        return deletedPost
    }

    async like(post, userId) {
        const likedPost = await post.updateOne({ $push: { likes: userId } })
        return likedPost
    }

    async dislike(post, userId) {
        const dislikedPost = await post.updateOne({ $pull: { likes: userId } })
        return dislikedPost
    }

    async getTimeLinePosts(type, userId) {

        if (type === "current") {
            const currentUserPosts = await postModel.find({ userId: userId })
            return currentUserPosts
            
        } else {
            const followingPosts = await UserModel.aggregate([
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(userId)
                    }
                },
                {
                    $lookup: {
                        from: "posts",
                        localField: "following",
                        foreignField: "userId",
                        as: "followingPosts"
                    }
                },
                {
                    $project: {
                        followingPosts: 1,
                        _id: 0
                    }
                }
            ])

            return followingPosts
        }
    }
}