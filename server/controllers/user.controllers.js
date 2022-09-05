import { UserService } from "../services/user.service.js"
const userService = UserService.getInstance()
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

            const user = await userService.get(id)

            if(user) {
                const {password, ...otherDetails} = user._doc
                res.status(200).json(otherDetails)
            } else {
                res.status(404).json("user does not exist")
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

                const user = await userService.update(id, req.body)
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
                await userService.delete(id)
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
                const followUser = await userService.get(id)
                const followingUser = await userService.get(currentUserId)

                if(!followUser.followers.includes(currentUserId)) {
                    await userService.follow("follow", followUser, followingUser, currentUserId, id)
                    res.status(200).json("user followed")
                } else {
                    await userService.follow("unfollow", followUser, followingUser, currentUserId, id) 
                    res.status(200).json("user unfollowed")
                }
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
}



/*export const getUser = async(req, res) => {
    const id = req.params.id
    try {
        const user = await UserModel.findById(id)
        if(user) {
            const {password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("user does not exist")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async(req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus, password } = req.body

    if(id === currentUserId || currentUserAdminStatus) {
        try {

            if(password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Access denied! You can only update your own profile")
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus} = req.body

    if(id === currentUserId || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Access denied! You can only delete your own profile")
    }
}


export const followUser = async (req,res) => {
    const id = req.params.id
    const { currentUserId } = req.body

    if( id === currentUserId) {
        res.status(403).json("Action forbidden")
    } else {
        try {

          const followUser = await UserModel.findById(id)  
          const followingUser = await UserModel.findById(currentUserId)

          if(!followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({$push: {followers: currentUserId}})
            await followingUser.updateOne({$push: {following: id}})
            res.status(200).json("user followed")
          } else {
            res.status(403).json("User is already followed by you")
          }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export const unFollowUser = async (req,res) => {
    const id = req.params.id
    const { currentUserId } = req.body

    if( id === currentUserId) {
        res.status(403).json("Action forbidden")
    } else {
        try {

          const followUser = await UserModel.findById(id)  
          const followingUser = await UserModel.findById(currentUserId)

          if(followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({$pull: {followers: currentUserId}})
            await followingUser.updateOne({$pull: {following: id}})
            res.status(200).json("user unfollowed")
          } else {
            res.status(403).json("User is not followed by you")
          }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}*/