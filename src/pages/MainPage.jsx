import MainLayout from "../layouts/MainLayout";
import DashboardPage from "./DashboardPage";
import CoursesPage from "./CoursesPage";

function MainPage() {
  return (
    <div className="h-screen w-screen">
      <MainLayout
        dashboardContent={<DashboardPage />}
        coursesContent={<CoursesPage />}
        scheduleContent={<></>}
        communicationContent={<></>}
      />
    </div>
  );
}

export default MainPage;