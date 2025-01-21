import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Athlete {
  id: string;
  name: string;
  role: string;
  followers: string;
}

const athletes: Athlete[] = [
  {
    id: "1",
    name: "Marcus Thompson",
    role: "Basketball",
    followers: "85.1K"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Soccer",
    followers: "890K"
  }
];

export const PopularAthletes = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Popular Athletes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="p-4 bg-zinc-900 text-white">
            <div className="w-full aspect-square bg-zinc-800 rounded-md mb-4" />
            <h3 className="font-semibold">{athlete.name}</h3>
            <p className="text-sm text-zinc-400">{athlete.role}</p>
            <p className="text-xs text-zinc-500 mb-4">{athlete.followers} followers</p>
            <Button className="w-full" variant="secondary">
              Follow
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};