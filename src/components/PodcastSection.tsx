import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Mic, Clock } from "lucide-react";

const podcasts = [
  {
    title: "Athlete Stories",
    host: "Marcus Thompson",
    duration: "45 min",
    imageUrl: "/placeholder.svg",
    category: "Sports"
  },
  {
    title: "Game Day Prep",
    host: "Sarah Williams",
    duration: "30 min",
    imageUrl: "/placeholder.svg",
    category: "Training"
  }
];

export const PodcastSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Featured Podcasts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {podcasts.map((podcast) => (
          <Card 
            key={podcast.title}
            className="bg-[#2A2B2E] border-none p-4 hover:bg-[#3A3B3E] transition-colors"
          >
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-[#3A3B3E] rounded-lg overflow-hidden">
                <img 
                  src={podcast.imageUrl} 
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{podcast.title}</h3>
                <div className="flex items-center gap-1 text-sm text-white/70 mt-1">
                  <Mic className="h-3 w-3" />
                  <span>{podcast.host}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-3 w-3" />
                  <span>{podcast.duration}</span>
                </div>
                <Button 
                  size="sm" 
                  className="mt-2 bg-[#4F46E5] hover:bg-[#4F46E5]/90"
                >
                  <Play className="h-3 w-3 mr-1" /> Listen Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};