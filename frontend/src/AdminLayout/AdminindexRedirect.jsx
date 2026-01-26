import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

export default function AdminIndexRedirect() {
  const { IsloggedIn, loading } = useContext(AuthContext);


  if (loading) {
    return <p>Checking authentication...</p>;
  }
  
  return IsloggedIn
    ? <Navigate to="/admin/add" replace />
    : <Navigate to="/admin/login" replace />;
}
