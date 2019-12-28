import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
import Genre from "./components/genre";

class App extends Component {
  state = {
    movies: null,
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ ...this.state, movies: getMovies() });
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Genre></Genre>
          </div>
          <div className="col-10">
            <main className="container">
              <Movies
                movies={this.state.movies}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
              ></Movies>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
