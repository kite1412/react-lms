import { createContext, JSX, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JWT, USER } from "../constants/auth";
import authService from "../services/authService";
import { isJwtExpired } from "../utils/tokens";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  signUp: () => {},
  logout: () => {}
});

/**
 * Provider that provides user authentication information.
 * @param {ReactNode} children - Content inside this provider  
 * @param {() => void} postAuth - Callback function after successfully signed in  
 * @param {() => void} postLogout - Callback function after successfully logged out
 * @returns {JSX.Element}
 */
export function AuthProvider({ 
  children,
  postAuth = () => {},
  postLogout = () => {}
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(function () {
    const token = localStorage.getItem(JWT);

    if (!token) return false;
  
    const isExpired = isJwtExpired(token);

    if (isExpired) localStorage.removeItem(JWT);

    return !isExpired;
  }());
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/", { replace: true });    
  };

  const login = async (email, password, callback) => {
    const res = await authService.login({
      email: email,
      password: password
    });
    console.log(res);

    if (res && res.success) {
      localStorage.setItem(JWT, res.data.token);
      localStorage.setItem(USER, JSON.stringify(res.data.user));
      setIsAuthenticated(true);
      callback(true);
      navigateHome();
      postAuth();
    }

    callback(false);
  }

  const logout = async () => {
    try {
      // try to remove the cookie
      await authService.logout();
    } catch (e) {
      console.error(e);
    } finally {
      setIsAuthenticated(false);
      localStorage.removeItem(JWT);
      postLogout();
    }
  }

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated: isAuthenticated,
        login: login,
        logout: logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}