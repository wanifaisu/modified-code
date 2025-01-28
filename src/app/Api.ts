// import axios from "axios";
// import { env } from "../../config/env";

// //const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001/api/admin/auth';
// const BASE_URL = `${env.NEXT_PUBLIC_API_URL}/api`;

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const setAuthToken = (token: string | null) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// };

// // Auth Routes
// export const adminSignup = async (data: object) => {
//   return await api.post("/create/staff", data);
// };

// export const adminLogin = async (data: object) => {
//   return await api.post("/admin/auth/login", data);
// };

// export const adminForgotPassword = async (data: object) => {
//   return await api.post("/forgot/password", data);
// };

// export const adminConfirmCode = async (data: object) => {
//   return await api.post("/confirm/code", data);
// };

// export const adminResetPassword = async (data: object) => {
//   return await api.post("/reset/password", data);
// };

// // Profile and Staff Management Routes
// export const updateAdminProfile = async (token: string, data: object) => {
//   setAuthToken(token);
//   return await api.post("/update/staff", data);
// };

// export const updateAdminPassword = async (token: string, data: object) => {
//   setAuthToken(token);
//   return await api.post("/update/password", data);
// };

// export const deleteAdmin = async (token: string, data: object) => {
//   setAuthToken(token);
//   return await api.post("/delete/staff", data);
// };

// export const updateAdminStatus = async (token: string, data: object) => {
//   setAuthToken(token);
//   return await api.post("/update/status", data);
// };

// // Retrieve Admins
// export const retrieveAllAdmins = async (token: string, adminId: string) => {
//   setAuthToken(token);
//   return await api.get(`/retrieve/staff/${adminId}`);
// };

// export const retrieveAdminProfile = async (token: string, adminId: string) => {
//   setAuthToken(token);
//   return await api.get(`/retrieve/profile/${adminId}`);
// };

// export const addSubAdmin = async (data: object) => {
//   return await api.post("/add-sub-admin", data);
// };

// // Default export the axios instance if you need custom calls elsewhere
// export default api;
