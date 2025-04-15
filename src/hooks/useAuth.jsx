import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/config";
import ErrorCard from "../components/Card/ErrorCard";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

const userProfile = async (token) => {
  try {
    const { data } = await axios.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    setUser(data.data.user);
    setLogedIn(true);
  } catch (error) {
    logout();
  }
}

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      
      if (token) {
       await userProfile(token);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/users/login", { email, password }, { withCredentials: true });
      if (data.status == "success") {
        localStorage.setItem("token", data.token);
        await userProfile(data.token);
        setLogedIn(true);
        navigate("/dashboard");
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const googleLogin = async () => {
    try {
      // Open Google OAuth window
      const googleAuthUrl = `${axios.defaults.baseURL}/users/google`;
      const width = 600;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      const popup = window.open(
        googleAuthUrl,
        'Google OAuth',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
      );

      // Listen for message from the popup
      const messageListener = (event) => {
        if (event.origin !== window.location.origin) return;
        
        if (event.data.token) {
          localStorage.setItem("token", event.data.token);
          setUser(event.data.user);
          setLogedIn(true);
          navigate("/dashboard");
          window.removeEventListener("message", messageListener);
          popup.close();
        }
        
        if (event.data.error) {
          throw new Error(event.data.error);
        }
      };

      window.addEventListener("message", messageListener);
    } catch (error) {
      throw new Error(error.message || "Google login failed");
    }
  };

  const githubLogin = async () => {
    try {
      // Open GitHub OAuth window
      const githubAuthUrl = `${axios.defaults.baseURL}/users/github`;
      const width = 600;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      const popup = window.open(
        githubAuthUrl,
        'GitHub OAuth',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
      );

      // Listen for message from the popup
      const messageListener = (event) => {
        if (event.origin !== window.location.origin) return;
        
        if (event.data.token) {
          localStorage.setItem("token", event.data.token);
          setUser(event.data.user);
          setLogedIn(true);
          navigate("/dashboard");
          window.removeEventListener("message", messageListener);
          popup.close();
        }
        
        if (event.data.error) {
          throw new Error(event.data.error);
        }
      };

      window.addEventListener("message", messageListener);
    } catch (error) {
      throw new Error(error.message || "GitHub login failed");
    }
  };

  const register = async (name, email, password, passwordConfirm) => {
    try {
      const { data } = await axios.post("/users/signup", { name, email, password, passwordConfirm, role: "user" });
      setUser(data.user);
      navigate("/");
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };
const sendResetLink = async (email) => {
    try {
      const { data } = await axios.post("/users/forgotPassword", { email });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to send reset link");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setLogedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      loading, 
      logedIn,
      googleLogin,
      githubLogin,
      sendResetLink,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};