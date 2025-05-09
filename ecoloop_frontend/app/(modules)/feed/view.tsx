"use client";

import { Header } from "@/app/header";
import "./feed.css";
import { Feed, FeedSave } from "./model";
import { FormEvent, useState } from "react";
import { saveFeed, upvoteService } from "./service";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";

interface Props {
  feeds: Feed[];
}

export const FeedView = (props: Props) => {
  const [feeds, setFeeds] = useState(props.feeds);

  const increment = (id: string) => {
    const newFeeds = feeds.map((f) =>
      f.id === id ? { ...f, upvotes: f.upvotes + 1 } : f
    );
    setFeeds(newFeeds);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FeedSave = {
      caption: (e.target as any).caption.value,
    };
    try {
      await saveFeed(Cookies.get("token")!, data);
      alert("Saved Feed");
      revalidatePath("/feed");
    } catch (e) {
      alert("Failed to save feed");
    }
  };

  const upvote = async (id: string) => {
    try {
      await upvoteService(id);
      increment(id);
    } catch (e) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>🌱 Community Feed</h1>

        <form onSubmit={onSubmit} className="post-form">
          <textarea
            name="caption"
            placeholder="Share something with the community..."
            required
          ></textarea>
          <div className="form-actions">
            <button type="submit" className="post-btn">
              Post
            </button>
          </div>
        </form>

        <div className="feed-list">
          {feeds.map((feed: Feed) => (
            <div className="feed-card">
              <div className="user">
                👤 <strong>{feed.name}</strong>
              </div>
              <p className="feed-text">{feed.caption}</p>
              <div className="actions">
                <button onClick={() => upvote(feed.id)} className="upvote-btn">
                  ⬆️ {feed.upvotes}
                </button>
                <button className="comment-btn">💬 3 Comments</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
