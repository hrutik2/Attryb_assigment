const express=require("express")
const { User } = require("../model/userModel")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const userRoutes=express.Router()
require("dotenv").config();

userRoutes.post("/register",async(req,res)=> {
    const { name,email,password}=req.body
    try {
        const existinguser=await User.findOne({email})
        if(existinguser) {
            return res.status(400).send({msg:"User already exists"})
        }
        else{
         let hashPassword= await bcrypt.hash(password,5)
         const User= new User({email,name,password:hashPassword})
         await User.save()
         return res.status(200).send({ msg: "User created" });
        }
    } catch (error) {
         return res.status(400).send({msg:"Internal Server Error"})
    }
})
userRoutes.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const existinguser=await User.findOne({email})
        if(!existinguser) {
            return res.status(400).send({msg:"User does not exist"})
        }
        else{
            const isMatch=await bcrypt.compare(password,existinguser.password)
            if(!isMatch) {
                return res.status(400).send({msg:"Invalid Password"})
            }
            else{
                const token = jwt.sign({ userId: existinguser._id }, process.env.KEY, {
                    expiresIn: "1d",
                  });
                  return res.status(200).send({msg:"Login Success",token})
            }
        }
        
    } catch (error) {
        return res.status(400).send({msg:"Internal Server Error"}) 
    }
})
module.exports={userRoutes}