const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "please enter your name"]
    },
    avater:{
public_id:String,
url:String
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        select: false
    },
    user:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"post"
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]

})

module.exports = mongoose.model("user", userSchema)