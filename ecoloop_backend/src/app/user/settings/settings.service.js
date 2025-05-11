import bcrypt from "bcryptjs";
import {
  changePassword,
  getPassword,
  updateProfileData,
} from "./setting.repo.js";

export const editProfileService = async (id, data) => {
  try {
    await updateProfileData(id, data);
    return {
      message: "Updated!",
      status: 201,
    };
  } catch (err) {
    return {
      error: err,
      status: 500,
    };
  }
};

export const changePasswordService = async (id, data) => {
  const user = await getPassword(id);
  const status = await bcrypt.compare(data.currPass, user.password);
  if (data.newPass == data.confirmPass && status) {
    try {
      const pass = await bcrypt.hash(data.confirmPass, 10);
      await changePassword(id, pass);
      return {
        status: 201,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  } else {
    throw new Error("failed");
  }
};
