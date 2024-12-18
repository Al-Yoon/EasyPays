import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"; // Importación correcta
import loginUser from "../../api/login_api";
import registerUser from "../../api/register_api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('access-token');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Usar jwt_decode
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Token error", error);
        logout();
      }
    }
  }, []);

  const login = async (user) => {
    const response = await loginUser(user);
    console.log(response);
      sessionStorage.setItem("access-token", response.token);
      const decoded = jwtDecode(response.token);
      localStorage.setItem("user",JSON.stringify(decoded));
      setUser(decoded); // Actualiza la información del usuario
      setIsAuthenticated(true); // Actualiza el estado de autenticación
      return response
  };
  

  const logout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem("user");
    setIsAuthenticated(false); //cambia los estados
    setUser(null);
  };

  const register = async(newUser) => {
    const user = await registerUser(newUser);
    return user};

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};