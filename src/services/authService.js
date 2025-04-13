import API from "../utils/axiosConfig";

export const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  return res.data;
};

export const logout = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};
