import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";
import { Search, User } from "lucide-react";

const FanFeed = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-4 space-y-8 px-4">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/275f4dcf-ffe1-41e4-b44b-a13b4f71d4f3.png" 
              alt="Ball Talk" 
              className="h-8"
            />
          </div>
          <div className="flex-1 max-w-xl mx-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="search"
              placeholder="Search athletes, tracks..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-900/50 border-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </button>
        </header>
        
        <LiveSection />
        <TrendingTracks />
        <PopularAthletes />
      </div>
    </div>
  );
};

export default FanFeed;