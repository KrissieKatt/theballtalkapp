import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";
import { Discovery } from "@/components/Discovery";
import { Search, User, Home, Compass, Radio, Library, Heart, MessageCircle, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MusicPost } from "@/components/MusicPost";
import { Button } from "@/components/ui/button";

const FanFeed = () => {
  const isScrollingDown = useScrollDirection();

  const posts = [
    {
      id: "1",
      athleteName: "Marcus Thompson",
      sport: "Basketball",
      songTitle: "Game Day Vibes",
      audioUrl: "/sample.mp3",
      likes: 1234,
      comments: 89,
      imageUrl: "/placeholder.svg",
      verified: true
    },
    {
      id: "2",
      athleteName: "Sarah Williams",
      sport: "Soccer",
      songTitle: "Victory Anthem",
      audioUrl: "/sample2.mp3",
      likes: 856,
      comments: 45,
      imageUrl: "/placeholder.svg",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className={`sticky top-0 bg-black/20 backdrop-blur-sm z-50 px-4 py-3 border-b border-white/10 transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}>
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ba22cb9d-1e8d-477c-b9c3-ecefdfdf7f44.png" 
              alt="The Ball Talk App" 
              className="h-8 w-auto"
            />
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
              <Input 
                placeholder="Search athletes, tracks..." 
                className="w-full bg-white/10 border-none pl-10 text-white placeholder:text-white/50"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Main Feed */}
        <main className="p-4 space-y-6">
          <Discovery />
          
          {/* Music Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <MusicPost key={post.id} post={post} />
            ))}
          </div>

          <LiveSection />
          <TrendingTracks />
          <PopularAthletes />
        </main>

        {/* Bottom Navigation */}
        <nav className={`fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 transition-transform duration-300 ${
          isScrollingDown ? "translate-y-full" : "translate-y-0"
        }`}>
          <div className="max-w-lg mx-auto flex justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90 transition-colors">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90 transition-colors">
              <Compass className="h-6 w-6" />
              <span>Discover</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90 transition-colors">
              <Radio className="h-6 w-6" />
              <span>Live</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90 transition-colors">
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