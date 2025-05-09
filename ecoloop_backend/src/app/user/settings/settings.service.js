import bcrypt from "bcryptjs";
import { hashPaassword } from "../../auth/signup/signup.service.js";
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
  const checkPass = await hashPaassword(data.currPass);
  const userPass = await getPassword(id);
  const status = await bcrypt.compare(checkPass, userPass.password);

  if (data.newPass == data.confirmPass && status) {
    try {
      await changePassword(id, data.confirmPass);
      return {
        status: 201,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  } else {
    return {
      status: 500,
    };
  }
};
