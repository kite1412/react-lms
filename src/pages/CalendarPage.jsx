import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ContentLayout from "../layouts/ContentLayout";
import assignmentService from "../services/assignmentService";
import { useQuery } from "@tanstack/react-query";

function AssignmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  const {
    data: assignments = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myAssignments"],
    queryFn: async () => {
      const res = await assignmentService.getMyAssignments();
      return res.data;
    },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const clickedDate = date.toISOString().split("T")[0];

    const tugasHariIni = assignments.filter((a) => {
      const deadlineDate = new Date(a.deadline).toISOString().split("T")[0];
      return deadlineDate === clickedDate;
    });

    setFilteredAssignments(tugasHariIni);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const currentDate = date.toISOString().split("T")[0];
      const adaTugas = assignments.some((a) => {
        const deadlineDate = new Date(a.deadline).toISOString().split("T")[0];
        return deadlineDate === currentDate;
      });

      if (adaTugas) {
        return (
          <div className="text-[10px] mt-1 text-red-500 font-semibold">
            📌 Tugas
          </div>
        );
      }
    }
    return null;
  };

  return (
    <ContentLayout
      menu={"CALENDAR"}
      content={
        <div className="relative px-20 py-5 max-sm:px-5">
          <h1 className="text-2xl font-semibold mb-6">Kalender Tugas</h1>

          <div className="flex gap-10">
            <div className="w-[400px] h-[400px] shrink-0">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileContent={tileContent}
                className="w-full h-full"
              />
            </div>

            <div className="flex-1 h-[400px] overflow-y-auto">
              {selectedDate ? (
                <>
                  <h2 className="text-xl font-bold mb-2">
                    Tugas pada {selectedDate.toDateString()}
                  </h2>

                  {filteredAssignments.length > 0 ? (
                    <ul className="list-disc ml-5 space-y-2">
                      {filteredAssignments.map((tugas) => (
                        <li key={tugas.assignment_id}>
                          <span className="font-medium">{tugas.title}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Tidak ada tugas.</p>
                  )}
                </>
              ) : (
                <p className="text-gray-500">
                  Pilih tanggal untuk melihat tugas.
                </p>
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}

export default AssignmentCalendar;
