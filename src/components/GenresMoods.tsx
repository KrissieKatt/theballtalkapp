import { Card } from "@/components/ui/card";

const genres = [
  { name: "Workout", color: "bg-[#FF6B6B]" },
  { name: "Pre-Game", color: "bg-[#4F46E5]" },
  { name: "Victory", color: "bg-[#4CAF50]" },
  { name: "Focus", color: "bg-gradient-to-r from-[#DA62C4] to-[#CD5CFA]" }
];

export const GenresMoods = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {genres.map((genre) => (
        <Card
          key={genre.name}
          className={`${genre.color} border-none p-6 cursor-pointer hover:opacity-90 transition-opacity`}
        >
          <span className="font-semibold text-white">{genre.name}</span>
        </Card>
      ))}
    </div>
  );
};