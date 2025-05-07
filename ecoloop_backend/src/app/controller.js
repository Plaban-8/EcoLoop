import { adminController } from "./admin/admin.controller.js";
import { authController } from "./auth/auth.controller.js";
import { donationController } from "./donation/donation.controller.js";
import { foodController } from "./food/food.controller.js";

export const controller = (app) => {
  app.use("/auth", authController);
  app.use("/donation", donationController);
  app.use("/food", foodController);
  app.use("/admin", adminController);
};
