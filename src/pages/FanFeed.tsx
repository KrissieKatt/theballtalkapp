import { LiveSection } from "@/components/LiveSection";
import { TrendingTracks } from "@/components/TrendingTracks";
import { PopularAthletes } from "@/components/PopularAthletes";
import { Discovery } from "@/components/Discovery";
import { Search, User, Home, Compass, Radio, Library, Heart, MessageCircle, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MusicPost } from "@/components/MusicPost";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
          {/* Live Now Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Live Now</h2>
              <Button variant="link" className="text-white">See All</Button>
            </div>
            <p className="text-white/70 text-sm">Watch athletes perform live and interact in real-time</p>
            <LiveSection />
          </section>

          <Separator className="bg-white/10" />

          {/* Discovery Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Discover</h2>
              <Button variant="link" className="text-white">Explore</Button>
            </div>
            <p className="text-white/70 text-sm">Find new athletes and tracks based on your interests</p>
            <Discovery />
          </section>

          <Separator className="bg-white/10" />

          {/* Music Feed */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">Latest Tracks</h2>
            <p className="text-white/70 text-sm">New releases from athletes you follow</p>
            <div className="space-y-6">
              {posts.map((post) => (
                <MusicPost key={post.id} post={post} />
              ))}
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Trending Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Trending Now</h2>
              <Button variant="link" className="text-white">View All</Button>
            </div>
            <p className="text-white/70 text-sm">Most popular tracks this week</p>
            <TrendingTracks />
          </section>

          <Separator className="bg-white/10" />

          {/* Popular Athletes */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Popular Athletes</h2>
              <Button variant="link" className="text-white">See All</Button>
            </div>
            <p className="text-white/70 text-sm">Athletes making waves in music</p>
            <PopularAthletes />
          </section>
        </main>

        {/* Bottom Navigation */}
        <nav className={`fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 transition-transform duration-300 ${
          isScrollingDown ? "translate-y-full" : "translate-y-0"
        }`}>
          <div className="max-w-lg mx-auto flex justify-around py-3">
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90">
              <Home className="h-6 w-6" />
              <span>Home</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90">
              <Compass className="h-6 w-6" />
              <span>Discover</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90">
              <Radio className="h-6 w-6" />
              <span>Live</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-1 text-xs text-white hover:text-white/90">
              <Library className="h-6 w-6" />
              <span>Library</span>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FanFeed;