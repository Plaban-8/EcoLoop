import { User } from '../auth/auth.model.js';
import { Donation } from './donation.model.js';

export const saveDonation = async (data) => {

  await Donation.insertOne(data)
  await User.findByIdAndUpdate(data.userid, {$inc: {impact: 10}}, {new: true})  
  return
};
 
export const getLatestDonations = async () => {
  return await Donation.find().sort({ createdAt: -1 });
};
