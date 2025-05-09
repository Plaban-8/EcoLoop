import { FoodFetch, FoodSave } from "./model";

export const getFoods: () => Promise<FoodFetch[]> = async () => {
  const donations = await fetch("http://localhost:4000/food", {
    cache: "no-store",
  });
  return await donations.json();
};

export const saveFood = async (token: string, data: FoodSave) => {
  const response = await fetch('http://localhost:4000/food', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${token}`
    },
    body: JSON.stringify(data),
    cache: "no-store"
  });
  return await response.json();
}