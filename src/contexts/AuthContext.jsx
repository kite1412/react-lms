import { createContext, JSX, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JWT, USER } from "../constants/auth";
import authService from "../services/authService";

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
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(JWT));
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
      localStorage.setItem(USER, res.data.user);
      setIsAuthenticated(true);
      callback(true);
      navigateHome();
      postAuth();
    }

    callback(false);
  }

  const logout = () => {
    // userService.logout();
    // setIsAuthenticated(false);
    // navigate("/login", { replace: true });
    // postLogout();
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