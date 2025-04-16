import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import ContentLayout from "../layouts/ContentLayout";

function AssignmentsDetail() {
  const { courseId, assignmentId } = useParams();
  const course = courses.find((c) => c.id.toString() === courseId);
  const assignment = course?.assignments.find((a) => a.id === assignmentId);

  if (!course || !assignment) {
    return <div className="p-6 text-center">Tugas tidak ditemukan.</div>;
  }

  return (
    <ContentLayout
      menu={"COURSE ASSIGNMENT"}
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
          <h1 className="mt-5 text-3xl font-bold mb-2">{assignment.title}</h1>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Mata Kuliah:</span>{" "}
            {course.courseName}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Dosen:</span> {course.instructor}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Deadline:</span>{" "}
            {new Date(assignment.dueDate).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p className="text-gray-700">
              Silakan kerjakan tugas ini sesuai dengan petunjuk yang diberikan
              oleh dosen. Kumpulkan sebelum deadline.
            </p>
          </div>
        </div>
      }
    />
  );
}

export default AssignmentsDetail;
