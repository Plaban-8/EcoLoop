import { Feed } from "./feed.model.js";

export const saveFeedPost = async (data) => {
  await Feed.insertOne(data);
  await User.findByIdAndUpdate(data.userid, {$inc: {impact: 10}}, {new: true})  
};

export const getFeedPosts = async () => {
  return await Feed.find().sort({ createdAt: -1 });
};

export const upvoteUpCounter = async (id) => {
  return await Feed.findByIdAndUpdate(
    id,
    { $inc: { upvotes: 1 } }, // Increment the upvotes field by 1
    { new: true } // Return the updated document
  );
};
