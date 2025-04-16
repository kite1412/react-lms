import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ContentLayout from "../layouts/ContentLayout";
import { useParams, Link } from "react-router-dom";
import courseService from "../services/courseService";
import ForumsTab from "../components/ForumsTab";
import AssignmentTab from "../components/AssignmentTab";

function CoursesDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("forums");

  const {
    data: course,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => courseService.getCourseById(id).then((res) => res.data),
  });

  if (isLoading) {
    return <div className="px-20 py-10 text-gray-600">Loading course...</div>;
  }

  if (isError) {
    return (
      <div className="px-20 py-10 text-red-500">
        Error: {error.message || "Failed to load course"}
      </div>
    );
  }
  return (
    <ContentLayout
      menu={"COURSE DETAIL"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="w-4xl h-48 background bg-[#0A376E]">
            <div className="flex flex-col p-4">
              <span className="ml-2 mt-1 text-white uppercase font-bold text-3xl underline">
                {course.name}
              </span>
              <span className="ml-2 mt-1 text-white">{course.teacher}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("forums")}
                className={`whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "forums"
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Forums
              </button>
              <button
                onClick={() => setActiveTab("assignment")}
                className={`whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "assignment"
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Class Assignment
              </button>
              <button
                onClick={() => setActiveTab("people")}
                className={`whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "people"
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                People
              </button>
            </nav>
          </div>

          {activeTab === "forums" && <ForumsTab />}
          {activeTab === "assignment" && <AssignmentTab />}
          {activeTab === "people" && <PeopleTab />}
        </div>
      }
    />
  );
}

export default CoursesDetail;

// function PeopleTab() {
//   const { id } = useParams();
//   const course = courses[id];

//   return (
//     <div className="mt-6">
//       <div className="flex items-center space-x-4 p-4 bg-white rounded-md shadow border">
//         <img
//           src={course.profilePicture}
//           alt="Instructor"
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div>
//           <div className="font-semibold text-lg">{course.instructor}</div>
//           <div className="text-gray-500 text-sm">Dosen Pengampu</div>
//         </div>
//       </div>
//     </div>
//   );
// }
