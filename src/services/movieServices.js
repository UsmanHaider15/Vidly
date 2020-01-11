import http from "./httpService";
import { apiUrl } from "../config.js";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movie_id) {
  return http.get(apiEndpoint + "/" + movie_id);
}

export function saveMovie() {}

export function deleteMovie(movie_id) {
  return http.delete(apiEndpoint + "/" + movie_id);
}
