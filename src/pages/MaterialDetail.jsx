import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import materialService from "../services/materialService";
import courseService from "../services/courseService";
import ContentLayout from "../layouts/ContentLayout";
import formatDate from "../utils/formatDate";

function MaterialDetail() {
  const { courseId, materialId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["material-detail", courseId, materialId],
    queryFn: async () => {
      const [materialRes, courseRes] = await Promise.all([
        materialService.getMaterialById(materialId),
        courseService.getCourseById(courseId),
      ]);

      return {
        material: materialRes.data,
        course: courseRes.data,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Memuat data materi...
      </div>
    );
  }

  if (isError || !data?.material || !data?.course) {
    return (
      <div className="text-center text-red-500 mt-10">
        Data tidak ditemukan.
      </div>
    );
  }

  const { material, course } = data;

  return (
    <ContentLayout
      menu={"COURSE MATERIAL"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="w-4xl h-48 background bg-[#0A376E]">
            <div className="flex flex-col p-4">
              <span className="ml-2 mt-1 text-white uppercase font-bold text-3xl underline">
                {course.name}
              </span>
              <span className="ml-2 mt-1 text-white">{course.teacher}</span>
              {course.description && (
                <span className="ml-2 mt-2 text-white text-sm">
                  {course.description}
                </span>
              )}
            </div>
          </div>

          <h1 className="mt-5 text-2xl font-bold mb-2">{material.title}</h1>
          <p className="text-gray-700 mb-4">
            Dibuat pada: {formatDate(material.created_at)}
          </p>

          <div className="bg-white shadow p-4 rounded">
            {material.description && (
              <p className="text-gray-800 mb-2">{material.description}</p>
            )}
            <p className="text-sm text-gray-600 mb-2">
              Teacher: {course.teacher}
            </p>
            <a
              href={
                material.file_url.startsWith("http")
                  ? material.file_url
                  : `https://${material.file_url}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buka / Unduh Materi
            </a>
          </div>
        </div>
      }
    />
  );
}

export default MaterialDetail;
