import "./App.css";
import { React, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (imdbID) => {
    setSelectedMovie(imdbID);
  };

  return (
    <div>
      <SearchBar handleMovieClick={handleMovieClick} />
      {selectedMovie && <MovieDetail imdbID={selectedMovie} />}
    </div>
  );
};

export default App;
