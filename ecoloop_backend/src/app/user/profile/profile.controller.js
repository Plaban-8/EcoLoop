import { Router } from "express";
import { getUser } from "../../auth/login/login.repo.js";
import { getProfile } from "./proflie.service.js";
import { authenticate } from "../../auth/auth.middleware.js";

export const profileController = Router();

profileController.get("/", authenticate, async (req, res) => {
  const id = req.id;
  const profile = await getProfile(id);
  res.status(202).json(profile);
});
