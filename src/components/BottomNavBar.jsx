import { routes } from "../constants/routes";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNavBar({ className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`flex justify-evenly w-full h-[80px] bg-midnightBlue p-4 ${className}`}>
      {
        routes.map((o, _) => (
          <Menu 
            icon={o.icon}
            selected={location.pathname === o.path}
            onClick={() => navigate(o.path)}
          />
        ))
      }
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