import MoreIcon from "../assets/three-dots-vertical.svg?react";
import FolderIcon from "../assets/folder.svg?react";
import TaskIcon from "../assets/clipboard.svg?react";
import { useNavigate } from "react-router-dom";

function CourseCard({ courseName, instructor, profilePicture, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${id}`)}
      className="w-60 h-45 max-sm:w-md bg-white rounded-md relative border-1 border-gray-400 flex flex-col justify-between overflow-hidden text-black cursor-pointer hover:shadow-lg">
      <div className="w-full h-20 bg-[#0A376E] flex justify-between text-white py-1">
        <div className="flex flex-col justify-between">
          <h2 className="mx-2">{courseName}</h2>
          <h3 className="mx-2 text-sm">{instructor}</h3>
        </div>
        <MoreIcon className="w-[20px] h-[20px] text-white cursor-pointer m-1" />
      </div>
      <div className="w-12 h-12 rounded-full bg-green-500 absolute right-3 top-14 overflow-hidden">
        <img
          src={profilePicture || "/default-profile.png"}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-3 py-2 text-sm text-gray-700 line-clamp-3"></div>
      <div className="flex self-end gap-4 text-gray-500 border-t-1 border-gray-400 w-full justify-end px-3 py-2">
        <TaskIcon className="w-[18px] h-[18px] hover:text-[#FDBA02]" />
        <FolderIcon className="w-[18px] h-[18px] hover:text-[#FDBA02]" />
      </div>
    </div>
  );
}

export default CourseCard;
