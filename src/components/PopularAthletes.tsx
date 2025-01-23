import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

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
      <h2 className="text-xl font-bold">Popular Athletes</h2>
      <div className="grid grid-cols-2 gap-4">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="p-4 bg-[#1a1b1e] border-none">
            <div className="w-full aspect-square bg-zinc-800 rounded-lg mb-3" />
            <h3 className="font-semibold text-sm">{athlete.name}</h3>
            <p className="text-sm text-zinc-400">{athlete.role}</p>
            <div className="flex items-center gap-1 text-xs text-zinc-500 mb-3">
              <Users className="h-3 w-3" />
              <span>{athlete.followers}</span>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              size="sm"
            >
              Follow
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};