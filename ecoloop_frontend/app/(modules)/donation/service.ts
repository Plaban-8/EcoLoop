import { DonationFetch, DonationSave, User } from "./model";

export const getDonations: () => Promise<DonationFetch[]> = async () => {
  const donations = await fetch("http://localhost:4000/donation", {
    cache: "no-store",
  });
  return await donations.json();
};

export const saveDonation = async (token: string, data: DonationSave) => {
  const response = await fetch('http://localhost:4000/donation', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'AUTHORIZATION': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}