import DashboardIcon from "../assets/dashboard.svg?react";
import CoursesIcon from "../assets/course.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import { communication, courses, dashboard, schedule } from "../constants/menus";

function BottomNavBar({ selected, onClick }) {
  return (
    <div className={`flex justify-evenly w-full h-[80px] bg-midnightBlue p-4`}>
      <Menu 
        icon={<DashboardIcon />}
        selected={ selected === dashboard }
        onClick={() => onClick(dashboard)}
      />
      <Menu 
        icon={<CoursesIcon />}
        selected={ selected === courses }
        onClick={() => onClick(courses)}
      />
      <Menu 
        icon={<CalendarIcon />}
        selected={ selected === schedule }
        onClick={() => onClick(schedule)}
      />
      <Menu 
        icon={<ChatIcon />}
        selected={ selected === communication }
        onClick={() => onClick(communication)}
      />
    </div>
  );
}

export default BottomNavBar;

function Menu({ icon, selected, onClick }) {
  return (
    <button
      className={`
        ${selected ? "text-orange" : "text-white"}
        transition-colors duration-500 hover:cursor-pointer
      `}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}