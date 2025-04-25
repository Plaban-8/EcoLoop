export const donationService = async (data) => {
  return await saveDonation(data);
};

export const recentDonationService = async () => {
  return await getLatestDonations();
};
