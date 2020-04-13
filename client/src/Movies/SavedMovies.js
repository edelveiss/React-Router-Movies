import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieList";

const SavedMovies = (props) => {
  console.log("savedMoviesProps", props.savedList);
  return (
    <div className="movie-list">
      {props.savedList.map((movie, index) => (
        <Link className="text-link" key={index} to={`/movies/${movie.id}`}>
          {console.log("movie saved1111 ", movie)}
          <MovieDetails1 key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

function MovieDetails1({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default SavedMovies;
