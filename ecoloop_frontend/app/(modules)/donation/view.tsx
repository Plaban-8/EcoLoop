"use client";

import "./donation.css";
import { Header } from "../../header";
import { DonationFetch, DonationSave } from "./model";
import { FormEvent } from "react";
import { saveDonation } from "./service";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";

interface Props {
  donations: DonationFetch[];
}

export default function DonationView(props: Props) {
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const photo = (e.target as any)["donation-photo"].files?.[0];
    const convertToBase64 = (
      file: File
    ): Promise<string | ArrayBuffer | null> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };

    const base64Photo = photo ? await convertToBase64(photo) : null;

    const data: DonationSave = {
      title: (e.target as any).title.value,
      location: (e.target as any).location.value,
      category: (e.target as any).category.value,
      description: (e.target as any).description.value,
      image: base64Photo as string,
    };
    try {
      await saveDonation(Cookies.get("token")!, data);
      alert("Saved Donation");
    } catch (e) {
      alert("Failed to save donation");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Donations</h1>

        <form onSubmit={onSubmit} className="donation-form">
          <input
            type="text"
            name="title"
            placeholder="Donation Title"
            required
          />
          <input
            type="file"
            accept="image/*"
            id="donation-photo"
            name="donation-photo"
            required
          />

          <div className="form-group">
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
            />
            <select name="category" required>
              <option value="">Select Category</option>
              <option value="clothes">Clothes</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="books">Books</option>
              <option value="others">Others</option>
            </select>
          </div>

          <textarea
            name="description"
            placeholder="Description"
            required
          ></textarea>
          <button type="submit">Post Donation</button>
        </form>

        <h2>Donation List</h2>

        <div className="donation-list-scrollable">
          {props.donations.map((donation: DonationFetch) => (
            <div className="donation-entry">
              <p className="donor-info">
                <strong>
                  {donation.name} ({donation.phone})
                </strong>
              </p>
              <img
                src={donation.image}
                alt={donation.description}
                className="donation-photo"
              />
              <h3>
                {donation.title} – {donation.location}
              </h3>
              <p>{donation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
