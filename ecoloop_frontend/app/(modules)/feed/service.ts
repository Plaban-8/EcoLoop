import { Feed, FeedSave } from "./model";

export const getFeeds: () => Promise<{ posts: Feed[] }> = async () => {
  const res = await fetch("http://localhost:4000/feed/feedPosts", {
    cache: "no-store",
  });
  return await res.json();
};

export const saveFeed = async (token: string, feed: FeedSave) => {
  const res = await fetch("http://localhost:4000/feed/postFeed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      AUTHORIZATION: `Bearer ${token}`,
    },
    body: JSON.stringify(feed),
  });
  return await res.json();
};

export const upvoteService = async (id: string) => {
  const res = await fetch(`http://localhost:4000/feed/upvote/${id}`, {
    method: "PUT",
  });
  return await res.json();
};
