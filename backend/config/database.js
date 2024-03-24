const mongoose=require("mongoose")

exports.connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URL).then((con)=>{
        console.log("database conected",con.connection.host)
    }).catch((err)=>{
   console.log("error is",err)
    })
}
