import { useState } from "react";
import { courses, dashboard, schedule } from "../constants/menus";
import SideNavBar from "../components/SideNavBar";
import BottomNavBar from "../components/BottomNavBar";
import TopBar from "../components/TopBar";

/**
 * Layout for main menus (Dashboard, Courses, Schedule, and Communication)
 */
function MainLayout({
  dashboardContent,
  coursesContent,
  scheduleContent,
  communicationContent,
}) {
  const [currentMenu, setCurrentMenu] = useState(dashboard);

  return (
    <div className="bg-white sm:grid-rows-[80px_1fr_80px] w-full h-full grid md:grid-cols-[1fr_4fr] md:grid-rows-[1fr]">
      <TopBar className={"block md:hidden"} />
      <SideNavBar
        currentMenu={currentMenu}
        onClick={(m) => setCurrentMenu(m)}
        className="hidden md:flex"
      />
      {currentMenu === dashboard
        ? dashboardContent
        : currentMenu === courses
        ? coursesContent
        : currentMenu === schedule
        ? scheduleContent
        : communicationContent}
      {/* 80px = bottom nav bar height */}
      <div className="md:hidden sm:block h-fit bg-black" />
      <BottomNavBar
        selected={currentMenu}
        onClick={(m) => setCurrentMenu(m)}
        className="flex md:hidden mt-auto"
      />
    </div>
  );
}

export default MainLayout;
