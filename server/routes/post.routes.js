import express from "express"
import {PostController} from "../controllers/post.controllers.js"
const router = express.Router()
const postController = PostController.getInstance()

router.post('/', postController.createPost)
router.get('/:id', postController.getPost)
router.get('/:id/timeline', postController.getTimeLinePosts)
//router.get('/:id/timeline', getTimeLinePosts)

router.put('/:id', postController.updatePost)
router.put('/:id/like', postController.likePost)
router.delete('/:id', postController.deletePost)

export default router