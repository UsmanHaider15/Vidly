import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";

class Movies extends Component {
  getPagedData() {
    const {
      selectedGenre,
      movies: allMovies,
      sortColumn,
      currentPage,
      pageSize,
      searchValue
    } = this.props;

    let filteredMovies = allMovies;
    if (searchValue)
      filteredMovies = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchValue.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, movies };
  }
  render() {
    const {
      pageSize,
      currentPage,
      onPageChange,
      genres,
      onGenreSelect,
      selectedGenre,
      onLike,
      onDelete,
      onSort,
      sortColumn,
      onSearch,
      searchValue
    } = this.props;

    const { length: count } = this.props.movies;

    if (count === 0) {
      return <p>There are no movies to Show</p>;
    }

    const { totalCount, movies } = this.getPagedData();

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
          <Link
            to="movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>

          <p>There are {totalCount} movies in database</p>
          <SearchBox value={searchValue} onChange={onSearch}></SearchBox>
          <MoviesTable
            movies={movies}
            onLike={onLike}
            onDelete={onDelete}
            onSort={onSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={totalCount}
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
