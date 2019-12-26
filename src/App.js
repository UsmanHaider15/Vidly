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

  render() {
    return (
      <main className="container">
        <Movies
          movies={this.state.movies}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        ></Movies>
      </main>
    );
  }
}

export default App;
