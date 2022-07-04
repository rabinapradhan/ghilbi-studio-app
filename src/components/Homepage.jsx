import React from "react";

import { useState, useEffect } from "react";
import "../styles/Home.css";

import MovieCard from "./MovieCard";
const API = "https://ghibliapi.herokuapp.com/films";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((item) =>
    Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLocaleLowerCase())
    )
  );
  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async () => {
    const response = await fetch(`${API}`);
    const data = await response.json();
    setMovies(data);
  };
  return (
    <div className="app">
      <div className="header--image"></div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Movies by Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {filteredMovies.map((movie, idx) => (
            <MovieCard movie={movie} id={idx} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies Found</div>
      )}
    </div>
  );
};

export default HomePage;
