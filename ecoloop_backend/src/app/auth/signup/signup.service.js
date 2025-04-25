import { saveUser } from "./signup.repo.js";
import bcrypt from "bcryptjs";

export const signup = async (data) => {
  const pass = await bcrypt.hash(data.password, 10);

  const d = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: pass,
  };
  try {
    await saveUser(d);
    return true;
  } catch (e) {
    return false;
  }
};
