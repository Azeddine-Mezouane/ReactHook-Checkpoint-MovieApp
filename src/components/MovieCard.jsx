import React from "react";

export default function MovieCard({ movie, onClick }) {
  const hasImage = movie.posterURL && movie.posterURL.trim() !== "";

  return (
    <div
      onClick={onClick}
      className="relative rounded-xl h-[420px] w-[310px] overflow-hidden shadow-md group"
    >
      {/* Image */}
      {hasImage ? (
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: movie.color || "#333" }}
        >
          <h3 className="text-white text-2xl font-bold text-center px-4">
            {movie.title}
          </h3>
        </div>
      )}

      {/* Dégradé noir en bas */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <h3 className="text-white text-xl font-bold px-4 pb-8">
          {movie.title}
        </h3>
      </div>
    </div>
  );
}
