import "react";
import logo from "../assets/logo.svg"
import CalendarIcon from "../assets/calendar.svg?react";
import CourseIcon from "../assets/course.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import DashboardIcon from "../assets/dashboard.svg?react";
import { dashboard, communication, courses, schedule } from "../constants/menus";

function SideNavBar({ currentMenu, onClick }) {
  return (
    <div className="flex flex-col w-1/5 min-w-[240px] h-screen bg-midnightBlue gap-4" >
      <Logo />
      <div className="flex flex-col gap-5">
        <Menu 
          icon={ <DashboardIcon /> }
          name={"Dashboard"}
          selected={currentMenu === dashboard}
          onClick={() => onClick(dashboard)}
        />
        <Menu 
          icon={ <CourseIcon /> }
          name={"Courses"}
          selected={currentMenu === courses}
          onClick={() => onClick(courses)}
        />
        <Menu 
          icon={ <CalendarIcon /> }
          name={"Schedule"}
          selected={currentMenu === schedule}
          onClick={() => onClick(schedule)}
        />
        <Menu 
          icon={ <ChatIcon /> }
          name={"Communication"}
          selected={currentMenu === communication}
          onClick={() => onClick(communication)}
        />
      </div>
    </div>
  );
}

export default SideNavBar;

function Logo() {
  return (
    <div className="flex gap-2 items-center p-2">
      <img
        src={logo}
        className="w-[60px] h-[60px]" 
      />
      <div className="font-bold">
        SMKN 2 Bandar Lampung
      </div>
    </div>
  );
}

function Menu({icon, name, selected, onClick}) {
  return (
    <button 
      className={`
        flex gap-3 items-center ${selected ? "text-orange" : "text-white"}
        hover:cursor-pointer transition-colors duration-300
      `}
      onClick={onClick}
    >
      <div 
        className={`
          h-full w-[3px] rounded-tr-[4px] rounded-br-[4px]
          ${selected ? "bg-orange" : "bg-midnightBlue"}
          transition-colors duration-500
      `} />
      <div className="flex gap-3 pt-3 pb-3">
        {icon}
        <div>
          {name}
        </div>
      </div>
    </button>
  );
}