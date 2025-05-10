"use client";

import { FeedFetch } from "./model";
import { useState, useEffect } from "react";
import { upvoteService } from "./service";

interface Props {
  feed: FeedFetch;
  increment: (id: string) => void;
}

export const SingleFeed = (props: Props) => {
  const { feed, increment } = props;
  const [comment, setComment] = useState(0);

  const upvote = async (id: string) => {
    try {
      await upvoteService(id);
      increment(id);
    } catch (e) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    setComment(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  }, []);

  return (
    <div className="feed-card" key={feed.id}>
      <div className="user">
        👤 <strong>{feed.name}</strong>
      </div>
      <p className="feed-text">{feed.caption}</p>
      <div className="actions">
        <button onClick={() => upvote(feed.id)} className="upvote-btn">
          ⬆️ {feed.upvotes}
        </button>
        <button className="comment-btn">💬 {comment} Comments</button>
      </div>
    </div>
  );
};
