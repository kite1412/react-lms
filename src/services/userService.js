import API from "../utils/axiosConfig";

export const getAllUsers = async () => {
  const res = await API.get("/users");
  return res.data.data;
};

export const getUserById = async (userId) => {
  const res = await API.get(`/users/${userId}`);
  return res.data.data;
};

export const createUser = async () => {
  const res = await API.post("/users", userData);
  return res.data.data;
};

export const updateUser = async (userId) => {
  const res = await API.patch(`/users/${userId}`, newUserData);
  return res.data.data;
};

export const deleteUser = async (userId) => {
  const res = await API.delete(`/users/${userId}`);
  return res.data.data;
};

export const updateUserPassword = async (userId) => {
  const res = await API.patch(`/users/update-password/${userId}`, newPassword);
  return res.data.data;
};
