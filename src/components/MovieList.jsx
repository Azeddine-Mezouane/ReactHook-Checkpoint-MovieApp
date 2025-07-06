import React from "react";

// import { moviesData } from "./film";
import MovieCard from "./MovieCard";
export default function MovieList({ movies, onCardClick }) {
  return (
    <div className="flex flex-wrap items-center justify-center  gap-16">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          onClick={() => onCardClick(movie)}
        />
      ))}
    </div>
  );
}
