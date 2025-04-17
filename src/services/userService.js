import API from "../utils/axiosConfig";

class UserService {
  async getAllUsers() {
    try {
      const res = await API.get("/users");
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getUserById(userId) {
    try {
      const res = await API.get(`/users/${userId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createUser(userData) {
    try {
      const res = await API.post("/users", userData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateUser(userId, newUserData) {
    try {
      const res = await API.patch(`/users/${userId}`, newUserData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteUser(userId) {
    try {
      const res = await API.delete(`/users/${userId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getMyInfo() {
    try {
      const res = await API.get("/users/me");

      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateUserPassword(userId, newPassword) {
    try {
      const res = await API.patch(
        `/users/update-password/${userId}`,
        newPassword
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateMyName(newName) {
    try {
      const res = await API.patch("/users/me/name", newName);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateMyPassword(newPasswordData) {
    try {
      const res = await API.patch("/users/me/password", newPasswordData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new UserService();
