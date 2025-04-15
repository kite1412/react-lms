import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import ContentLayout from "../layouts/ContentLayout";

function MaterialDetail() {
  const { courseId, materialId } = useParams();

  const course = courses.find((c) => c.id.toString() === courseId);
  const material = course?.materials.find((m) => m.id === materialId);

  if (!course || !material) {
    return (
      <div className="text-center text-red-500 mt-10">
        Materi tidak ditemukan.
      </div>
    );
  }

  return (
    <ContentLayout
      menu={"COURSE MATERIAL"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="w-4xl h-48 background bg-[#0A376E]">
            <div className="flex flex-col p-4">
              <span className="ml-2 mt-1 text-white uppercase font-bold text-3xl underline">
                {course.courseName}
              </span>
              <span className="ml-2 mt-1 text-white">{course.instructor}</span>
            </div>
          </div>

          <h1 className="mt-5 text-2xl font-bold mb-2">{material.title}</h1>
          <p className="text-gray-700 mb-4">Mata Kuliah: {course.courseName}</p>
          <div className="bg-white shadow p-4 rounded">
            <p className="text-sm text-gray-600">
              Dosen Pengampu: {course.instructor}
            </p>
            <p className="mt-2">Silakan unduh materi berikut:</p>
            <a
              href={`/${material.file}`}
              download
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download {material.file}
            </a>
          </div>
        </div>
      }
    />
  );
}

export default MaterialDetail;
