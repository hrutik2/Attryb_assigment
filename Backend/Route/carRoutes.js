const express = require("express");
const { car } = require("../model/carModel");
const { authMiddleware } = require("../middleware/auth");

const CarRoutes = express.Router();

CarRoutes.get("/",authMiddleware, async (req, res) => {
  try {
    const cars = await car.find(req.params);
    res.send(cars);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
CarRoutes.post("/addcar",authMiddleware, async (req, res) => {
  try {
    const car = new car(req.body);
    let data = await car.save();
    res.status(300).send({ mgs: "car added succefully", data });
  } catch (err) {
    res.status(500).send({ mgs: err.message });
  }
});
CarRoutes.patch("/editCar/:id",authMiddleware, async (req, res) => {
  const id = req.params.id;
  try {
    const findData = await car.findById(id);
    if (!findData) {
      return res.status(404).send({ mgs: "Data not found" });
    } else {
      if (findData.userId == req.body.userId) {
        const data = await car.findByIdAndUpdate(id, req.body);
        res.status(200).send({ mgs: "car updated successfully", data });
      } else {
        res
          .status(401)
          .send({ mgs: "you are not authorized to update this data" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
});
CarRoutes.delete("/deleteCar/:id",authMiddleware, async (req, res) => {
  const id = req.params.id;
  try {
    const findData = await car.findById(id);
    if (!findData) {
      return res.status(404).send({ mgs: "Data not found" });
    } else {
      if (findData.userId == req.body.userId) {
        const data = await car.findByIdAndDelete(id);
        res.status(200).send({ mgs: "car deleted successfully", data });
      } else {
        res
          .status(401)
          .send({ mgs: "you are not authorized to delete this data" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
});

module.exports={CarRoutes}
