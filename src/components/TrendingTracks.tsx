import { Card } from "@/components/ui/card";
import { Heart, Share2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  plays: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Game Day Vibes",
    artist: "Marcus Thompson",
    plays: "125K plays"
  },
  {
    id: "2",
    title: "Championship Flow",
    artist: "Sarah Williams",
    plays: "98K plays"
  }
];

export const TrendingTracks = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Trending Tracks</h2>
      <div className="space-y-2">
        {tracks.map((track) => (
          <Card key={track.id} className="p-4 bg-zinc-900/50 text-white hover:bg-zinc-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{track.title}</h3>
                <p className="text-sm text-zinc-400">{track.artist}</p>
                <p className="text-xs text-zinc-500">{track.plays}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="hover:bg-zinc-800/50">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-zinc-800/50">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};