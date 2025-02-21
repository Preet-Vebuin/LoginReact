import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Report from "../components/report/Report";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/notFound/NotFound";
import { ROLES, ROUTES } from "../utils/constant";
import Navbar from "../components/navbar/Navbar";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Route */}
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* Private Routes with Role-Based Access */}
        <Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN, ROLES.USER]} />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
          <Route path={ROUTES.REPORT} element={<Report />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
