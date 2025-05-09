import { getUser } from "../../auth/login/login.repo.js";
import { getRecentActivity } from "./profile.repo.js";

export const getProfile = async (id) => {
  try {
    const user = await getUser({ _id: id });
    const recentActivity = await getRecentActivity(id);
    return {
      user: user,
      activity: recentActivity,
      status: 200,
    };
  } catch (err) {
    return {
      error: err,
    };
  }
};
