import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeaturedAthletes } from "@/components/FeaturedAthletes";
import { TrendingTracks } from "@/components/TrendingTracks";
import { GenresMoods } from "@/components/GenresMoods";
import { LiveSection } from "@/components/LiveSection";
import { PodcastSection } from "@/components/PodcastSection";
import { ProductionTools } from "@/components/ProductionTools";

const sportsCategories = [
  { name: "All", count: "1.2K" },
  { name: "Basketball", count: "1.2K" },
  { name: "Football", count: "856" },
  { name: "Soccer", count: "845" },
];

const Discovery = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Search Section */}
        <div className="relative flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search artists, tracks, podcasts, or sports..." 
              className="w-full bg-[#1A1B1E] border-none pl-10 text-primary-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Sports Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {sportsCategories.map((category) => (
            <Badge
              key={category.name}
              variant={category.name === "All" ? "default" : "secondary"}
              className={`px-4 py-1.5 ${
                category.name === "All" 
                  ? "bg-brand-blue hover:bg-brand-blue/90" 
                  : "bg-[#1A1B1E] hover:bg-[#2A2B2E]"
              }`}
            >
              {category.name} {category.count}
            </Badge>
          ))}
        </div>

        {/* Live Streaming Section */}
        <LiveSection />

        {/* Featured Athletes */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">Featured Athletes</h2>
          <FeaturedAthletes />
        </section>

        {/* Podcasts Section */}
        <PodcastSection />

        {/* Production Tools */}
        <ProductionTools />

        {/* Trending Tracks */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">Trending Tracks</h2>
          <TrendingTracks />
        </section>

        {/* Genres & Moods */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">Genres & Moods</h2>
          <GenresMoods />
        </section>
      </div>
    </div>
  );
};

export default Discovery;