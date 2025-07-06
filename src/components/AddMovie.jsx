import { useState } from "react";

export default function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Le titre et la description sont obligatoires.");
      return;
    }

    // Si pas d'image, générer une couleur aléatoire

    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };

    onAdd(newMovie);

    // Réinitialiser le formulaire
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 shadow-md mb-8 grid gap-4 max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Ajouter un nouveau film
      </h2>

      <input
        type="text"
        placeholder="Titre du film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 resize-none"
        rows="3"
      />

      <input
        type="text"
        placeholder="Lien de l’image (optionnel)"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2"
      />

      <label className="text-sm text-gray-600">
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="ml-2 border border-gray-300 rounded px-3 py-1"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} ★
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="bg-amber-500 text-white font-semibold py-2 px-4 rounded hover:bg-amber-600 transition"
      >
        Ajouter le film
      </button>
    </form>
  );
}
