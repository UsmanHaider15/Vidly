import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import { getMovies, deleteMovie } from "./services/movieServices";
import { getGenres } from "./services/genreService.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/common/not-found";
import Home from "./components/home";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm";
import RegistrationFrom from "./components/registrationForm";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: ""
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies: movies, genres: genres });
  }

  handleDelete = async id => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== id);
    this.setState({ movies });

    try {
      await deleteMovie(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("movie deleteds");
        toast.error("This movie has already been deleted.");
      }

      this.setState({ movies: originalMovies });
    }
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationFrom} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => (
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
                  onSearch={this.handleSearch}
                  searchValue={this.state.searchQuery}
                  {...props}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
