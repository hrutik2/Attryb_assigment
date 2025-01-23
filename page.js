const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const connnection=mongoose.connect("url")


const app=express()
app.use(express.json())
app.use(cors())



app.get("/",async(req ,res)=>{
    try {
        let data= await user.find()
         res.send(data)
        
    } catch (error) {
        res.send(error)
    }
})
app.post("/add",async(req,res)=>{
    const {name,email,password}=req.body
    try {
       let registeruser= await user.find({email})
       if(!registeruser){
       let newuser=new user({name,email,password})
       await newuser.save()
       res.send({msg:"user created"})
       }
       else{
        res.send({msg:"user already present"})
       }
        
    } catch (error) {
        res.send(error)
    }
})

app.listen(3000,async()=>{
    try{
        await connection 
        console.log("server was running")
    }catch (err) {
       console.log(err)
    }
})