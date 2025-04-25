import { Donation } from './donation.model.js';

export const saveDonation = async (data) => {
  return await Donation.insertOne(data);
};

export const getLatestDonations = async () => {
  return await Donation.find().sort({ createdAt: -1 }).limit(3);
};