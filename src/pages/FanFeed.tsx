import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";

const FanFeed = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 space-y-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/275f4dcf-ffe1-41e4-b44b-a13b4f71d4f3.png" 
              alt="Ball Talk" 
              className="h-8"
            />
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Search athletes, tracks..."
              className="w-full px-4 py-2 rounded-full bg-zinc-900 border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-8 h-8 bg-zinc-800 rounded-full" />
        </header>
        
        <LiveSection />
        <TrendingTracks />
        <PopularAthletes />
      </div>
    </div>
  );
};

export default FanFeed;