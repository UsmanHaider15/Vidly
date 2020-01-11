import http from "./httpService";
import { apiUrl } from "../config.js";

export function getGenres() {
  return http.get(apiUrl + "genres");
}
