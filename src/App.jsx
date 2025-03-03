import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";
import { USERNAME } from "./constants/auth";

function App() {
  const isAuthenticated = localStorage.getItem(USERNAME);

  return (
    <BrowserRouter>
      <AuthProvider
        children={
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to={"/"} replace /> : <LoginPage />
              }
            />
            <Route path="/courses" element={<CoursePage />} />
            <Route element={<ProtectedRoute />}>
              <Route index element={<MainPage />} />
            </Route>
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;
