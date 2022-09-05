import UserModel from "../models/user.js"


export class UserDAO {

    static instance

    static getInstance() {
        if(!UserDAO.instance) {
            UserDAO.instance = new UserDAO
        }
        return UserDAO.instance
    }

    async get(id) {
        return await UserModel.findById(id)
    }

    async update(id, update) {
        return await UserModel.findByIdAndUpdate(id, update, {new: true})
    }

    async delete(id){
        return await UserModel.findByIdAndDelete(id)
    }

    async follow(type, followUser, followingUser, currentUserId, id){
        
        if(type === "follow") {
            await followUser.updateOne({$push: {followers: currentUserId}})
            await followingUser.updateOne({$push: {following: id}})
        } else {
            await followUser.updateOne({$pull: {followers: currentUserId}})
            await followingUser.updateOne({$pull: {following: id}})
        }
    }

}