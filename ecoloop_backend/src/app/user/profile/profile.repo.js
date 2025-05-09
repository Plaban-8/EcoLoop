import { User } from "../../auth/auth.model.js";


export const getUser = async (id) => {
  return User.findById(id);
};

export const getRecentActivity = async (id) => {
  const latestDonation = await Donation.findOne({ userid: userId }).sort({
    createdAt: -1,
  });

  const latestFoodDonation = await Food.findOne({ userid: userId }).sort({
    createdAt: -1,
  });

  const latestFeedPost = await Feed.findOne({ userid: userId }).sort({
    createdAt: -1,
  });

  return [latestDonation, latestFoodDonation, latestFeedPost];
};
