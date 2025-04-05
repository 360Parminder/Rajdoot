import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/config"; // Ensure axios is set up
import ErrorCard from "../components/Card/ErrorCard";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      
      if (token) {

        try {
          const { data } = await axios.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
          console.log(data.data.user);
          
          setUser(data.data.user);
          setLogedIn(true);
        } catch (error) {
          logout();

        }
      }
      setLoading(false);

    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/users/login", { email, password },{ withCredentials: true });
      console.log(data);

      localStorage.setItem("token", data.token);
      setUser(data.data.user);
      setLogedIn(true);
      navigate("/dashboard");
    } catch (error) {
      return <ErrorCard message={error.response?.data?.message || "Login failed"} />;
    }
  };

  const register = async (name, email, password,passwordConfirm) => {
    try {
      const { data } = await axios.post("/users/signup", { name, email, password,passwordConfirm,role:"user" });
      // localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, logedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Named export instead of default export
export const useAuth = () => {
  return useContext(AuthContext);
};
