import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.js";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem("token", jwt);
}

export async function logout() {
  localStorage.removeItem("token");
}

export async function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
