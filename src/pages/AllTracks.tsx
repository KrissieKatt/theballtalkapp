import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Users, BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface Track {
  id: string;
  title: string;
  artist: string;
  plays: string;
  imageUrl: string;
  isVerified?: boolean;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Game Day Vibes",
    artist: "Marcus Thompson",
    plays: "125K plays",
    imageUrl: "/placeholder.svg",
    isVerified: true
  },
  {
    id: "2",
    title: "Championship Flow",
    artist: "Sarah Williams",
    plays: "98K plays",
    imageUrl: "/placeholder.svg",
    isVerified: true
  },
  {
    id: "3",
    title: "Victory Lap",
    artist: "James Rodriguez",
    plays: "76K plays",
    imageUrl: "/placeholder.svg",
    isVerified: true
  },
  {
    id: "4",
    title: "Court Kings",
    artist: "Michael Chen",
    plays: "65K plays",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "5",
    title: "Playoff Season",
    artist: "Lisa Johnson",
    plays: "54K plays",
    imageUrl: "/placeholder.svg",
    isVerified: true
  },
  {
    id: "6",
    title: "Training Day",
    artist: "David Kim",
    plays: "43K plays",
    imageUrl: "/placeholder.svg"
  }
];

const AllTracks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">All Tracks</h1>
          <Button variant="outline" className="text-white border-white/20">
            Sort by: Popular
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Card key={track.id} className="bg-[#1A1B1E] border-none p-3">
              <div className="relative w-full aspect-square bg-[#2A2B2E] rounded-lg mb-3 overflow-hidden group">
                <img 
                  src={track.imageUrl} 
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <Button 
                  size="icon"
                  variant="ghost"
                  className="absolute bottom-2 right-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-sm truncate text-white">{track.title}</h3>
                      {track.isVerified && (
                        <BadgeCheck className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{track.plays}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Separator className="my-6 bg-white/10" />

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllTracks;