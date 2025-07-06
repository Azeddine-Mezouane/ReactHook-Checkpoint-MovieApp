import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import MovieList from "./components/MovieList";
import { moviesData } from "./film";
import MovieCardDetail from "./components/MovieCardDetail";
import AddMovie from "./components/AddMovie";

function App() {
  //movie list
  // const movie = [...moviesData];
  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem("movies");
    return stored ? JSON.parse(stored) : [...moviesData];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  //add Form
  const [showAddForm, setShowAddForm] = useState(false);

  //pop-up
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  //filter
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  // Filtrage
  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchRating = movie.rating >= filterRating;
    return matchTitle && matchRating;
  });

  // Ouvrir le pop-up ( une fiche détaillée du film)
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowDetail(true);
  };

  // Fermer la pop-up
  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedMovie(null);
  };

  const handleAddMovie = (newMovie) => {
    const isPosterMissing =
      !newMovie.posterURL || newMovie.posterURL.trim() === "";

    const movieToAdd = {
      ...newMovie,
      posterURL: isPosterMissing ? "" : newMovie.posterURL,
      color: isPosterMissing
        ? `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`
        : null,
    };

    setMovies((prevMovies) => [movieToAdd, ...prevMovies]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">My Movie List</h1>

      <FilterBar
        filterTitle={filterTitle}
        filterRating={filterRating}
        onTitleChange={setFilterTitle}
        onRatingChange={setFilterRating}
        onToggleForm={() => setShowAddForm(!showAddForm)}
      />
      {showAddForm && <AddMovie onAdd={handleAddMovie} />}

      {/* Liste des films */}
      <MovieList movies={filteredMovies} onCardClick={handleCardClick} />

      {/* Modale de détail */}
      {showDetail && selectedMovie && (
        <MovieCardDetail movie={selectedMovie} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
