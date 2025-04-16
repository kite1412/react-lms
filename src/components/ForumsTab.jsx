import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import MateriIcon from "../assets/book.svg?react";
import AssigmentIcon from "../assets/clipboard-assigment.svg?react";
import assignmentService from "../services/assignmentService";
import formatDate from "../utils/formatDate";

function ForumsTab() {
  const { id } = useParams();

  const {
    data: assignments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["assignments", id],
    queryFn: () =>
      assignmentService.getAssignmentByCourseId(id).then((res) => res.data),
  });

  if (isLoading)
    return <div className="px-20 py-10 text-gray-600">Loading List...</div>;

  if (isError)
    return (
      <div className="px-20 py-10 text-red-500">
        Error: {error.message || "Failed to load Assignments"}
      </div>
    );

  const forums = assignments.map((item) => ({
    key: item.assignment_id,
    id: item.assignment_id,
    title: item.title,
    dueDate: item.deadline,
    type: "assignments",
  }));

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Kolom Kiri: List Forum */}
      <div className="w-full lg:w-2/3">
        {forums.map((item) => (
          <Link
            to={`/courses/${id}/assignments/${item.id}`}
            key={item.assignment_id}
            className="bg-white border border-gray-200 rounded-md px-4 py-3 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center">
            <div className="mr-4">
              <AssigmentIcon className="text-[#FDBA02]" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">{item.title}</span>
              <span className="text-sm text-gray-500">
                Due: {formatDate(item.dueDate)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Kolom Kanan: Upcoming Box */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-3">Upcoming</h3>
          {forums.length > 0 ? (
            forums.map((item) => (
              <div key={item.assignment_id} className="mb-3">
                <p className="text-sm text-red-500 font-medium">Deadline</p>
                <p className="text-sm text-gray-700">
                  {formatDate(item.dueDate)} - {item.title}
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

export default ForumsTab;
