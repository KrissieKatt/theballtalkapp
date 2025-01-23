import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";
import { Search, User, Home, Compass, Radio, Library } from "lucide-react";
import { Input } from "@/components/ui/input";

const FanFeed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-black/20 backdrop-blur-sm z-50 px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg text-white">BALL</span>
              <img 
                src="/lovable-uploads/b727a3b8-3afa-4077-84f9-9d8fc2215ca1.png" 
                alt="Ball Talk Logo" 
                className="h-6 w-6"
              />
              <span className="font-bold text-lg text-white">TALK</span>
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input 
                placeholder="Search athletes, tracks..." 
                className="w-full bg-white/10 border-none pl-10 text-white placeholder:text-white/60"
              />
            </div>
            <User className="h-6 w-6 text-white" />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 space-y-8">
          <LiveSection />
          <TrendingTracks />
          <PopularAthletes />
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-lg mx-auto flex justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-xs text-white">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white">
              <Compass className="h-6 w-6" />
              <span>Discover</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white">
              <Radio className="h-6 w-6" />
              <span>Live</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white">
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