import { User } from "../../auth/auth.model.js";

export const updateProfileData = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const changePassword = async (id, pass) => {
  return await User.findByIdAndUpdate(id, { password: pass }, { new: true });
};

export const getPassword = async (id) => {
  return await User.findById(id).select("password");
};
