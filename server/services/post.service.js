import { PostDAO } from "../dao/post.dao.js"
const postDAO = PostDAO.getInstance()

export class PostService {

    static instance

    static getInstance() {
        if( !PostService.instance ) {
            PostService.instance = new PostService()
        }
        return PostService.instance
    }

    async create(post) {
        const newPost = await postDAO.create(post)
        return newPost
    }

    async get(postId) {
        return await postDAO.get(postId)
    }

    async update(post, update) {
        return await postDAO.update(post, update)
    }

    async delete(post, update) {
        return await postDAO.delete(post, update)
    }

    async like(post, userId) {
        return await postDAO.like(post, userId)
    }

    async dislike(post, userId) {
        return await postDAO.dislike(post, userId)
    }

    async getTimeLinePosts(type, userId) {
        return await postDAO.getTimeLinePosts(type, userId)
    }
}