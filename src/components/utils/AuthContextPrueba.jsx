import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";//dependencia decodifica jwt

export const AuthContext = createContext(); //crea el contexto

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); //estado para saber si esta logueado
    const [user, setUser] = useState(null); //iniciamos sin usuarios

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try{
                const decoded = jwtDecode(token);
                setUser(decoded);
                setIsAuthenticated(true);
            } catch(error){
                console.error("Token error",error);
                logout();
            }
        }
    }, []);

    const login = (token,user) => {
        sessionStorage.setItem("access-token", token);
        const decoded = jwtDecode(token);
        setUser(decoded); // Actualiza la información del usuario
        setIsAuthenticated(true); // Actualiza el estado de autenticación
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false); //cambia los estados
        setUser(null);
    };

    const register = (newUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const updateUser = (updatedUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUserList = users.map(user => user.mail === updatedUser.mail ? updatedUser : user);
        localStorage.setItem('users', JSON.stringify(newUserList));
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
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
}