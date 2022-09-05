//import UserModel from '../models/user.js'
import bcrypt from "bcrypt"
import {AuthService} from '../services/auth.service.js'
const authService = AuthService.getInstance()

export class AuthController {
    
    static instance

    static getInstance() {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController() 
        }
        return AuthController.instance
    }

    async registerUser(req, res) {
        try {
            const {username, password, firstname, lastname} = req.body

            const  salt= await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
        
            const newUser = await authService.register({username, password: hashedPassword, firstname, lastname})
            res.status(200).send(newUser)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async loginUser(req, res) {
        const { username, password } = req.body

        try {
            const user = await authService.login(username)
    
            if(user) {
                const validity = await bcrypt.compare(password, user.password)
                if(validity) {
                    res.status(200).json(user)
                } else {
                    res.status(400).json("Wrong password")
                }
            } else {
                res.status(404).json("User does not exist")
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}