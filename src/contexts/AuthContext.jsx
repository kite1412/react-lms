import { createContext, useContext, ReactNode, JSX, useState } from "react";
import MockUserService from "../services/user/MockUserService";
import { USERNAME } from "../constants/auth";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  signUp: () => {},
  logout: () => {}
})

/**
 * Provider that provides user authentication information.
 * @param {ReactNode} children - Content inside this provider  
 * @returns {JSX.Element}
 */
export function AuthProvider({children}) {
  const userService = new MockUserService();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(USERNAME));

  const login = (username, password) => {
    if (userService.login(username, password)) setIsAuthenticated(true);
  }

  const signUp = (username, password) => {
    if (userService.signUp(username, password)) setIsAuthenticated(true);
  }

  const logout = () => {
    userService.logout()
    setIsAuthenticated(false);
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