import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    if (query === "") return;

    const handleSearch = async () => {
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    handleSearch();
  }, [query]); // Pokreće se samo kad se "query" promijeni

  const handleClick = () => {
    setQuery(input); // Postavlja "query", što pokreće "useEffect"
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Unesite naziv filma"
        value={input}
        onChange={onChange}
      />
      <button onClick={handleClick}>Pretraga</button>
    </div>
  );
};

export default SearchBar;
