import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import memberService from "../services/memberService";
import DefaultProfilePicture from "../assets/profile-picture-blank.png";

function PeopleTab() {
  const { id } = useParams();

  const {
    data: people,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["people", id],
    queryFn: () => memberService.getCourseMembers(id).then((res) => res.data),
  });

  if (isLoading)
    return <div className="px-20 py-10 text-gray-600">Loading List...</div>;

  if (isError)
    return (
      <div className="px-20 py-10 text-red-500">
        Error: {error.message || "Failed to load people"}
      </div>
    );

  // Filter admin/teacher
  const teachers = people.filter(
    (person) => person.role === "admin" || person.role === "teacher"
  );

  // Sisanya dianggap siswa
  const students = people.filter(
    (person) => person.role !== "admin" && person.role !== "teacher"
  );

  return (
    <div className="mt-6 px-5">
      <h2 className="text-xl font-semibold mb-3">Teacher</h2>
      {teachers.length > 0 ? (
        teachers.map((teacher, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white rounded-md shadow border mb-4">
            <img
              src={DefaultProfilePicture}
              alt={teacher.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-lg">{teacher.name}</div>
              <div className="text-gray-500 text-sm capitalize">
                {teacher.role}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mb-6">Belum ada dosen yang bergabung.</p>
      )}

      <h2 className="text-xl font-semibold mb-3">Student</h2>
      {students.length > 0 ? (
        students.map((student, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white rounded-md shadow border mb-2">
            <img
              src={`https://ui-avatars.com/api/?name=${student.name}`}
              alt={student.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{student.name}</div>
              <div className="text-sm text-gray-500 capitalize">
                {student.role}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No student yet.</p>
      )}
    </div>
  );
}

export default PeopleTab;
