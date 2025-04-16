import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import AssigmentIcon from "../assets/clipboard-assigment.svg?react";
import assignmentService from "../services/assignmentService";

function AssignmentTab() {
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

  const assignmentList = assignments.map((item) => ({
    id: item.assignment_id,
    title: item.title,
    dueDate: item.deadline,
    type: "assignments",
  }));

  return (
    <div className="mt-6">
      {assignmentList.length > 0 ? (
        assignmentList.map((item) => (
          <Link
            to={`/courses/${id}/assignments/${item.id}`}
            key={item.assignment_id}
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

export default AssignmentTab;
