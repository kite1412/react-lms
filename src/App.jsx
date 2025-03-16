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
import { useState } from "react";

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(USERNAME));
  const hideUnauthenticated = `${!isAuthenticated && "hidden"}`;

  return (
    <BrowserRouter>
      <AuthProvider
        children={
          <div className={`
            h-screen w-screen grid ${
              isAuthenticated && "sm:grid-rows-[80px_1fr_80px] md:grid-cols-[1fr_4fr] md:grid-rows-[1fr]"
            } overflow-x-hidden
          `}>
            <TopBar className={`md:hidden ${hideUnauthenticated}`} />
            <SideNavBar
              className={`max-md:hidden ${hideUnauthenticated}`}
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
              className={`md:hidden ${hideUnauthenticated}`}
            />
          </div>
        }
        postAuth={() => setIsAuthenticated(true)}
        postLogout={() => setIsAuthenticated(false)}
      />
    </BrowserRouter>
  );
}

export default App;
