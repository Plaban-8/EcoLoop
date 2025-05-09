export interface FoodFetch {
  id: string;
  title: string;
  location: string;
  foodType: "Cooked" | "Packaged" | "Perishable";
  description: string;
  name: string;
  phone: string
}
export interface FoodSave {
  title: string;
  location: string;
  type: "Cooked" | "Packaged" | "Perishable";
  date: string;
  description: string;
}