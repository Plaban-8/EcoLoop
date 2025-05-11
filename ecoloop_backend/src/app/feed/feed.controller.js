import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import {
  feedDataService,
  feedPostService,
  upvoteUpCounterService,
} from "./feed.service.js";

export const feedController = Router();

feedController.post("/postFeed", authenticate, async (req, res) => {
  const data = {
    caption: req.body.caption,
    upvotes: 0,
    userid: req.id,
  };

  res.json(await feedPostService(data));
});

feedController.get("/feedPosts", async (req, res) => {
  const posts = await feedDataService();
  res.status(200).json(posts);
});

feedController.put("/upvote/:id", async (req, res) => {
  try {
    await upvoteUpCounterService(req.params.id);
    return res.status(201).json({ message: "Successfully upvoted" });
  } catch (err) {
    return res.status(405).json({ message: "Something Went Wrong" });
  }
});
