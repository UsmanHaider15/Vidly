import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    const columns = [
      { path: "title", name: "Title" },
      { path: "genre.name", name: "Genre" },
      { path: "numberInStock", name: "Stock" },
      { path: "dailyRentalRate", name: "Rate" },
      { key: "like" },
      { key: "delete" }
    ];

    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        ></TableHeader>
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
                  onClick={() => onLike(movie)}
                  movie={movie}
                ></Like>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(movie._id)}
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

export default MoviesTable;
