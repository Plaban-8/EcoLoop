export const deleteUserService = async (id)=>{
  try{
    await deleteUser(id);
    return {
      message: "User deleted",
      status: 200,
    }
  }catch(err){
    return {
      message: "user does not exist.",
      status: 500,
    }
  }
}