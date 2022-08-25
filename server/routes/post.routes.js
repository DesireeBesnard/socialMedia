import express from "express"
import { createPost, deletePost, getPost, getTimeLinePosts, likePost, updatePost } from "../controllers/post.controllers.js"

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.get('/:id/timeline', getTimeLinePosts)
router.put('/:id', updatePost)
router.put('/:id/like', likePost)
router.delete('/:id', deletePost)

export default router