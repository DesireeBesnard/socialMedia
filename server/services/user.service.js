import { UserDAO } from "../dao/user.dao.js"
import UserModel from "../models/user.js"
const userDAO = UserDAO.getInstance()

export class UserService {

    static instance

    static getInstance() {
        if(!UserService.instance) {
            UserService.instance = new UserService()
        }
        return UserService.instance
    }

    async get(id){
        const user = await userDAO.get(id)
        return user
    }

    async update(id, update) {
        const updatedUser = await userDAO.update(id, update)
        return updatedUser
    }

    async delete(id) {
        const deletePost = await userDAO.delete(id)
        return deletePost
    }

    async follow(type, followUser, followingUser, currentUserId, id) {
        const follow = await userDAO.follow(type, followUser, followingUser, currentUserId, id)
        return follow
    }
}