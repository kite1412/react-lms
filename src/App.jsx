import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import { USERNAME } from "./constants/auth";
import DashboardPage from "./pages/DashboardPage";
import SideNavBar from "./components/SideNavBar";
import CoursesPage from "./pages/CoursesPage";
import TopBar from "./components/TopBar";
import BottomNavBar from "./components/BottomNavBar";

function App() {
  const isAuthenticated = localStorage.getItem(USERNAME);

  return (
    <BrowserRouter>
      <AuthProvider
        children={
          <div className="h-screen w-screen grid sm:grid-rows-[80px_1fr_80px] md:grid-cols-[1fr_4fr] md:grid-rows-[1fr]">
            <TopBar className="md:hidden" />
            <SideNavBar
              className="max-md:hidden"
            />
            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? <Navigate to={"/"} replace /> : <LoginPage />
                }
              />
              <Route element={<ProtectedRoute />}>
                <Route index element={<DashboardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
              </Route>
            </Routes>
            <BottomNavBar 
              className="md:hidden"
            />
          </div>
        }
      />
    </BrowserRouter>
  );
}

export default App;
