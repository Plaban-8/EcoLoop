import { Food } from "./food.model.js";

export const saveFood = async (foodData) => {
  try {
    const newFood = new Food(foodData);
    return await newFood.save();
  } catch (error) {
    throw new Error(`Failed to save food donation: ${error.message}`);
  }
};

export const getLatestFoodDonations = async () => {
  try {
    return await Food.find().sort({ createdAt: -1 }).limit(3);
  } catch (error) {
    throw new Error(`Failed to get latest food donations: ${error.message}`);
  }
};

export const getFilteredFood = async (location) => {
  try {
    return await Food.find({ location: new RegExp(location, "i") });
  } catch (error) {
    throw new Error(`Failed to filter food by location: ${error.message}`);
  }
};
