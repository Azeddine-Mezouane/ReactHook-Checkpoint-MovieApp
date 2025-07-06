export default function FilterBar({
  filterTitle,
  filterRating,
  onTitleChange,
  onRatingChange,
  onToggleForm,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      {/* Titre */}
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={filterTitle}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      {/* Rating */}
      <select
        value={filterRating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <option value={0}>Tous les ratings</option>
        <option value={5}>5 étoiles</option>
        <option value={4}>4 étoiles et +</option>
        <option value={3}>3 étoiles et +</option>
        <option value={2}>2 étoiles et +</option>
        <option value={1}>1 étoile et +</option>
      </select>

      {/* Bouton toggle form */}
      <button
        onClick={onToggleForm}
        className="w-full md:w-auto bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
      >
        Ajouter un film
      </button>
    </div>
  );
}
