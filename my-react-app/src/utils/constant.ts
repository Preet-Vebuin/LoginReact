export const BASE_API_URL = "http://localhost:5173";
export const API_BASE_URL = "http://localhost:5000/api/users"; //Backend API


// Role-Based Access Control (RBAC)
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// Route Access Control
export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  REPORT: "/report",
};

// API Endpoints
export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  LOGOUT: `${API_BASE_URL}/logout`,
  FETCH_USER: `${API_BASE_URL}/user`,
  GET_REPORTS: `${API_BASE_URL}/reports`,
};
