import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

interface PrivateRouteProps {
  allowedRoles: string[]; // Pass allowed roles as props
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const token = useSelector((state: RootState) => state.auth.token); // Select token from Redux
  const role = useSelector((state: RootState) => state.auth.role); // Get role from Redux

  console.log("Token from private route:", token);
  console.log("User Role from Context API:",role);

  if (!token) return <Navigate to="/login" />; // Redirect if not logged in

  if (!allowedRoles.includes(role || "")) {
    return <Navigate to="/dashboard" />; // Redirect unauthorized users
  }

  return <Outlet />;
};

export default PrivateRoute;
