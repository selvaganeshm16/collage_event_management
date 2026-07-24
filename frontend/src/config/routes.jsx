import React from "react";
import { Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import SignIn from "@/pages/SignIn"
import SignUp from "@/pages/SignUp"
import Dashboard from "@/pages/Dashboard"
import Events from "@/pages/Events"
import Profile from "@/pages/Profile"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;