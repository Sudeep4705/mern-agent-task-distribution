const { rmSync } = require("node:fs")
const Agent  = require("../Model/Agent")
const bcrypt = require("bcrypt")


module.exports.AgentAdd = async(req,res)=>{
    const {name,email,mobile,password} = req.body
        const checkname = await Agent.findOne({name})
        if(checkname){
            return res.json({message:"Name is already exist"})
        }
        const checkemail = await  Agent.findOne({email})
        if(checkemail){
            return res.json({message:"Email already exist"})
        }
        const checkmobile = await Agent.findOne({mobile})
        if(checkmobile){
            return res.json({message:"mobile number is already exist"})
        }
        const hashed = await bcrypt.hash(password,10)
        const newAgent =  new Agent({
            name,email,mobile,password:hashed
        })
        await newAgent.save()
        return res.json({message:"Agent added"})
}

module.exports.getagent = async(req,res)=>{
    let data =  await Agent.find({})

    return res.json({agent:data})
}
