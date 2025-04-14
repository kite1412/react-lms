import ContentLayout from "../layouts/ContentLayout";
import TotalCourseCard from "../components/TotalCourseCard";
import AssignmentCompleted from "../components/AssignmentCompleted";
import LearningProgressCard from "../components/LearningProgressCard";
import Schedules from "../components/Schedules";
import AssignmentList from "../components/AssignmentList";

function DashboardPage() {
  return (
    <ContentLayout
      menu={"DASHBOARD"}
      content={
        <div className="relative px-20 max-sm:px-5">
          <div className="flex justify-between items-center text-white">
            <h2 className="text-xl font-bold py-5">Ringkasan Akademik</h2>
            <select
              name="kelas"
              id="kelas"
              className="h-fit outline-0 bg-white text-black rounded-sm cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Kelas
              </option>
              <option value="10" className="text-black">
                Kelas 10
              </option>
              <option value="11" className="text-black">
                Kelas 11
              </option>
              <option value="12" className="text-black">
                Kelas 12
              </option>
            </select>
          </div>
          <div className="flex gap-10 max-sm:overflow-x-scroll max-md:gap-4 justify-between max-md:justify-start pb-2 ">
            <TotalCourseCard />
            <AssignmentCompleted />
            <LearningProgressCard />
          </div>
          <div className="flex h-90 mt-10 justify-between flex-wrap gap-3">
            <div className="flex flex-col justify-between gap-3">
              <h2 className="text-xl">
                Jadwal Mata Pelajaran{" "}
                <span className="text-gray-500 border-l-3 border-gray-400 px-1">
                  Kelas 11
                </span>
              </h2>
              <ul className="flex border-1 border-gray-400 rounded-md w-xs text-xs cursor-pointer">
                <li className="flex-1 text-center py-1 px-1 border-1 border-l-0 border-t-0 border-b-0 border-gray-400 bg-[#FDBA02] text-white">
                  Senin
                </li>
                <li className="flex-1 text-center py-1 px-1 border-1 border-t-0 border-b-0 border-gray-400">
                  Selasa
                </li>
                <li className="flex-1 text-center py-1 px-1 border-1 border-t-0 border-b-0 border-gray-400">
                  Rabu
                </li>
                <li className="flex-1 text-center py-1 px-1 border-1 border-t-0 border-b-0 border-gray-400">
                  Kamis
                </li>
                <li className="flex-1 text-center py-1 px-1 border-1 border-r-0 border-t-0 border-b-0  border-gray-400">
                  Jumat
                </li>
              </ul>
              <Schedules />
            </div>
            <div className="flex flex-col justify-between gap-3">
              <h2 className="text-xl">Daftar Tugas</h2>
              <AssignmentList />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default DashboardPage;
