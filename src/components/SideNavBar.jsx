import "react";
import logo from "../assets/logo.svg";
import CalendarIcon from "../assets/calendar.svg?react";
import CourseIcon from "../assets/course.svg?react";
import ChatIcon from "../assets/chat.svg?react";
import DashboardIcon from "../assets/dashboard.svg?react";
import { useLocation, useNavigate } from "react-router-dom";

function SideNavBar({ className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { name: "Courses", path: "/courses", icon: <CourseIcon /> },
    { name: "Calendar", path: "/calendar", icon: <CalendarIcon /> },
    { name: "Communication", path: "/communication", icon: <ChatIcon /> }
  ];

  return (
    <div className={`
      flex flex-col h-full w-full bg-midnightBlue gap-4 ${className}
    `} >
      <Logo className={"p-4 ps-2"} />
      <div className="flex flex-col gap-5">
        {
          routes.map((o, _) => (
            <Menu 
              icon={o.icon}
              name={o.name}
              selected={location.pathname === o.path}
              onClick={() => navigate(o.path)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default SideNavBar;

function Logo({ className = "" }) {
  return (
    <div className={`flex gap-2 items-center w-full ${className}`}>
      <img
        src={logo}
        className="w-[60px] h-[60px]" 
      />
      <b>SMKN 2 Bandar Lampung</b>
    </div>
  );
}

function Menu({ icon, name, selected, onClick }) {
  return (
    <button
      className={`
        flex gap-3 items-center ${selected ? "text-orange" : "text-white"}
        hover:cursor-pointer transition-colors duration-300 select-none
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
