import { getUserById } from "../../auth/login/login.repo.js";
import { getRecentActivity } from "./profile.repo.js";

export const getProfile = async (id) => {
  try {
    const user = await getUserById(id);
    const recentActivity = await getRecentActivity(id);
    return {
      user: user,
      activity: recentActivity,
      status: 200,
    };
  } catch (err) {
    console.log(err);
    return {
      error: err,
    };
  }
};
