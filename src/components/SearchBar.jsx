import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const SearchBar = ({ handleMovieClick }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setQuery(input); // Postavlja "query", što pokreće "useEffect"
  };

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]); // Ako nema rezultata, postavi prazan niz
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    handleSearch();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Unesite naziv filma"
        value={input}
        onChange={onChange}
      />
      <button onClick={handleClick}>Pretraga</button>
      <MovieList movies={movies} handleMovieImgClick={handleMovieClick} />
    </div>
  );
};

export default SearchBar;
