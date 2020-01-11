import http from "./httpService";
import { apiUrl } from "../config.js";

export function getMovies() {
  console.log(apiUrl + "movies");
  return http.get(apiUrl + "movies");
}

export function getMovie() {}

export function saveMovie() {}

export function deleteMovie(movie_id) {
  return http.delete(apiUrl + "movies" + "/" + movie_id);
}
