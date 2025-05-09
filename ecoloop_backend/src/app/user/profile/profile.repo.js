import { User } from "../../auth/auth.model.js";
import { Donation } from "../../donation/donation.model.js";
import { Food } from "../../food/food.model.js";
import { Feed } from "../../feed/feed.model.js";

export const getUser = async (id) => {
  return User.findById(id);
};

export const getRecentActivity = async (id) => {
  const latestDonation = await Donation.findOne({ userid: id }).sort({
    createdAt: -1,
  });

  const latestFoodDonation = await Food.findOne({ userid: id }).sort({
    createdAt: -1,
  });

  const latestFeedPost = await Feed.findOne({ userid: id }).sort({
    createdAt: -1,
  });

  return [latestDonation, latestFoodDonation, latestFeedPost];
};
