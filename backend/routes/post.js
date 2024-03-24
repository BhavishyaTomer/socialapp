const express=require('express')
const { createPosts } = require('../controller/post')
const router=express.Router()
router.route(".post/upload").post(createPosts)
module.exports=router