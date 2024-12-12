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
    const token = await loginUser(user);
    sessionStorage.setItem("access-token", token);
    const decoded = jwtDecode(token); // Usar jwt_decode
    setUser(decoded);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('access-token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = async(newUser) => {
    const user = await registerUser(newUser);
    return user};

  const updateUser = (updatedUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUserList = users.map(user => user.email === updatedUser.email ? updatedUser : user);
    localStorage.setItem('users', JSON.stringify(newUserList));
    setUser(updatedUser);
  };

  const deleteUser = (userEmail) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUserList = users.filter(user => user.email !== userEmail);
    localStorage.setItem('users', JSON.stringify(newUserList));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, user, updateUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};