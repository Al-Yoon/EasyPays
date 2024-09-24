import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedUser) {
            setIsAuthenticated(true);
            setUser(loggedUser);
        }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            setIsAuthenticated(true);
            setUser(user);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('loggedInUser');
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
};