import { adminController } from "./admin/admin.controller.js";
import { authController } from "./auth/auth.controller.js";
import { donationController } from "./donation/donation.controller.js";
import { feedController } from "./feed/feed.controller.js";
import { foodController } from "./food/food.controller.js";
import { profileController } from "./user/profile/profile.controller.js";
import { settingsController } from "./user/settings/settings.controller.js";

export const controller = (app) => {
  app.use("/auth", authController);
  app.use("/donation", donationController);
  app.use("/food", foodController);
  app.use("/admin", adminController);
  app.use("/user/profile", profileController);
  app.use("/user/settings", settingsController);
  app.use("/feed", feedController);
};
