import SideNavBar from "../components/SideNavBar";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "./DashboardPage";

function MainPage() {
  return (
    <div className="h-screen w-screen">
      <MainLayout
        dashboardContent={<DashboardPage />}
        coursesContent={<></>}
        scheduleContent={<></>}
        communicationContent={<></>}
      />
    </div>
  );
}

export default MainPage;