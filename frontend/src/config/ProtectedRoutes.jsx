import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

const ProtectedRoutes = () => {
    const isAuthenticated = false; // Replace this with your actual authentication logic
//   const { isAuthenticated } = useAuth(); 
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoutes;