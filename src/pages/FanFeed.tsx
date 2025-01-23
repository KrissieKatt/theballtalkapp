import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";
import { Search, User, Home, Compass, Radio, Library } from "lucide-react";
import { Input } from "@/components/ui/input";

const FanFeed = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-black/90 backdrop-blur-sm z-50 px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg">BALL</span>
              <span className="text-green-500">🎙</span>
              <span className="font-bold text-lg">TALK</span>
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search athletes, tracks..." 
                className="w-full bg-zinc-900 border-none pl-10"
              />
            </div>
            <User className="h-6 w-6" />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 space-y-8">
          <LiveSection />
          <TrendingTracks />
          <PopularAthletes />
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-lg mx-auto flex justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-xs">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs">
              <Compass className="h-6 w-6" />
              <span>Discover</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs">
              <Radio className="h-6 w-6" />
              <span>Live</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs">
              <Library className="h-6 w-6" />
              <span>Library</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FanFeed;