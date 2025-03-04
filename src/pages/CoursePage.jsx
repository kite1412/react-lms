import CoursesCard from "../components/CoursesCard";
import AddIcon from "../assets/plus.svg?react";

function CoursePage() {
  return (
    <div className="bg-white w-full overflow-x-hidden relative">
      <div className="border-b-1 border-gray-400 w-full h-15 text-black flex items-center px-5">
        <h1 className="text-3xl font-bold">COURSES</h1>
      </div>
      <CoursesCard />
    </div>
  );
}

export default CoursePage;
