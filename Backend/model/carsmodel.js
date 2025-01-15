const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  color: String,
  Mileage: Number,
  yearOfManufatcher: Number,
  model: String,
  transmission: String,
  userId: String, 
});

const carmodle = mongoose.model("Car", carSchema);
module.exports = carmodle;
