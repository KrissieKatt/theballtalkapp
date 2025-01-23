import { Card } from "@/components/ui/card";
import { Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  plays: string;
  imageUrl: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Game Day Vibes",
    artist: "Marcus Thompson",
    plays: "125K plays",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Championship Flow",
    artist: "Sarah Williams",
    plays: "98K plays",
    imageUrl: "/placeholder.svg"
  }
];

export const TrendingTracks = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tracks.map((track) => (
        <Card key={track.id} className="bg-[#1A1B1E] border-none p-3">
          <div className="relative w-full aspect-square bg-[#2A2B2E] rounded-lg mb-3 overflow-hidden group">
            <img 
              src={track.imageUrl} 
              alt={track.title}
              className="w-full h-full object-cover"
            />
            <Button 
              size="icon"
              variant="ghost"
              className="absolute bottom-2 right-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Play className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-sm truncate">{track.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{track.plays}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};