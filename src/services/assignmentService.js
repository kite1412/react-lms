import API from "../utils/axiosConfig";

class AssignmentService {
  async getAssignmentByCourseId(courseId) {
    try {
      const res = await API.get(`/assignments/course/${courseId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAssignmentById(assignmentId) {
    try {
      const res = await API.get(`/assignments/${assignmentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createAssignment(courseId, assignmentData) {
    try {
      const res = await API.post(
        `/assignments/course/${courseId}`,
        assignmentData
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateAssignment(assignmentId, newAssignmentData) {
    try {
      const res = await API.patch(
        `/assignments/${assignmentId}`,
        newAssignmentData
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteAssignment(assignmentId) {
    try {
      const res = await API.delete(`/assignment/${assignmentId}`);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new AssignmentService();
