import React, { Component } from "react";

class Movies extends Component {
  render() {
    const { movies } = this.props;

    if (movies === null) {
      return null;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
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
    );
  }
}

export default Movies;
