import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Users, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

export const LiveSection = () => {
  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  const handleLike = () => {
    toast.success("Added to your favorites!");
  };

  return (
    <div className="space-y-4 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Live Now</h2>
        <span className="text-sm text-muted-foreground">
          <Users className="inline-block w-4 h-4 mr-1" />
          2.4k watching
        </span>
      </div>

      <Card className="relative aspect-video bg-gradient-to-br from-brand-blue to-brand-purple overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Live Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium animate-pulse">
            LIVE
          </span>
          <span className="bg-black/50 text-white px-2 py-1 rounded-md text-sm backdrop-blur-sm">
            1:23:45
          </span>
        </div>

        {/* Stream Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/50 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">Marcus Thompson</h3>
                <p className="text-sm text-gray-200">Basketball Practice Session</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleLike}
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white bg-brand-purple"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-200">
                +18 others are streaming
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Upcoming Streams */}
      <div className="grid grid-cols-2 gap-4">
        {['Training Session', 'Game Highlights'].map((title, i) => (
          <Card 
            key={i}
            className="p-4 hover:bg-accent transition-colors cursor-pointer"
            onClick={() => toast.info(`${title} starting soon!`)}
          >
            <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
              <Video className="h-8 w-8 text-muted-foreground" />
            </div>
            <h4 className="font-medium">{title}</h4>
            <p className="text-sm text-muted-foreground">Starting in 2h</p>
          </Card>
        ))}
      </div>
    </div>
  );
};