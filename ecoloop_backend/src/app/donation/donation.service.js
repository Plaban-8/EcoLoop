import { getLatestDonations, saveDonation } from "./donation.repo.js";

export const donationService = async (data) => {
  return await saveDonation(data);
};

export const recentDonationService = async () => {
  return await getLatestDonations();
};
