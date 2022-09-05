import express from "express";
import { UserController } from "../controllers/user.controllers.js";
const router = express.Router()
const userController = UserController.getInstance()

router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id/follow', userController.followUser)

export default router