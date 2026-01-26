const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Admin = require("../Model/Admin")

module.exports.AdminSignup =async(req,res)=>{
    let{fullname,email,password} = req.body 
    const checkemail = await Admin.findOne({email})
      if(checkemail){
        return res.json({message:"Email already exist try another email"})
      }
    let hashed = await bcrypt.hash(password,10)
    const newAdmin  =  new Admin({
        fullname,email,password:hashed,
      })
      await newAdmin.save()
    const token = await jwt.sign({id:newAdmin._id},process.env.SECRET,{expiresIn:"24h"})
    res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV =="production",
    sameSite:process.env.NODE_ENV =="production" ? "none" :"strict",
    maxAge:5*60*60*1000
    })
      return res.status(200).json({
      success: true,
      message: "Signup successfull",   
    }); 
} 


module.exports.AdminLogin = async(req,res)=>{
  try{
  let{email,password}=req.body
  let checkEmail=await Admin.findOne({email})
  if(!checkEmail){
    return res.json({message:"No email found please try to singup"})
  }
  const decoded = await bcrypt.compare(password,checkEmail.password)
if(!decoded){
  return res.json({message:"Password is incorrect"})
}
const token  =  await jwt.sign({id:checkEmail._id},process.env.SECRET,{expiresIn:"24h"})
res.cookie("token",token,{
  httpOnly:true,
  secure:process.env.NODE_ENV == "production",
  sameSite:process.env.NODE_ENV == "production" ? "none" : "strict",
  maxAge:5*60*60*1000
})
return res.json({message:"Login Successfully",IsloggedIn:true})
  }
  catch(error){
    return res.json({message:error.message})
  }}


  module.exports.AdminVerify = async(req,res)=>{
  const token =  req.cookies.token
  if(!token){
    return res.json({message:""})
  }
  const decoded =  await jwt.verify(token,process.env.SECRET)
  if(!decoded){
    return res.json({IsloggedIn:false,message:"invalid token"})
  }else{
    return res.json({IsloggedIn:true,message:"Verified"})
  }
}


module.exports.AdminLogout = async(req,res)=>{
  res.clearCookie("token",{
  httpOnly:true,
  secure:process.env.NODE_ENV == "production",
  sameSite:process.env.NODE_ENV == "production" ? "none" : "strict",
  maxAge:5*60*60*1000
  })
   return res.json({IsloggedIn:false,message:"Logout Successfully"})
}