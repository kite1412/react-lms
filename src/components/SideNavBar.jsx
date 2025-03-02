import "react";
import logo from "../assets/logo.svg"
import dashboardIcon from "../assets/dashboard.svg";
import calendarIcon from "../assets/calendar.svg";
import courseIcon from "../assets/course.svg";
import chatIcon from "../assets/chat.svg";
import { dashboard, communication, courses, schedule } from "../constants/menus";

function SideNavBar({ currentMenu, onClick }) {
  return (
    <div className="flex flex-col w-1/5 min-w-[240px] h-screen bg-midnightBlue gap-5 p-2" >
      <Logo />
      <div className="flex flex-col gap-5 ps-2">
        <Menu 
          icon={dashboardIcon}
          name={"Dashboard"}
          selected={currentMenu === dashboard}
          onClick={() => onClick(dashboard)}
        />
        <Menu 
          icon={courseIcon}
          name={"Courses"}
          selected={currentMenu === courses}
          onClick={() => onClick(courses)}
        />
        <Menu 
          icon={calendarIcon}
          name={"Schedule"}
          selected={currentMenu === schedule}
          onClick={() => onClick(schedule)}
        />
        <Menu 
          icon={chatIcon}
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
    <div className="flex gap-2 items-center">
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

// TODO: Adjust icon color
function Menu({icon, name, selected, onClick}) {
  return (
    <button 
      className={`
        flex gap-5 items-center ${selected ? "text-orange" : "text-white"}
        hover:cursor-pointer
        tint-[]
      `}
      onClick={onClick}
    >
      <img
        src={icon}
        className={`w-[32px] h-[32px] stroke-1`} 
      />
      <div>
        {name}
      </div>
    </button>
  );
}