import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const Movie = (props) => {
  console.log("movie props: ", props);
  const [movie, setMovie] = useState();
  const { movieID } = useParams();
  console.log("id param", movieID);

  useEffect(() => {
    //const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${movieID}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieID]);

  //Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    if (!props.savedList.find((el) => el.id === movie.id)) {
      //console.log("this movie is saved");

      const addToSavedList = props.addToSavedList;
      addToSavedList(movie);
    } else {
      alert(`${movie.title} has already saved`);
    }
  };

  const removeMovie = () => {
    const filteredMovieList = props.savedList.filter(
      (el) => el.id !== movie.id
    );

    // const addToSavedList = props.addToSavedList;
    props.setSavedList(filteredMovieList);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  //const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie} />

      <div onClick={() => saveMovie()} className="save-button">
        Save
      </div>

      <div onClick={() => removeMovie()} className="remove-button">
        Remove
      </div>
    </div>
  );
};

export default Movie;

// <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map((star) => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
//       </div>
