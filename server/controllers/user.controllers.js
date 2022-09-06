import { UserService } from "../services/user.service.js"
import bcrypt from "bcrypt"

export class UserController {
     
    static instance 

    static getInstance() {
        if(!UserController.instance) {
            UserController.instance = new UserController()
        }
        return UserController.instance
    }

    async getUser(req, res) {
        try {
            const id = req.params.id
            console.log(id)
            const user = await UserService.getInstance().get(id)
            if(user) {
                const {password, ...otherDetails} = user._doc
                res.status(200).json(otherDetails)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateUser(req, res) {
        const id = req.params.id
        const { currentUserId, currentUserAdminStatus, password } = req.body

        if(id === currentUserId || currentUserAdminStatus){
            try {
                if(password) {
                    const salt = await bcrypt.genSalt(10)
                    req.body.password = await bcrypt.hash(password, salt)
                }

                const user = await UserService.getInstance().update(id, req.body)
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).json("Access denied! You can only update your own profile")
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const {currentUserId, currentUserAdminStatus} = req.body

        if(id === currentUserId || currentUserAdminStatus) {
            try {
                await UserService.getInstance().delete(id)
                res.status(200).json("user deleted")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).json("Access denied! You can only delete your own profile")
        }
    }

    async followUser(req, res) {
        const id = req.params.id
        const { currentUserId } = req.body

        if( id === currentUserId) {
            res.status(403).json("Action forbidden")
        } else {
            try {
                const followUser = await UserService.getInstance().get(id)
                const followingUser = await UserService.getInstance().get(currentUserId)

                if(!followUser.followers.includes(currentUserId)) {
                    await UserService.getInstance().follow("follow", followUser, followingUser, currentUserId, id)
                    res.status(200).json("user followed")
                } else {
                    await UserService.getInstance().follow("unfollow", followUser, followingUser, currentUserId, id) 
                    res.status(200).json("user unfollowed")
                }
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
}
