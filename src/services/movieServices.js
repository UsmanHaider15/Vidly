import http from "./httpService";

export function getMovies() {
  return http.get("http://localhost:3900/api/movies");
}

export function getMovie() {}

export function saveMovie() {}

export function deleteMovie(movie_id) {
  return http.delete("http://localhost:3900/api/movies" + "/" + movie_id);
}
