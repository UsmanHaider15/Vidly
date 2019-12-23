import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    this.setState({ ...this.state, movies: getMovies() });
  }

  deleteMovie = id => {
    console.log("state", this.state);
    this.setState({
      ...this.state,
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  };
  render() {
    return (
      <main className="container">
        <Movies movies={this.state.movies} onDelete={this.deleteMovie}></Movies>
      </main>
    );
  }
}

export default App;
