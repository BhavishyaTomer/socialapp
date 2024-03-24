const mongoose =require('mongoose')
const postSchema=new mongoose.Schema({
caption:String,
imageUrl:{
    public_id:String,
    url:String
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
},
createdAt:{
    type:Date,
    default:date.now
},
likes:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}],
comments:[{
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
},
comment:{
    type:string,
    required:true
}
}]
})

module.exports=mongoose.model("post",postSchema)