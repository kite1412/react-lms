import API from "../utils/axiosConfig";

export const getAllCourses = async () => {
  const res = await API.get("/courses");
  return res.data.data;
};

export const getCourseById = async (courseId) => {
  const res = await API.get(`/courses/${courseId}`);
  return res.data.data;
};

export const getMyCourses = async () => {
  const res = await API.get("/courses/my-courses");
  return res.data.data;
};

export const createCourse = async (courseData) => {
  const res = await API.post("/courses", courseData);
  return res.data.data;
};

export const updateCourse = async (courseId, newCourseData) => {
  const res = await API.patch(`/courses/${courseId}`, newCourseData);
  return res.data.data;
};

export const deleteCourse = async (courseId) => {
  const res = await API.delete(`/courses/${courseId}`);
  return res.data.data;
};

export const joinCourse = async (courseCode) => {
  const res = await API.post(`/courses/join/${courseCode}`);
  return res.data.data;
};
