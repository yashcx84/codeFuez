import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   Takle the logout functionality

  const isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
    
  };

  // JWT Authentication

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User Data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching the data");
    }
  };

  // services get from backend
  const getServices = async (req, res) => {
    try {
      const response = await fetch("http://localhost:4000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.error(`Service Error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// consumer
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
