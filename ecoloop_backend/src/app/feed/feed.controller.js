import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { feedDataService, feedPostService } from "./feed.service.js";

export const feedController = Router();

feedController.post("/postFeed", authenticate, async (req, res) => {
  const data = {
    caption: req.body.caption,
    upvotes: 0,
    userid: req.id,
  };

  res.send(await feedPostService(data));
});

feedController.get("/feedPosts", async (req, res) => {
  res.send(await feedDataService());
});

feedController.patch('/upvote/:id', async(req,res)=>{
  await upvoteUpCounterService(req.params.id);
})