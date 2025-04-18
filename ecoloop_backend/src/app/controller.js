import { authController } from "./auth/auth.controller.js";

export const controller = (app) => {
  app.use("/auth", authController);
};
