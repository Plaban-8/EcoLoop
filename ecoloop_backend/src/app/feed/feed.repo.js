import { Feed } from "./feed.model.js";

export const saveFeedPost = async (data) => {
  return await Feed.insertOne(data);
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
