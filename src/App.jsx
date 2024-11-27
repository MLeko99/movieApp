import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites"; // Import Favorites

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigacijski link izvan Routes */}
        <nav>
          <Link to="/">Početna</Link> |{" "}
          <Link to="/favorites">Omiljeni filmovi</Link>
        </nav>

        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
