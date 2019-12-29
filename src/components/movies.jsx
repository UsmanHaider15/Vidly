import React, { Component } from "react";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";

class Movies extends Component {
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      onPageChange,
      genres,
      onGenreSelect,
      selectedGenre
    } = this.props;

    const { length: count } = this.props.movies;

    if (count === 0) {
      return <p>There are no movies to Show</p>;
    }

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedGenre={selectedGenre}
            onItemSelect={onGenreSelect}
          />
        </div>
        <div className="col">
          <p>There are {filteredMovies.length} movies in database</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td> {movie.title} </td>
                  <td> {movie.genre.name} </td>
                  <td> {movie.numberInStock} </td>
                  <td> {movie.dailyRentalRate} </td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.props.onLike(movie)}
                      movie={movie}
                    ></Like>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
