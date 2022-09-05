import { PostService } from "../services/post.service.js"
const postService = PostService.getInstance()


export class PostController {
    
    static instance

    static getInstance() {
        if (!PostController.instance) {
            PostController.instance = new PostController() 
        }
        return PostController.instance
    }

    async createPost(req, res) {
        try {
            const newPost = await postService.create(req.body)
            res.status(200).send(newPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getPost(req, res) {

        try {
            const postId = req.params.id
            const post = await postService.get(postId)
            res.status(200).send(post)
        } catch (error) {
            res.status(500).json("Not existing post")
        }
    }

    async updatePost(req, res) {

        try {
            const postId = req.params.id
            const {userId} = req.body
    
            const post = await postService.get(postId)
            if (post.userId === userId) {
                await postService.update(post, req.body)
                res.status(200).send("Post updated!")
            } else {
                res.status(403).send("Action forbidden")
            }
        } catch (error) {
            res.status(500).json(error)            
        }
    }

    async deletePost(req, res) {

        try {
            const postId = req.params.id
            const {userId} = req.body

            const post = await postService.get(postId)
            if (post.userId === userId) {
                await postService.delete(post, req.body)
                res.status(200).send("Post deleted!")
            } else {
                res.status(403).send("Action forbidden")
            }
        } catch (error) {
            res.status(500).json(error)            
        }
    }

    async likePost(req, res) {

        try {
            const postId = req.params.id
            const {userId} = req.body
    
            const post = await postService.get(postId)

            if((post.userId !== userId) && (!post.likes.includes(userId))) {
                await postService.like(post, userId)
                res.status(200).json("Post liked")
            } else {
                await postService.dislike(post, userId)
                res.status(200).json("Post unliked")
            }
        } catch (error) {
            res.status(500).json(error)            
        }
    }

    async getTimeLinePosts(req, res) {
        try {
            const userId = req.params.id

            const currentUserPosts = await postService.getTimeLinePosts("current", userId)
            const followingPosts = await postService.getTimeLinePosts("follow", userId)

            const timeLine = currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => {
                return b.createdAt - a.createdAt
            })

            res.status(200).send(timeLine)

        } catch (error) {
            res.status(500).json(error)            
        }
    }
}