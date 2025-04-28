import { Router } from "express";
import { foodFilteredService } from "./foodFilter.service.js";

export const foodFilterController = Router();

foodFilterController.get("/", async (req, res) => {
  const location = req.body.location;
  try {
    const filterdFood = await foodFilteredService(location);
    res.status(200).json(filterdFood);
  } catch (err) {
    res.status(500).json({
      message: "Couldn't fetch filtered food.",
      error: err,
    });
  }
});
