import API from "../utils/axiosConfig";

class SubmissionService {
  async getAllSubmissionByAssignment(assignmentId) {
    try {
      const res = await API.get(`/submissions?assignmentId=${assignmentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getSubmissionById(submissionId) {
    try {
      const res = await API.get(`/submissions/${submissionId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getMySubmission(assignmentId) {
    try {
      const res = await API.get(`/submissions/my-submissions/${assignmentId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createSubmission(assignmentId, submissionData) {
    try {
      const res = await API.post(
        `/submissions?assignmentId=${assignmentId}`,
        submissionData
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateSubmission(submissionId, newSubmissionData) {
    try {
      const res = await API.patch(
        `/submissions/${submissionId}`,
        newSubmissionData
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteSubmission(submissionId) {
    try {
      const res = await API.delete(`/submissions/${submissionId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new SubmissionService();
