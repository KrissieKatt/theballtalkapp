import { Search, Filter, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const categories = [
  { name: "Basketball", count: "1.2K" },
  { name: "Football", count: "856" },
  { name: "Soccer", count: "845" },
  { name: "Baseball", count: "634" },
];

const trending = [
  { title: "Pre-Game Warmup", genre: "Workout", color: "bg-stage-blue" },
  { title: "Victory Vibes", genre: "Celebration", color: "bg-stage-green" },
  { title: "Game Day", genre: "Motivation", color: "bg-stage-yellow" },
  { title: "Training Mode", genre: "Focus", color: "bg-stage-orange" },
];

export const Discovery = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Search Section */}
      <div className="relative flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Discover athletes, tracks, or playlists..." 
            className="apple-input pl-10"
          />
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">Popular Categories</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <Badge
            variant="secondary"
            className="bg-brand-blue text-white hover:bg-brand-blue/90 px-4 py-1.5"
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant="secondary"
              className="apple-card px-4 py-1.5"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">Trending Now</h3>
        <div className="grid grid-cols-2 gap-3">
          {trending.map((item) => (
            <Card 
              key={item.title}
              className={`${item.color} p-4 hover:opacity-90 transition-opacity cursor-pointer`}
              onClick={() => toast({
                title: "Coming Soon",
                description: `${item.title} playlist will be available soon!`
              })}
            >
              <div className="space-y-1">
                <span className="text-xs font-medium text-white/80">{item.genre}</span>
                <h4 className="font-semibold text-white">{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Discover More */}
      <Button 
        variant="ghost" 
        className="w-full apple-card group"
        onClick={() => toast({
          title: "Explore More",
          description: "More discovery features coming soon!"
        })}
      >
        <Compass className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
        Discover More
      </Button>
    </div>
  );
};