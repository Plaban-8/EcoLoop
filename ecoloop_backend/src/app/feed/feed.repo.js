import { Feed } from "./feed.model.js";

export const saveFeedPost = async (data) => {
  await Feed.insertOne(data);
  await User.findByIdAndUpdate(data.userid, {$inc: {impact: 10}}, {new: true})  
};

export const getFeedPosts = async () => {
  try {
    const posts = await Feed.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "userid",
        select: "name",
      });

    return posts.map((post) => ({
      caption: post.caption,
      upvotes: post.upvotes,
      name: post.userid.name,
      id: post._id
    }));
  } catch (error) {
    throw new Error(`Failed to get feed posts: ${error.message}`);
  }
};

export const upvoteUpCounter = async (id) => {
  return await Feed.findByIdAndUpdate(
    id,
    { $inc: { upvotes: 1 } }, // Increment the upvotes field by 1
    { new: true } // Return the updated document
  );
};
