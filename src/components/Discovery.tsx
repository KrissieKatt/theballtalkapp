import { Search, Filter, Play, Users, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { GenresMoods } from "./GenresMoods";

const categories = [
  { name: "All", count: "" },
  { name: "Basketball", count: "1.2K" },
  { name: "Football", count: "856" },
  { name: "Soccer", count: "845" },
];

const featuredAthletes = [
  {
    id: "1",
    name: "Marcus Thompson",
    sport: "Basketball",
    followers: "1.2M",
    imageUrl: "/placeholder.svg"
  }
];

const trendingTracks = [
  { 
    title: "Game Day Vibes",
    artist: "Marcus Thompson",
    plays: "125K",
    imageUrl: "/placeholder.svg"
  },
  { 
    title: "Championship Flow",
    artist: "Sarah Williams",
    plays: "98K",
    imageUrl: "/placeholder.svg"
  }
];

export const Discovery = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-[#1A1B1E] text-white p-4 space-y-8">
      {/* Search Section */}
      <div className="relative flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <Input 
            placeholder="Search artists, tracks, or sports..." 
            className="bg-[#2A2B2E] border-none pl-10 text-white placeholder:text-white/50 rounded-full"
          />
        </div>
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category, index) => (
            <Badge
              key={category.name}
              variant="secondary"
              className={`${
                index === 0 ? 'bg-[#4F46E5]' : 'bg-[#2A2B2E]'
              } hover:bg-[#4F46E5]/90 px-4 py-1.5 text-white rounded-full`}
            >
              {category.name} {category.count && `(${category.count})`}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Athletes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Athletes</h2>
        {featuredAthletes.map((athlete) => (
          <Card key={athlete.id} className="bg-[#2A2B2E] border-none p-4">
            <div className="flex gap-4">
              <div className="w-[100px] h-[100px] bg-[#3A3B3E] rounded-lg overflow-hidden">
                <img 
                  src={athlete.imageUrl} 
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{athlete.name}</h3>
                <p className="text-sm text-white/70">{athlete.sport}</p>
                <div className="flex items-center gap-1 text-sm text-white/70 mt-1">
                  <Users className="h-3 w-3" />
                  <span>{athlete.followers} followers</span>
                </div>
                <Button 
                  className="mt-3 bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white" 
                  size="sm"
                >
                  Follow
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trending Tracks */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Trending Tracks</h2>
        <div className="grid grid-cols-2 gap-4">
          {trendingTracks.map((track) => (
            <Card 
              key={track.title}
              className="bg-[#2A2B2E] border-none overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-square">
                <img 
                  src={track.imageUrl} 
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  size="icon"
                  className="absolute bottom-2 right-2 rounded-full bg-[#4F46E5] hover:bg-[#4F46E5]/90"
                >
                  <Play className="h-4 w-4 text-white" />
                </Button>
              </div>
              <div className="p-3 space-y-1">
                <h3 className="font-medium text-sm">{track.title}</h3>
                <p className="text-xs text-white/70">{track.artist}</p>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <span>{track.plays} plays</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Genres & Moods */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Genres & Moods</h2>
        <GenresMoods />
      </div>
    </div>
  );
};