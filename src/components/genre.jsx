import React, { Component } from "react";

class Genre extends Component {
  render() {
    const { genres } = this.props;
    console.log("genres", genres);
    return (
      <ul className="list-group">
        <li className="list-group-item">All Genre</li>
        {genres.map(genre => (
          <li key={genre._id} className="list-group-item">
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genre;
