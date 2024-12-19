import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import loginUser from '../../api/login_api';
import registerUser from '../../api/register_api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('access-token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      try {
        // Recupera los datos del usuario almacenados
        const userObject = JSON.parse(userData);
        setUser(userObject);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error al procesar los datos del usuario:', error);
        logout(); // Limpia el estado si hay un error
      }
    }
  }, []); // Se ejecuta solo al cargar el componente

  const login = async (userCredentials) => {
    try {
      const response = await loginUser(userCredentials);
      console.log(response);
      const token = response.token;

      // Guarda el token y los datos del usuario
      sessionStorage.setItem('access-token', token);
      const decoded = jwtDecode(token);
      localStorage.setItem('user', JSON.stringify(decoded));
      setUser(decoded); // Actualiza la información del usuario
      setIsAuthenticated(true); // Actualiza el estado de autenticación
      return response;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  };

  const logout = () => {
    // Limpia el almacenamiento y resetea los estados
    sessionStorage.removeItem('access-token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = async (newUser) => {
    try {
      const user = await registerUser(newUser);
      return user;
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};
