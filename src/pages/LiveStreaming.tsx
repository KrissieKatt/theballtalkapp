import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Users,
  MessageCircle,
  Share2,
  Heart
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LiveStreaming = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [viewerCount, setViewerCount] = useState(1234);
  const [likes, setLikes] = useState(456);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast.success(isPlaying ? "Stream paused" : "Stream playing");
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    toast.success(isMuted ? "Audio unmuted" : "Audio muted");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
    toast.success("Thanks for the love!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Logo and Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ba22cb9d-1e8d-477c-b9c3-ecefdfdf7f44.png"
              alt="Live Stream Logo" 
              className="h-12 w-auto animate-pulse"
            />
            <h1 className="text-2xl font-bold text-white">Live Stream</h1>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-lime-500" />
            <span className="text-white">{viewerCount} watching</span>
          </div>
        </div>

        {/* Main Stream Window */}
        <Card className="aspect-video relative overflow-hidden bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/ba22cb9d-1e8d-477c-b9c3-ecefdfdf7f44.png"
              alt="Stream Preview" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Stream Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 text-lime-500" />
                  ) : (
                    <Play className="h-6 w-6 text-lime-500" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-6 w-6 text-lime-500" />
                  ) : (
                    <Volume2 className="h-6 w-6 text-lime-500" />
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleLike}
                >
                  <Heart className="h-6 w-6 text-lime-500" />
                  <span className="ml-2">{likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <MessageCircle className="h-6 w-6 text-lime-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={handleShare}
                >
                  <Share2 className="h-6 w-6 text-lime-500" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Chat Section */}
        <Card className="p-4 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col h-[300px]">
            <div className="flex-1 space-y-4 overflow-y-auto">
              {/* Chat messages would go here */}
            </div>
            <div className="mt-4 flex gap-2">
              <Input 
                placeholder="Type a message..." 
                className="bg-white/10 border-none text-white placeholder:text-white/50"
              />
              <Button className="bg-lime-500 hover:bg-lime-600">Send</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LiveStreaming;