import { Router } from 'express'
import { registerUser, loginUser } from "../controllers/auth.controllers.js"
const router = Router()


router.post('/register', registerUser)
router.post('/login', loginUser)

//router.post('/user/logout')

export default router