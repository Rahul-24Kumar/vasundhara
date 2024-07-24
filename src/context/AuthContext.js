import React, { createContext, useState, useEffect } from 'react';

import axios from '../api/axiosConfig';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email, password) => {

    const response = await axios.post('/auth/login', { email, password });

    const userData = response.data;

    console.log(userData)

    setUser(userData);

    localStorage.setItem('user', JSON.stringify(userData));

  };

  console.log(user);



  const register = async (name, email, password) => {

    const response = await axios.post('/auth/register', { name, email, password });

    const userData = response.data;

    setUser(userData);

    localStorage.setItem('user', JSON.stringify(userData));

  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem('user');
  };

  return (

    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>

  );
};

export { AuthProvider, AuthContext };
