const { User } = require("../models/companyModel");

module.exports = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },

  getUser: async (userId) => {
    try {
      const user = await User.findByPk(userId);
   
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw new Error("Failed to get user");
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("User not found");
      await user.update(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  },

  deleteUser: async (userId) => {
    try {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("User not found");
      await user.destroy();
      return { message: "User deleted successfully" };
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },

  getAllUsers: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Failed to get users");
    }
  },
};

