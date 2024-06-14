import UserRepository from "../repository/user.repository.js";

const UserService = {};

UserService.getByType = async (uuid) => {
  try {
    await UserRepository.getByType(uuid);
    if (existingUser > 0) {
      return { status: 200, data: user };
    } else {
      return { status: 404, data: { message: "User not found" } };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, data: { message: "Error getting User" } };
  }
};

UserService.updateValue = async (uuid, updates) => {
  try {
    await UserRepository.updateValue(uuid, updates);
    if (existingUser) {
      return { status: 200 };
    } else {
      return { status: 404, data: { message: "User not found" } };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, data: { message: "Error updating User" } };
  }

}

export default UserService;