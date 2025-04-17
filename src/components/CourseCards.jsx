import { useState } from "react";
import CourseCard from "./CourseCard";
import AddIcon from "../assets/plus.svg?react";
import DefaultProfilePicture from "../assets/profile-picture-blank.png";
import JoinClassModal from "./JoinClassModal";
import courseService from "../services/courseService";

function CourseCards({ courses }) {
  const [showModal, setShowModal] = useState(false);

  const handleJoinSubmit = async (code) => {
    try {
      await courseService.joinCourse(code);
      alert("Successfully joined the class!");
      setShowModal(false);
      window.location.reload(); // atau trigger re-fetch data
    } catch (err) {
      alert(err.message || "Failed to join class.");
    }
  };

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

      <button
        onClick={() => setShowModal(true)}
        className="fixed rounded-full p-1 right-5 bottom-25 md:bottom-10 md:right-20 drop-shadow-2xl cursor-pointer ">
        <AddIcon className="w-[30px] h-[30px] filter drop-shadow-[0px_0px_10px_rgba(0,0,0,0.9)]" />
      </button>

      {showModal && (
        <JoinClassModal
          onClose={() => setShowModal(false)}
          onSubmit={handleJoinSubmit}
        />
      )}
    </div>
  );
}

export default CourseCards;
