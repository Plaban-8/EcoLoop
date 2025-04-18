import { User } from "../auth.model.js";

export const saveUser = (data) => {
  return User.insertOne(data);
};
