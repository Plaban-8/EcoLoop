import { Router } from "express";
import { authenticate } from "../../auth/auth.middleware.js";
import { editProfileService } from "./settings.service.js";

export const settingsController = Router();

settingsController.patch("/cred", authenticate, async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  res.send(await editProfileService(req.id, data));
});

settingsController.patch('/passChange', authenticate, async (req,res)=>{
  const passData = {
    currPass: req.body.currPass,
    newPass: req.body.newPass,
    confirmPass: req.body.confirmPass,
  }

  res.send(await changePasswordService(req.id,passData))

})