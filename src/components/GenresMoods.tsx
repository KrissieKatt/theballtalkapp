const genres = [
  { name: "Workout", color: "bg-[#FF6B6B]" },
  { name: "Pre-Game", color: "bg-[#7C5DFA]" },
  { name: "Victory", color: "bg-[#4CAF50]" },
  { name: "Focus", color: "bg-gradient-to-r from-[#DA62C4] to-[#CD5CFA]" }
];

export const GenresMoods = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {genres.map((genre) => (
        <button
          key={genre.name}
          className={`${genre.color} rounded-xl p-6 text-left hover:opacity-90 transition-opacity`}
        >
          <span className="font-semibold text-white">{genre.name}</span>
        </button>
      ))}
    </div>
  );
};