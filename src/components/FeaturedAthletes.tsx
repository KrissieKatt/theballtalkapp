import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const athletes = [
  {
    id: "1",
    name: "Marcus Thompson",
    sport: "Basketball",
    followers: "1.2M",
    imageUrl: "/placeholder.svg"
  }
];

export const FeaturedAthletes = () => {
  return (
    <div className="space-y-4">
      {athletes.map((athlete) => (
        <Card key={athlete.id} className="bg-[#1A1B1E] border-none p-4">
          <div className="flex gap-4">
            <div className="w-[100px] h-[100px] bg-[#2A2B2E] rounded-lg overflow-hidden">
              <img 
                src={athlete.imageUrl} 
                alt={athlete.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{athlete.name}</h3>
              <p className="text-sm text-muted-foreground">{athlete.sport}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Users className="h-3 w-3" />
                <span>{athlete.followers} followers</span>
              </div>
              <Button 
                className="mt-3 bg-brand-blue hover:bg-brand-blue/90" 
                size="sm"
              >
                Follow
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};