import API from "../utils/axiosConfig";

class GradeService {
  async getMyGradeByAssignmentId(assignmentId) {
    try {
      const res = await API.get(`/grades/my/${assignmentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getGradesByAssignmentId(assignmentId) {
    try {
      const res = await API.get(`/grades/assignment/${assignmentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getGradesByStudentId(studentId) {
    try {
      const res = await API.get(`/grades/student/${studentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getGradeBySubmissionId(submissionId) {
    try {
      const res = await API.get(`/grades/submission/${submissionId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createGrade(gradeData) {
    try {
      const res = await API.post("/grades", gradeData);
      res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateGrade(gradeId, newGradeData) {
    try {
      const res = await API.patch(`/grades/${gradeId}`, newGradeData);
      res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteGrade(gradeId) {
    try {
      const res = await API.delete(`/grades/${gradeId}`);
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new GradeService();
