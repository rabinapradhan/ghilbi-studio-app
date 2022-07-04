import React from "react";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie, id }) => {
  // const navigate = useNavigate();
  // onClick={() => navigate("/movie/" + id)}
  return (
    <div className="movie">
      <div>
        <p>{movie.original_title}</p>
      </div>
      <div>
        <img
          src={
            movie.image !== "N/A" ? movie.image : "https://via.placeholder/400"
          }
          alt={movie.original_title}
        />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
