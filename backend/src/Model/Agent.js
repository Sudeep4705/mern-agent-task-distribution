const mongoose =  require("mongoose")
const Schema  = mongoose.Schema


const agentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String  
    },
    mobile:{
    type: String,
    required: true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
})


const Agent = mongoose.model("Agent",agentSchema)
module.exports = Agent