import { User } from "../auth/auth.model"

export const deleteUser = async (id)=>{
  await User.deleteOne({
    _id: id
  })
}