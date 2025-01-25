const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const carmodle = require("../model/carsmodel");

const CarRoutes = express.Router();

CarRoutes.get("/", authMiddleware, async (req, res) => {
  try {
    const cars = await carmodle.find(req.body); // Use query parameters for filtering
    res.status(200).json(cars);
  } catch (err) {
    console.error("Error fetching cars:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
CarRoutes.get("/:id", authMiddleware, async (req, res) => {
  try {
    const car = await carmodle.findById(req.params.id);
    if (!car) {
      return res.status(404).send({ message: "Car not found" });
    }
    res.status(200).json(car);
  } catch (err) {
    console.error("Error fetching car by ID:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


CarRoutes.post("/addcar", authMiddleware, async (req, res) => {
  try {
    const newcar = new carmodle(req.body); 
    let data = await newcar.save();
    res.status(201).send({ mgs: "Car added successfully", data });
  } catch (err) {
    res.status(500).send({ mgs: err.message });
  }
});


CarRoutes.patch("/editCar/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  try {
    const findData = await carmodle.findById(id);
    if (!findData) {
      return res.status(404).send({ mgs: "Data not found" });
    } else {
      if (findData.userId === req.body.userId) {
        const data = await carmodle.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send({ mgs: "Car updated successfully", data });
      } else {
        res.status(401).send({ mgs: "You are not authorized to update this data" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


CarRoutes.delete("/deleteCar/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  try {
    const findData = await carmodle.findById(id);
    if (!findData) {
      return res.status(404).send({ mgs: "Data not found" });
    } else {
      if (findData.userId === req.body.userId) {
        const data = await carmodle.findByIdAndDelete(id); 
        res.status(200).send({ mgs: "Car deleted successfully", data });
      } else {
        res.status(401).send({ mgs: "You are not authorized to delete this data" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { CarRoutes };

