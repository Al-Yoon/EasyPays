import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  const loginSuccess = (token, userData) => {
    setAuthToken(token);
    setUser(userData);
    sessionStorage.setItem("access-token", token); // Guardar token en sessionStorage
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    sessionStorage.removeItem("access-token"); // Eliminar token al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ authToken, user, loginSuccess, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
