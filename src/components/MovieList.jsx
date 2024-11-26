import React from "react";

const MovieList = ({ movies, handleMovieImgClick }) => {
  return (
    <div className="movie-list-wrapper">
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt="Poster not available"
                onClick={() => handleMovieImgClick(movie.imdbID)} // Direktan poziv
              />
              <br />
              {movie.Title} ({movie.Year})
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
