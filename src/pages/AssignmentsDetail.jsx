import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SubmissionService from "../services/submissionService";
import assignmentService from "../services/assignmentService";
import formatDate from "../utils/formatDate";
import courseService from "../services/courseService";
import ContentLayout from "../layouts/ContentLayout";

function AssignmentDetail() {
  const { courseId, assignmentId } = useParams();
  const [url, setUrl] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const queryClient = useQueryClient();

  // Get assignment & course data
  const {
    data,
    isLoading: loadingAssignment,
    isError: errorAssignment,
  } = useQuery({
    queryKey: ["assignment", assignmentId, courseId],
    queryFn: async () => {
      const [assignmentRes, courseRes] = await Promise.all([
        assignmentService.getAssignmentById(assignmentId),
        courseService.getCourseById(courseId),
      ]);
      return {
        assignment: assignmentRes.data,
        course: courseRes.data,
      };
    },
  });

  // Get my submission
  const { data: mySubmission, isLoading: loadingSubmission } = useQuery({
    queryKey: ["my-submission", assignmentId],
    queryFn: async () => await SubmissionService.getMySubmission(assignmentId),
  });

  // Create submission
  const createMutation = useMutation({
    mutationFn: () => SubmissionService.createSubmission(assignmentId, { url }),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-submission", assignmentId]);
      setUrl("");
    },
  });

  // Update submission
  const updateMutation = useMutation({
    mutationFn: () =>
      SubmissionService.updateSubmission(mySubmission?.id, { url }),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-submission", assignmentId]);
      setUrl("");
      setIsEditMode(false);
    },
  });

  // Delete submission
  const deleteMutation = useMutation({
    mutationFn: () => SubmissionService.deleteSubmission(mySubmission?.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-submission", assignmentId]);
      setUrl("");
    },
  });

  useEffect(() => {
    if (mySubmission) {
      setUrl(mySubmission.url);
    }
  }, [mySubmission]);

  if (loadingAssignment || loadingSubmission) return <div>Loading...</div>;
  if (errorAssignment) return <div>Gagal memuat data tugas.</div>;

  const { assignment, course } = data || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateMutation.mutate();
    } else {
      createMutation.mutate();
    }
  };

  return (
    <ContentLayout
      menu={"ASSIGNMENT"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="w-4xl h-48 background bg-[#0A376E]">
            <div className="flex flex-col p-4">
              <span className="ml-2 mt-1 text-white uppercase font-bold text-3xl underline">
                {course.name}
              </span>
              <span className="ml-2 mt-1 text-white font-bold">
                {course.teacher}
              </span>
              <span className=" text-justify ml-2 mt-1 text-white">
                {course.description}
              </span>
            </div>
          </div>

          <div className="max-w-3xl mt-10 bg-white rounded-md shadow p-6">
            <h1 className="text-2xl font-bold mb-2">{assignment.title}</h1>
            <p className="text-gray-600 mb-4">{assignment.description}</p>
            <p className="text-sm text-gray-500 mb-6">
              Deadline: {formatDate(assignment.deadline)}
            </p>

            {mySubmission && !isEditMode ? (
              <div className="space-y-4">
                <p>
                  <span className="font-medium">
                    Tautan yang kamu kumpulkan:
                  </span>{" "}
                  <a
                    href={mySubmission.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline">
                    {mySubmission.url}
                  </a>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    Edit Submission
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate()}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Hapus Submission
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="block mb-2 font-medium text-gray-700">
                  Masukkan URL tugas (contoh: Google Drive, GitHub, dll):
                </label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                  placeholder="https://..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={
                      createMutation.isLoading || updateMutation.isLoading
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    {isEditMode
                      ? updateMutation.isLoading
                        ? "Mengupdate..."
                        : "Update Tugas"
                      : createMutation.isLoading
                      ? "Mengirim..."
                      : "Kumpulkan Tugas"}
                  </button>
                  {isEditMode && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditMode(false);
                        setUrl(mySubmission.url);
                      }}
                      className="text-gray-500 px-4 py-2 rounded-md hover:underline">
                      Batal
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      }
    />
  );
}

export default AssignmentDetail;
