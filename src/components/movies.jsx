import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import MoviesTable from "./moviesTable";

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
      onDelete
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
          <MoviesTable movies={movies} onLike={onLike} onDelete={onDelete} />
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
