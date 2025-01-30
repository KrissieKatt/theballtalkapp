import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BadgeCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Athlete {
  id: string;
  name: string;
  role: string;
  followers: string;
  isVerified?: boolean;
}

const athletes: Athlete[] = [
  {
    id: "1",
    name: "Marcus Thompson",
    role: "Basketball",
    followers: "1.2M",
    isVerified: true
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Soccer",
    followers: "890K",
    isVerified: true
  }
];

export const PopularAthletes = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Popular Athletes</h2>
      <div className="grid grid-cols-2 gap-4">
        {athletes.map((athlete) => (
          <Card key={athlete.id} className="p-4 bg-[#1a1b1e] border-none">
            <div className="w-full aspect-square bg-zinc-800 rounded-lg mb-3" />
            <div className="flex items-center gap-2 justify-center">
              <h3 className="font-semibold text-sm text-white">{athlete.name}</h3>
              {athlete.isVerified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Verified Athlete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
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