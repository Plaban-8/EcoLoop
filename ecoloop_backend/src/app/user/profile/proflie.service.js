import { getUser } from "../../auth/login/login.repo.js";

export const getProfile = async (id) => {
  const user = await getUser({ _id: id });
  return {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
};
