import React from "react";
import { Link, NavLink } from "react-router-dom";
const SavedList = (props) => {
  console.log("save props", props);
  return (
    <div className="saved-list">
      <Link to={"/movies/saved"}>
        <h3 className="home-button">Saved Movies</h3>
      </Link>
      {props.list.map((movie, index) => (
        <NavLink key={index} to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
