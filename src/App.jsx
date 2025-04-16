import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import { JWT } from "./constants/auth";
import DashboardPage from "./pages/DashboardPage";
import SideNavBar from "./components/SideNavBar";
import CoursesPage from "./pages/CoursesPage";
import TopBar from "./components/TopBar";
import BottomNavBar from "./components/BottomNavBar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoursesDetail from "./pages/CoursesDetail";
import AssignmentsDetail from "./pages/AssignmentsDetail";
import MaterialDetail from "./pages/MaterialDetail";
import CalendarPage from "./pages/CalendarPage";
import { isJwtExpired } from "./utils/tokens";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(function () {
    const jwt = localStorage.getItem(JWT);

    return jwt !== undefined && jwt !== null && !isJwtExpired(jwt);
  }());
  const hideUnauthenticated = `${!isAuthenticated && "hidden"}`;
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider
          postAuth={() => setIsAuthenticated(true)}
          postLogout={() => setIsAuthenticated(false)}>
          <div
            className={`
              h-screen w-screen grid ${
                isAuthenticated &&
                "sm:grid-rows-[80px_1fr_80px] md:grid-cols-[1fr_4fr] md:grid-rows-[1fr]"
              } overflow-x-hidden
            `}>
            <TopBar className={`md:hidden ${hideUnauthenticated}`} />
            <SideNavBar className={`max-md:hidden ${hideUnauthenticated}`} />

            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
                }
              />
              <Route element={<ProtectedRoute />}>
                <Route index element={<DashboardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CoursesDetail />} />
                <Route
                  path="/courses/:courseId/materials/:materialId"
                  element={<MaterialDetail />}
                />
                <Route
                  path="/courses/:courseId/assignments/:assignmentId"
                  element={<AssignmentsDetail />}
                />
                <Route path="/calendar" element={<CalendarPage />} />
              </Route>
            </Routes>

            <BottomNavBar className={`md:hidden ${hideUnauthenticated}`} />
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
