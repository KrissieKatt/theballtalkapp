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
    followers: "1.2M"
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
      <h2 className="text-xl font-bold text-white">Popular Athletes</h2>
      <div className="grid grid-cols-2 gap-4">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="p-4 bg-zinc-900/50 text-white">
            <div className="w-full aspect-square bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 mb-4">
              200 x 200
            </div>
            <h3 className="font-semibold text-white">{athlete.name}</h3>
            <p className="text-sm text-zinc-400">{athlete.role}</p>
            <p className="text-xs text-zinc-500 mb-4">Fl {athlete.followers}</p>
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
              variant="secondary"
            >
              Follow
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};