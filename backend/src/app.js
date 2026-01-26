require("dotenv").config();
console.log(process.env.MONGO_URL);

const express =  require("express")
const app = express()
const mongoose = require('mongoose')
const Cors = require("cors")
const cookieParser = require('cookie-parser')
const URL = process.env.MONGO_URL
const adminRoutes = require("../src/Routes/Admin")
const agentRoutes = require("../src/Routes/Agent")
const taskroutes =require("../src/Routes/Task")

// Database
const DbConnection=async(url)=>{
    await mongoose.connect(url)
}
DbConnection(URL)
.then(()=>{
    console.log("DATABASE CONNECTED");
})
.catch((err)=>{
console.log(err);
})



// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Cors({origin:" http://localhost:5173",credentials:true}))
app.use(cookieParser())

// routes
app.use("/admin",adminRoutes)
app.use("/agent",agentRoutes)
app.use("/task",taskroutes)





// server
app.listen(8003,()=>{
    console.log("LISTENING ON PORT 8003");
})