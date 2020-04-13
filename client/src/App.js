import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import SavedMovies from "./Movies/SavedMovies";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch>
        <Route path="/movies/saved">
          <SavedMovies addToSavedList={addToSavedList} savedList={savedList} />
        </Route>
        <Route path="/movies/:movieID">
          <Movie
            addToSavedList={addToSavedList}
            savedList={savedList}
            setSavedList={setSavedList}
          />
        </Route>

        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
