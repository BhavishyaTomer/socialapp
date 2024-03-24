const post=require("../models/post")
exports.createPosts=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}