import CourseCard from "./CourseCard";
import AddIcon from "../assets/plus.svg?react";
import DefaultProfilePicture from "../assets/profile-picture-blank.png";
import courseService from "../services/courseService";
import { useEffect, useState } from "react";

function CourseCards() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getAllCourses();
        setCourses(data);
      } catch (err) {
        setErr(err.message || "Failed To Get Courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="px-20 py-10 text-gray-600">Loading courses...</div>;
  }

  if (err) {
    return <div className="px-20 py-10 text-red-500">Error: {err}</div>;
  }

  return (
    <div className="flex gap-7 max-sm:gap-5 max-sm:p-5 flex-wrap px-20 py-10 max-w-7xl w-full relative max-sm:justify-center">
      {courses.map((course) => (
        <CourseCard
          key={course.course_id}
          id={course.course_id}
          courseName={course.name}
          instructor={course.teacher}
          profilePicture={course.course_img || DefaultProfilePicture}
          description={course.description}
          className=""
        />
      ))}
      <div className="fixed rounded-full p-1 right-5 bottom-25 md:bottom-10 md:right-20 drop-shadow-2xl cursor-pointer ">
        <AddIcon className=" w-[30px] h-[30px] filter drop-shadow-[0px_0px_10px_rgba(0,0,0,0.9)]" />
      </div>
    </div>
  );
}

export default CourseCards;
