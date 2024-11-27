import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };
  return (
    <div className="movie-list-wrapper">
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt="Poster not available"
                onClick={() => handleClick(movie.imdbID)}
              />
              <p>
                {movie.Title} ({movie.Year})
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nema pronađenih filmova.</p>
      )}
    </div>
  );
};

export default MovieList;
