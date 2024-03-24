const app=require("./app")
const { connectDatabase } = require("./config/database")

connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(
        "server is runnig on port ",process.env.PORT
    )
})


// process.env.PORT is an environment variable that is used to set the port number on which a Node.js application will run.

// In Node.js, process.env is a global object that provides access to all environment variables that were available when the process was started.