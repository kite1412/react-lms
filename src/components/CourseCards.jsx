import CourseCard from "./CourseCard";
import AddIcon from "../assets/plus.svg?react";

function CourseCards() {
  const courses = Array(11).fill(null);
  return (
    <div className=" flex gap-10 max-sm:gap-5 max-sm:p-5 flex-wrap p-10 max-w-7xl w-full relative max-sm:justify-center">
      {courses.map((_, index) => (
        <CourseCard key={index} className="" />
      ))}
      <div className="fixed rounded-full p-1 right-5 bottom-25 md:bottom-10 md:right-20 drop-shadow-2xl cursor-pointer ">
        <AddIcon className=" w-[30px] h-[30px] filter drop-shadow-[0px_0px_10px_rgba(0,0,0,0.9)]" />
      </div>
    </div>
  );
}

export default CourseCards;
