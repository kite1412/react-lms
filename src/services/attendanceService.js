import API from "../utils/axiosConfig";

class AttendanceService {
  async getAttendanceById(attendanceId) {
    try {
      const res = API.get(`/attendances/${attendanceId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAttendancesByCourseId(courseId) {
    try {
      const res = API.get(`/attendances/course/${courseId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getAttendanceRecords(attendanceId) {
    try {
      const res = API.get(`/attendance/records/${attendanceId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createAttendance(attendanceData) {
    try {
      const res = API.post("/attendances", attendanceData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async fillAttendance(attendanceId, attendanceData) {
    try {
      const res = API.post(`/attendances/${attendanceId}`, attendanceData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteAttendance(attendanceId) {
    try {
      const res = API.delete(`/attendances/${attendanceId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default AttendanceService();
