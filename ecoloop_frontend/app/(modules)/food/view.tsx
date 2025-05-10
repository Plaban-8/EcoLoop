"use client";

import "./donation.css";
import { Header } from "../../header";
import { FoodFetch, FoodSave } from "./model";
import { FormEvent } from "react";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";
import { saveFood } from "./service";

interface Props {
  foods: FoodFetch[];
}

export default function FoodView(props: Props) {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FoodSave = {
      title: (e.target as any).title.value,
      location: (e.target as any).location.value,
      date: (e.target as any).date.value,
      description: (e.target as any).description.value,
      type: (e.target as any).foodType.value,
    };
    try {
      console.log(await saveFood(Cookies.get("token")!, data));
      alert("Saved Food Donation");
    } catch (e) {
      alert("Failed to save food donation");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Food Donation</h1>

        <form className="food-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Food Donation Title"
            required
          />
          <div className="form-group">
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
            />
            <select name="foodType" required>
              <option value="">Food Type</option>
              <option value="Cooked">Cooked</option>
              <option value="Packaged">Packaged</option>
              <option
                value="P q
            erishable"
              >
                Perishable
              </option>
            </select>
            <input type="date" name="date" required />
          </div>
          <textarea
            name="description"
            placeholder="Short Description"
            required
          ></textarea>
          <button type="submit">Post Donation</button>
        </form>
        {/* 
    <div className="filter-bar">
      <label htmlFor="filter-location">Filter by Location:</label>
      <select id="filter-location">
        <option>All</option>
        <option>Dhaka</option>
        <option>Chittagong</option>
        <option>Khulna</option>
      </select>
    </div> */}

        <h2>Food Donation List</h2>
        <div className="food-posts-scrollable">
          {props.foods.map((food: FoodFetch) => (
            <div className="food-card" key={food.id}>
              <div>
                <p className="donor-info">
                  <strong>
                    {food.name} ({food.phone})
                  </strong>
                </p>
                <h3>
                  {food.title} – {food.location}
                </h3>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
