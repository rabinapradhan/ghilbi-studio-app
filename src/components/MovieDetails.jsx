import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = MovieCard[id];
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetails;
