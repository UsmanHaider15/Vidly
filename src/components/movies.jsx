import React, { Component } from "react";
import Like from "./like";

class Movies extends Component {
  render() {
    const { movies } = this.props;

    if (movies === null) {
      return null;
    }
    const { length: count } = this.props.movies;

    if (count === 0) {
      return <p>There are no movies to Show</p>;
    }

    return (
      <React.Fragment>
        <p>There are {count} movies in database</p>
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
      </React.Fragment>
    );
  }
}

export default Movies;
