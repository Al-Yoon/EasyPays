/* import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importar correctamente

export const AuthContext = createContext(); // Crear el contexto

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para saber si está logueado
    const [user, setUser] = useState(null); // Iniciamos sin usuarios

    useEffect(() => {
        const token = sessionStorage.getItem('access-token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Token error", error);
                logout();
            }
        }
    }, []);

    const login = (token) => {
        sessionStorage.setItem("access-token", token);
        const decoded = jwtDecode(token);
        setUser(decoded); // Actualiza la información del usuario
        setIsAuthenticated(true); // Actualiza el estado de autenticación
    };

    const logout = () => {
        sessionStorage.removeItem('access-token');
        setIsAuthenticated(false); // Cambia los estados
        setUser(null);
    };

    const register = (newUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    };

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
}; */

import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('access-token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Token error", error);
        logout();
      }
    }
  }, []);

  const login = (token) => {
    sessionStorage.setItem("access-token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('access-token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };

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