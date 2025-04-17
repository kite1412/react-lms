import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import MateriIcon from "../assets/book.svg?react";
import AttendanceIcon from "../assets/clipboard-check.svg?react";
import AssigmentIcon from "../assets/clipboard-assigment.svg?react";
import CourseService from "../services/courseService";
import formatDate from "../utils/formatDate";

function ForumsTab() {
  const { id } = useParams();

  const {
    data: forums = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["forums", id],
    queryFn: async () => {
      const res = await CourseService.getAllConentsByCourseId(id);

      const assignments = res.data.assignments.map((item) => ({
        key: `assignment-${item.assignment_id}`,
        id: item.assignment_id,
        title: item.title,
        dueDate: item.deadline,
        type: "assignment",
      }));

      const attendances = res.data.attendances.map((item) => ({
        key: `attendance-${item.attendance_id}`,
        id: item.attendance_id,
        title: item.notes || "Attendance",
        dueDate: item.deadline,
        type: "attendance",
      }));

      const materials = res.data.materials.map((item) => ({
        key: `material-${item.material_id}`,
        id: item.material_id,
        title: item.title,
        created_at: item.created_at,
        type: "material",
      }));

      return [...assignments, ...attendances, ...materials].sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
    },
  });

  if (isLoading)
    return <div className="px-20 py-10 text-gray-600">Loading List...</div>;

  if (isError)
    return (
      <div className="px-20 py-10 text-red-500">
        Error: {error.message || "Failed to load forum data"}
      </div>
    );

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Kolom Kiri: List Forum */}
      <div className="w-full lg:w-2/3">
        {forums.map((item) => (
          <Link
            to={
              item.type === "assignment"
                ? `/courses/${id}/assignments/${item.id}`
                : item.type === "attendance"
                ? `/courses/${id}/attendances/${item.id}`
                : `/courses/${id}/materials/${item.id}`
            }
            key={item.key}
            className="bg-white border border-gray-200 rounded-md px-4 py-3 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center">
            <div className="mr-4">
              {item.type === "assignment" ? (
                <AssigmentIcon className="text-[#FDBA02]" />
              ) : item.type === "attendance" ? (
                <AttendanceIcon className="text-[#FDBA02]" />
              ) : (
                <MateriIcon className="text-[#FDBA02]" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">{item.title}</span>
              <span className="text-sm text-gray-500">
                {item.type === "material"
                  ? `Created at: ${formatDate(item.created_at)}`
                  : `Due: ${formatDate(item.dueDate)}`}
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
            forums
              .filter(
                (item) =>
                  item.type === "assignment" || item.type === "attendance"
              )
              .map((item) => (
                <div key={item.key} className="mb-3">
                  <p className="text-sm text-red-500 font-medium">
                    {item.type === "assignment" ? "Assignment" : "Attendance"}{" "}
                    Deadline
                  </p>
                  <p className="text-sm text-gray-700">
                    {formatDate(item.dueDate)} - {item.title}
                  </p>
                </div>
              ))
          ) : (
            <p className="text-sm text-gray-500">No upcoming items.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForumsTab;
