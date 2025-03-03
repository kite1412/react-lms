import MoreIcon from "../assets/three-dots-vertical.svg?react";
import FolderIcon from "../assets/folder.svg?react";
import TaskIcon from "../assets/clipboard.svg?react";

function CourseCard() {
  return (
    <div className="w-60 h-45 bg-white rounded-md relative border-1 border-gray-400 flex flex-col justify-between overflow-hidden text-black cursor-pointer hover:shadow-lg">
      <div className="w-full h-20 bg-[#0A376E] flex justify-between text-white py-1">
        <h2 className="mx-2">Praktikum</h2>

        <MoreIcon className="w-[20px] h-[20px] text-white cursor-pointer m-1" />
      </div>
      <div className="w-12 h-12 rounded-full bg-green-500 absolute right-3 top-14">
        {/*  */}
      </div>
      <div className="flex self-end gap-2 text-gray-500 border-t-1 border-gray-400 w-full justify-end px-3 py-2">
        <TaskIcon className="w-[18px] h-[18px] cursor-pointer" />
        <FolderIcon className="w-[18px] h-[18px] cursor-pointer" />
      </div>
    </div>
  );
}

export default CourseCard;
