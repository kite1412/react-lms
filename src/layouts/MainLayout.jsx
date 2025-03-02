import { useState } from "react";
import { dashboard } from "../constants/menus";
import SideNavBar from "../components/SideNavBar";

/**
 * Layout for main menus (Dashboard, Courses, Schedule, and Communication)
 */
function MainLayout() {
  const [currentMenu, setCurrentMenu] = useState(dashboard);

  return (
    <div className="flex w-screen h-screen">
      <SideNavBar currentMenu={currentMenu} onClick={m => setCurrentMenu(m)} />
    </div>
  );
}

export default MainLayout;