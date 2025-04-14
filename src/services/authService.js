import API from "../utils/axiosConfig";

class AuthService {
  async login(credentials) {
    try {
      const res = await API.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async logout() {
    try {
      const res = await API.post("/auth/logout");
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new AuthService();
