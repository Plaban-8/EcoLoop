import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { donationService, recentDonationService } from "./donation.service.js";

export const donationController = Router();

donationController.post("/", authenticate, async (req, res) => {
  const d = {
    title: req.title,
    location: req.loaction,
    description: req.description,
    category: req.category,
    image: req.image,
    user: req.id,
  };

  try {
    await donationService(d);
  } catch (err) {
    res.status(500).json({
      message: "Couldn't list donation",
    })
    console.log(err)
  }

  res.status(201).json({
    message: "Donation created successfully",
    donation: d,
  });
});

donationController.get("/", async (req, res) => {
  try {
    const recentDonations = await recentDonationService();
    res.json(recentDonations);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server error fetching donations.",
    });
  }
});
