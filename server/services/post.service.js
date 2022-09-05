//import { PostDAO } from "../dao/auth.dao.js"

export class PostService {

    static instance

    static getInstance() {
        if( !PostService.instance ) {
            PostService.instance = new PostService()
        }
        return PostService.instance
    }

    async create(post) {
        const newPost = await PostDAO.getInstance().create(post)
        return newPost
    }

    async get(id) {
        return await PostDAO.getInstance().get(id)
    }

    async update(postId, userId) {
        return await PostDAO.getInstance().update(postId, userId)
    }

    async delete(id, userId) {
        return await PostDAO.getInstance().delete(id, userId)
    }

    async like(id, userId) {
        return await PostDAO.getInstance().like(id, userId)
    }

    async login(getTimeLinePosts) {
        return await PostDAO.getInstance().getTimeLinePosts(userId)
    }
}