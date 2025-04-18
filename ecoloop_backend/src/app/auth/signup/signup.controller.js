import { Router } from "express";
import { signup } from "./signup.service.js";

export const signupController = Router();

signupController.post("/", async (req, res) => {
  const d = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  };
  if (await signup(d)) {
    return res.status(201).json({
      message: "Signed up Succesfully",
      result: true,
      status: 201
    })
  }
  return res.status(403).json({
    message: "Signed up failed",
    result: false,
    status: 403
  })
});
