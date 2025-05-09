import { getLatestFoodDonations, saveFood } from "./food.repo.js";

export const foodService = async (data) => {
  try {
    await saveFood(data);
    return {
      status: 201,
    };
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const getRecentFoodService = async () => {
  return await getLatestFoodDonations();
};
