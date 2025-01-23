import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Play, Pause } from "lucide-react";
import { toast } from "sonner";

const BeatMarketplace = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  const beats = [
    {
      id: "1",
      title: "Summer Vibes",
      producer: "DJ Athlete",
      price: 29.99,
      genre: "Hip Hop",
      bpm: 95,
      preview: "/path/to/preview.mp3"
    },
    // Add more beats here
  ];

  const handlePlayPause = (id: string) => {
    setPlaying(playing === id ? null : id);
    toast.success("Preview started");
  };

  const handlePurchase = (id: string) => {
    toast.success("Beat added to cart!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Beat Marketplace</h1>
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
        </header>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search beats..." 
              className="apple-input pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beats.map((beat) => (
            <Card key={beat.id} className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{beat.title}</h3>
                  <p className="text-sm text-muted-foreground">{beat.producer}</p>
                </div>
                <Badge variant="secondary">${beat.price}</Badge>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline">{beat.genre}</Badge>
                <Badge variant="outline">{beat.bpm} BPM</Badge>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePlayPause(beat.id)}
                >
                  {playing === beat.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => handlePurchase(beat.id)}
                >
                  Purchase License
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeatMarketplace;