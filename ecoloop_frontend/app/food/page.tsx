import "./food.css";
import { getFoods } from "./service";
import FoodView from "./view";
import { FoodFetch } from "./model";

export default async function FoodPage() {
  const foods: FoodFetch[] = await getFoods();
  return <FoodView foods={foods} />;
}
