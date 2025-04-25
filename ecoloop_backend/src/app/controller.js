import { authController } from "./auth/auth.controller.js";
import { donationController } from "./donation/donation.controller.js";

export const controller = (app) => {
  app.use("/auth", authController);
  app.use("/donation", donationController)
};
