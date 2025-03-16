import { createContext, useContext, ReactNode, JSX, useState } from "react";
import { userService } from "../objects";
import { USERNAME } from "../constants/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  signUp: () => {},
  logout: () => {}
})

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
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(USERNAME));
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/", { replace: true });    
  };

  const login = (username, password) => {
    if (userService.login(username, password)) {
      setIsAuthenticated(true);
      navigateHome();
      postAuth();
    }
  }

  const signUp = (username, password) => {
    if (userService.signUp(username, password)) {
      setIsAuthenticated(true);
      navigateHome();
      postAuth();
    }
  }

  const logout = () => {
    userService.logout();
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
    postLogout();
  }

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated: isAuthenticated,
        login: login,
        signUp: signUp,
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