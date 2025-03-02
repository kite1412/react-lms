import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import { USERNAME } from "./constants/auth";

function App() {
  const isAuthenticated = localStorage.getItem(USERNAME);

  return (
    <BrowserRouter>
      <AuthProvider children={
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to={"/"} replace /> : <LoginPage />
          } />
          <Route element={<ProtectedRoute />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      } />
    </BrowserRouter>
  );
}

export default App;
