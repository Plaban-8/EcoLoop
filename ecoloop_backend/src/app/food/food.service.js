import { getLatestFoodDonations, saveFood } from "./food.repo.js";

export const foodService = async (data) => {
  return await saveFood(data);
};

export const getRecentFoodService = async () => {
  return await getLatestFoodDonations();
};
