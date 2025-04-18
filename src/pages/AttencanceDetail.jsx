import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import attendanceService from "../services/attendanceService";
import courseService from "../services/courseService";
import ContentLayout from "../layouts/ContentLayout";

function AttendancePage() {
  const { courseId, attendanceId } = useParams();
  const [status, setStatus] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["attendance-detail", courseId, attendanceId],
    queryFn: async () => {
      const [attendanceRes, courseRes] = await Promise.all([
        attendanceService.getAttendanceById(attendanceId),
        courseService.getCourseById(courseId),
      ]);
      return {
        attendance: attendanceRes.data,
        course: courseRes.data,
      };
    },
  });

  const fillAttendanceMutation = useMutation({
    mutationFn: (attendanceData) =>
      attendanceService.fillAttendance(attendanceId, attendanceData),
    onSuccess: () => {
      alert("Kehadiran berhasil dikirim.");
    },
    onError: () => {
      alert("Terjadi kesalahan saat mengirim kehadiran.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fillAttendanceMutation.mutate({ status });
  };

  if (isLoading) {
    return (
      <div className="text-center mt-10 text-gray-500">Memuat data...</div>
    );
  }

  if (isError || !data?.attendance || !data?.course) {
    return (
      <div className="text-center mt-10 text-red-500">
        Data tidak ditemukan.
      </div>
    );
  }

  const { course, attendance } = data;

  return (
    <ContentLayout
      menu={"ATTENDANCES"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="w-4xl h-48 background bg-[#0A376E]">
            <div className="flex flex-col p-4">
              <span className="ml-2 mt-1 text-white uppercase font-bold text-3xl underline">
                {course.name}
              </span>
              <span className="ml-2 mt-1 text-white">
                Guru: {course.teacher}
              </span>
              {course.description && (
                <span className="ml-2 mt-2 text-white text-sm">
                  {course.description}
                </span>
              )}
            </div>
          </div>

          {/* Form Kehadiran */}
          <div className="mt-6">
            <div className="bg-white shadow-lg rounded-md p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-[#0A376E]">
                ATTENDANCE
              </h2>

              <div className="mb-6">
                <p className="text-gray-700">
                  Silakan pilih status kehadiran kamu untuk sesi berikut ini.
                </p>
                <p className="mt-2 text-sm text-gray-600">{attendance.note}</p>
                <p className="text-sm text-gray-600">
                  <strong>Tanggal Absensi:</strong>{" "}
                  {new Date(attendance.created_at).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-red-500 font-semibold">
                  <strong>Batas Waktu Absensi:</strong>{" "}
                  {new Date(attendance.deadline).toLocaleString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    Pilih Status Kehadiran:
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "present", label: "Hadir" },
                      { value: "excused", label: "Izin" },
                      { value: "sick", label: "Sakit" },
                      { value: "absent", label: "Alfa" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="status"
                          value={option.value}
                          checked={status === option.value}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#0A376E] text-white px-5 py-2 rounded hover:bg-[#08305F] transition"
                  disabled={fillAttendanceMutation.isLoading}>
                  {fillAttendanceMutation.isLoading
                    ? "Mengirim..."
                    : "Kirim Kehadiran"}
                </button>
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default AttendancePage;
