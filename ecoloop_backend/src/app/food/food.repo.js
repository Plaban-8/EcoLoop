import { User } from "../auth/auth.model.js";
import { Food } from "./food.model.js";

export const saveFood = async (foodData) => {
  try {
    await Food.insertOne(foodData);
    await User.findByIdAndUpdate(
      foodData.userid,
      { $inc: { impact: 10 } },
      { new: true }
    );
    return;
  } catch (err) {
    console.log(err);
  }
};

export const getLatestFoodDonations = async () => {
  try {
    const donations = await Food.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .populate({
        path: "userid",
        select: "name phone",
      });

    return donations.map((donation) => ({
      title: donation.title,
      location: donation.location,
      description: donation.description,
      type: donation.type,
      name: donation.userid.name,
      phone: donation.userid.phone,
    }));
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
