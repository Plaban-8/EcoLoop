"use client";

import { Header } from "@/app/header";
import "./feed.css";
import { FeedFetch, FeedSave } from "./model";
import { FormEvent, useState } from "react";
import { getFeeds, saveFeed, upvoteService } from "./service";
import Cookies from "js-cookie";
import { SingleFeed } from "./single-feed";

interface Props {
  feeds: FeedFetch[];
}

export const FeedView = (props: Props) => {
  const [feedstate, setFeeds] = useState(props.feeds);

  const increment = (id: string) => {
    const newFeeds = feedstate.map((f) =>
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
      setFeeds(await getFeeds());
    } catch (e) {
      alert("Failed to save feed");
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
          {feedstate.map((feed: FeedFetch) => (
            <SingleFeed increment={increment} feed={feed} />
          ))}
        </div>
      </div>
    </>
  );
};
