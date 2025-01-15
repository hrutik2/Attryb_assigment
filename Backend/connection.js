const mongoose=require("mongoose")

require("dotenv").config();

const Connection=mongoose.connect(process.env.mangoDB_url)

module.exports={Connection}