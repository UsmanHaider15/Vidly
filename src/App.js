import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService.js";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = id => {
    this.setState({
      ...this.state,
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    return (
      <main className="container">
        <Movies
          movies={this.state.movies}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
          genres={this.state.genres}
          onGenreSelect={this.handleGenreSelect}
          selectedGenre={this.state.selectedGenre}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
        ></Movies>
      </main>
    );
  }
}

export default App;
