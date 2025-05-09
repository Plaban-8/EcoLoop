import { User } from "../auth.model.js";

export const getUser = async (data) => {
  return await User.findOne(data);
};

export const getUserById = async (id) => {
  return await User.findById(id);
}