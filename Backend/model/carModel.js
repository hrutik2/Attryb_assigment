const mongoose=require("mongoose")

const carSchema=mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    image:String,
    color:String,
    Mileage:Number,
    yearOfManufatcher:Number,
    model:String,
    transmission:String,
})
const car=mongoose.model("Car",carSchema)

module.exports={car}