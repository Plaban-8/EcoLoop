import { User } from "../auth/auth.model.js";
import { Donation } from "./donation.model.js";

export const saveDonation = async (data) => {
  await Donation.insertOne(data);
  await User.findByIdAndUpdate(
    data.userid,
    { $inc: { impact: 10 } },
    { new: true }
  );
  return;
};

export const getLatestDonations = async () => {
  const donations = await Donation.find()
    .sort({ createdAt: -1 })
    .populate({
      path: "userid",
      select: "name phone",
    });

  return donations.map((donation) => ({
    title: donation.title,
    location: donation.location,
    description: donation.description,
    category: donation.category,
    image: donation.image,
    name: donation.userid.name,
    phone: donation.userid.phone,
  }));
};
