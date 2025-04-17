import API from "../utils/axiosConfig";

class MaterialService {
  async getAllMaterialsByCourseId(courseId) {
    try {
      const res = API.get(`/materials/course/${courseId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async getMaterialById(materialId) {
    try {
      const res = API.get(`/materials/${materialId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async createMaterial(materialData) {
    try {
      const res = API.post("/materials", materialData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async updateMaterial(materialId, materialData) {
    try {
      const res = API.patch(`/materials/${materialId}`, materialData);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }

  async deleteMaterial(materialId) {
    try {
      const res = API.delete(`/materials/${materialId}`);
      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
}

export default MaterialService();
