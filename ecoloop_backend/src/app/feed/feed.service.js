import { getFeedPosts, saveFeedPost, upvoteUpCounter } from "./feed.repo.js";

export const feedPostService = async (data) => {
  try {
    await saveFeedPost(data);
    return {
      message: "Posted!",
      status: 200,
    };
  } catch (err) {
    return {
      error: err,
      status: 500,
    };
  }
};

export const feedDataService = async () => {
  try {
    const posts = await getFeedPosts();
    return {
      posts: posts,
      status: 200,
    };
  } catch (err) {
    return {
      error: err,
      status: 500,
    };
  }
};

export const upvoteUpCounterService = async (id) => {
  try {
    await upvoteUpCounter(id);
    return {
      status: 201,
    };
  } catch (err) {
    return {
      error: err,
      status: 500,
    };
  }
};
