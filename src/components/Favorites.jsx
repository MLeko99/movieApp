import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleMovieClick = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (!favorites.length) return <p>Nema omiljenih filmova.</p>;

  return (
    <div>
      <h2>Omiljeni filmovi</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handleMovieClick(movie.imdbID)}
              style={{ cursor: "pointer", width: "100px" }}
            />
            <p>
              {movie.Title} ({movie.Year})
            </p>
            <button onClick={() => removeFromFavorites(movie.imdbID)}>
              Ukloni iz omiljenih
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
