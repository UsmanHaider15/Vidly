import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      onPageChange,
      genres,
      onGenreSelect,
      selectedGenre,
      onLike,
      onDelete,
      onSort,
      sortColumn
    } = this.props;

    const { length: count } = this.props.movies;

    if (count === 0) {
      return <p>There are no movies to Show</p>;
    }

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

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
          <MoviesTable
            movies={movies}
            onLike={onLike}
            onDelete={onDelete}
            onSort={onSort}
          />
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
