import { useState } from "react";
import { dashboard } from "../constants/menus";
import SideNavBar from "../components/SideNavBar";
import BottomNavBar from "../components/BottomNavBar";
import TopBar from "../components/TopBar";

/**
 * Layout for main menus (Dashboard, Courses, Schedule, and Communication)
 */
function MainLayout() {
  const [currentMenu, setCurrentMenu] = useState(dashboard);

  return (
    <div className="flex flex-col w-screen h-screen md:flex-row">
      <TopBar className={"block md:hidden"} />
      <SideNavBar 
        currentMenu={currentMenu}
        onClick={m => setCurrentMenu(m)}
        className="hidden md:block"
      />
      <div>
        asd
      </div>
      {/* 60px = bottom nav bar height */}
      <div className="hidden sm:block h-[80px]" />
      <div className="block md:hidden mt-auto">
        <BottomNavBar selected={currentMenu} onClick={m => setCurrentMenu(m)} />
      </div>
    </div>
  );
}

export default MainLayout;