import { saveUser } from "./signup.repo.js";
import bcrypt from "bcryptjs";

export const hashPaassword = async (pass)=>{
  return await bcrypt.hash(pass, 10);
}

export const signup = async (data) => {
  const pass = await hashPaassword(data.password);

  const d = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: pass,
    impact: 0
  };
  try {
    await saveUser(d);
    return true;
  } catch (e) {
    return false;
  }
};
