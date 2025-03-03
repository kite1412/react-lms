import CourseCard from "./CourseCard";

function CoursesCard() {
  const courses = Array(11).fill(null);
  return (
    <div className=" flex gap-10 flex-wrap p-10 max-w-7xl w-full">
      {courses.map((_, index) => (
        <CourseCard key={index} className="" />
      ))}
    </div>
  );
}

export default CoursesCard;
