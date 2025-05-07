import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import { deleteUserService } from "./admin.service.js";

export const adminController = Router();

adminController.delete('/',authenticate, async (req,res)=>{
  const user = req.id;
  res.json(await deleteUserService(user));
})