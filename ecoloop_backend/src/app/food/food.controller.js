import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { foodService, getRecentFoodService } from "./food.service.js";
import { foodFilterController } from "./filter/foodFilter.controller.js";

export const foodController = Router();
foodController.use("/filter", foodFilterController);

foodController.post("/", authenticate, async (req, res) => {
  const d = {
    title: req.body.title,
    location: req.body.location,
    foodType: req.body.type,
    date: req.body.date,
    description: req.body.description,
    userid: req.id,
  };

  try {
    await foodService(d);
    res.status(201).json({
      message: "Food Donation listed succesfully.",
      food: d,
    });
  } catch (err) {
    res.status(500).json({
      message: "Couldn't list food donation",
      error: err,
    });
  }

  
});

foodController.get("/", async (req, res) => {
  try {
    const recentFood = await getRecentFoodService();
    res.status(200).json(recentFood);
  } catch (err) {
    res.status(500).json({
      message: "No recent food donations.",
      error: err,
    });
  }
});
