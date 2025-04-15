import API from "../utils/axiosConfig";

class MemberService {
  async getCourseMembers(courseId) {
    try {
      const res = await API.get(`/members/${courseId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
  async deleteMemberFromCourse(courseId) {
    try {
      const res = await API.delete(`/members/${courseId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default new MemberService();
