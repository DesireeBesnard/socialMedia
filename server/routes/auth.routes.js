import { Router } from 'express'
import { AuthController } from "../controllers/auth.controllers.js"
const router = Router()
const authController = AuthController.getInstance()


router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)

//router.post('/user/logout')

export default router