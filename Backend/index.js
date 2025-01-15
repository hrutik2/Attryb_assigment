const express=require("express")
const cors=require("cors");
const { connection } = require("./connection");

const { CarRoutes } = require("./Route/carRoutes");
const { oem } = require("./Route/omnRoutes");
const { authMiddleware } = require("./middleware/auth");
const { userRoutes } = require("./Route/userRoutes");
require("dotenv").config();
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoutes)
app.use("/car",CarRoutes)
app.use ("/oem",authMiddleware ,oem)

app.listen(process.env.Port,async()=>{
    try {
        await connection
        console.log(`server is running on port ${process.env.Port}`)
    } catch (error) {
        console.log(error)
    }
})
