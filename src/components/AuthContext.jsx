// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
const { VITE_APP_BASE_URL } = import.meta.env;
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const AuthContext = createContext();
let cookies = new Cookies();

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
     if (response.status === 400) {
        error = true;
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (formData) => {
    try {
        const res = await postData(`${VITE_APP_BASE_URL}/api/login`, formData);
        setIsAuthenticated(true);
        cookies.set("user", res.user, {
          maxAge: 5 * 24 * 60 * 60 * 3600,
          sameSite: "none",
          secure: true
        });
        return res;
    } catch (err) {
        return err;
    }
  };

  const logout = () => {
    // Logic to handle user logout
    cookies.remove("user");
    navigate('/')
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
