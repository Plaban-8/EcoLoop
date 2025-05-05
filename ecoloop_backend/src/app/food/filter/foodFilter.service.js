import { getFilteredFood } from "../food.repo.js";

export const foodFilteredService = async (location) => {
  return await getFilteredFood(location);
};
