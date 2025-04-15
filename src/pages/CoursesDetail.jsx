import { useState } from "react";
import courses from "../data/courses";
import ContentLayout from "../layouts/ContentLayout";
import { useParams, Link } from "react-router-dom";
import MateriIcon from "../assets/book.svg?react";
import AssigmentIcon from "../assets/clipboard-assigment.svg?react";

function CoursesDetail() {
  const { id } = useParams();
  const course = courses[id];
  const [activeTab, setActiveTab] = useState("forums");

  return (
    <ContentLayout
      menu={"COURSE DETAIL"}
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

function ForumsTab() {
  const { id } = useParams();
  const course = courses[id];

  const forums = [
    ...course.materials.map((item) => ({ ...item, type: "materials" })),
    ...course.assignments.map((item) => ({ ...item, type: "assignments" })),
  ];

  const assignments = forums.filter((item) => item.type === "assignments");

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Kolom Kiri: List Forum */}
      <div className="w-full lg:w-2/3">
        {forums.map((item, index) => {
          const isAssignment = item.type === "assignments";
          return (
            <Link
              to={`/courses/${course.id}/${item.type}/${item.id}`}
              key={index}
              className="bg-white border border-gray-200 rounded-md px-4 py-3 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center">
              <div className="mr-4">
                {isAssignment ? (
                  <AssigmentIcon className="text-[#FDBA02]" />
                ) : (
                  <MateriIcon className="text-[#FDBA02]" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg">{item.title}</span>
                <span className="text-sm text-gray-500">
                  {isAssignment ? `Due: ${item.dueDate}` : `File: ${item.file}`}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Kolom Kanan: Upcoming Box */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-3">Upcoming</h3>
          {assignments.length > 0 ? (
            assignments.map((item, index) => (
              <div key={index} className="mb-3">
                <p className="text-sm text-red-500 font-medium">Deadline</p>
                <p className="text-sm text-gray-700">
                  {item.dueDate} - {item.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No upcoming assignments.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AssignmentTab() {
  const { id } = useParams();
  const course = courses[id];

  return (
    <div className="mt-6">
      {course.assignments.length > 0 ? (
        course.assignments.map((item, index) => (
          <Link
            to={`/courses/${course.id}/assignments/${item.id}`}
            key={index}
            className="bg-white border border-gray-200 rounded-md px-4 py-3 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center">
            <div className="mr-4">
              <AssigmentIcon className="text-[#FDBA02]" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">{item.title}</span>
              <span className="text-sm text-gray-500 flex items-center">
                Due: {item.dueDate}
              </span>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-gray-500 mt-4">Belum ada tugas.</div>
      )}
    </div>
  );
}

function PeopleTab() {
  const { id } = useParams();
  const course = courses[id];

  return (
    <div className="mt-6">
      <div className="flex items-center space-x-4 p-4 bg-white rounded-md shadow border">
        <img
          src={course.profilePicture}
          alt="Instructor"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-lg">{course.instructor}</div>
          <div className="text-gray-500 text-sm">Dosen Pengampu</div>
        </div>
      </div>
    </div>
  );
}
