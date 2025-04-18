import bcrypt from "bcryptjs";
import { getUser } from "./login.repo.js";
import { json } from "express";
import jwt from "jsonwebtoken";

export const login = async (data) => {

  const user = await getUser({ email: data.email });

  if (!user) {
    return {
      message: "Email/Password is invalid.",
      success: false,
    };
  }
  const isPassMatched = await bcrypt.compare(data.password, user.password);
  if (!isPassMatched) {
    return {
      message: "Email/password mismatched.",
      success: false,
    }; 
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "4h",
    }
  ); 

  return {
    message: "Logged In.",
    success: true,
    token,
  }

};
