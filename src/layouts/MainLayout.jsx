import { useState } from "react";
import { courses, dashboard } from "../constants/menus";
import SideNavBar from "../components/SideNavBar";
import CoursePage from "../pages/CoursePage";

/**
 * Layout for main menus (Dashboard, Courses, Schedule, and Communication)
 */
function MainLayout() {
  const [currentMenu, setCurrentMenu] = useState(dashboard);

  return (
    <div className="grid grid-cols-[1fr_4fr] w-screen h-screen">
      <SideNavBar
        currentMenu={currentMenu}
        onClick={(m) => setCurrentMenu(m)}
      />
      {currentMenu === courses ? <CoursePage /> : <div></div>}
    </div>
  );
}

export default MainLayout;
