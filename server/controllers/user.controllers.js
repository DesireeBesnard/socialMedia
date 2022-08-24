import UserModel from "../models/user.js";
import bcrypt from "bcrypt"

export const getUser = async(req, res) => {
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
    }

}