import React, { useEffect, useState } from "react";

const MovieDetail = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (imdbID) {
      fetchMovieDetails();
    }
  }, [imdbID]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&i=${imdbID}`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Greška pri dohvaćanju detalja filma:", error);
    }
  };

  const addToFavorites = () => {
    if (typeof localStorage !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.find((movie) => movie.imdbID === movieDetails.imdbID)) {
        favorites.push(movieDetails);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Film je dodan u omiljene!");
      } else {
        alert("Film je već u omiljenima!");
      }
    } else {
      alert("LocalStorage nije dostupan!");
    }
  };

  if (!movieDetails) return <p>Učitavanje detalja...</p>;

  if (movieDetails?.Response === "False") {
    return <p>Detalji nisu dostupni za ovaj film.</p>;
  }

  return (
    <div>
      <h2>{movieDetails.Title}</h2>
      <p>
        <strong>Godina:</strong> {movieDetails.Year}
      </p>
      <p>
        <strong>Žanr:</strong> {movieDetails.Genre}
      </p>
      <p>
        <strong>Redatelj:</strong> {movieDetails.Director}
      </p>
      <p>
        <strong>Glumci:</strong> {movieDetails.Actors}
      </p>
      <p>
        <strong>Radnja:</strong> {movieDetails.Plot}
      </p>
      <button onClick={addToFavorites}>Dodaj u omiljene</button>
    </div>
  );
};

export default MovieDetail;
