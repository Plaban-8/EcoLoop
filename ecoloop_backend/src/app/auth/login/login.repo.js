import { User } from "../auth.model.js";

export const getUser = async (data) => {
  return await User.findOne(data);
};
