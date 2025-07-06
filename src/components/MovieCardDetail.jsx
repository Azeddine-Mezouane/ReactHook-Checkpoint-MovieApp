import { useEffect, useRef } from "react";

export default function MovieCardDetail({ movie, onClose }) {
  const modelRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (modelRef.current && !modelRef.current.contains(e.target)) {
      onClose();
    }
  };
  const hasImage = movie.posterURL && movie.posterURL.trim() !== "";
  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
    >
      <div
        ref={modelRef}
        className="flex rounded-2xl md:w-3xl h-[90%] max-md:flex-col overflow-hidden shadow-lg bg-white"
      >
        {/* Image ou fond coloré */}
        <div className="md:w-[50%] max-md:w-full max-md:h-[50%] relative">
          {hasImage ? (
            <img
              className="absolute z-10 object-cover w-full h-full"
              src={movie.posterURL}
              alt={movie.title}
            />
          ) : (
            <div
              className="flex items-center justify-center w-full h-full"
              style={{ backgroundColor: movie.color || "#999" }}
            >
              <h2 className="text-white text-3xl font-bold text-center px-4">
                {movie.title}
              </h2>
            </div>
          )}
          {!hasImage && <div className="absolute inset-0 bg-black/10 z-0" />}
        </div>
        <div className="p-4 flex flex-col max-md:mt-10 max-md:text-center max-md:items-center gap-4 justify-center md:w-[50%]">
          <h2 className="text-2xl font-bold text-gray-800">{movie.title}</h2>
          <p className="text-gray-600 text-sm w-[80%]">{movie.description}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 font-bold">
              {"★".repeat(movie.rating)}
            </span>
            <span className="ml-2 text-gray-500 italic text-sm">
              ({movie.rating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
