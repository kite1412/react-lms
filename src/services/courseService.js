import API from "../utils/axiosConfig";

class CourseService {
  async getAllCourses() {
    try {
      const res = await API.get("/courses");
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getCourseById(courseId) {
    try {
      const res = await API.get(`/courses/${courseId}`);
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getMyCourses() {
    try {
      const res = await API.get("/courses/my-courses");
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createCourse(coureData) {
    try {
      const res = await API.post("/courses", courseData);
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateCourse(courseId, newCourseData) {
    try {
      const res = await API.patch(`/courses/${courseId}`, newCourseData);
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteCourse(courseId) {
    try {
      const res = await API.delete(`/courses/${courseId}`);
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async joinCourse(courseCode) {
    try {
      const res = await API.post(`/courses/join/${courseCode}`);
      return res.data.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new CourseService();
