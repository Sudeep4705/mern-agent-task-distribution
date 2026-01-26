import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [IsloggedIn, setIsloggedIn] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8003/admin/verify",
          {},
          { withCredentials: true }
        );

        setIsloggedIn(res.data.IsloggedIn);
      } catch {
        setIsloggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ IsloggedIn, setIsloggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
