import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AdminLayout/Context/AuthContext";

const ProtectedRoute = () => {
 
  const { IsloggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return null; 
  }


  if (!IsloggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;