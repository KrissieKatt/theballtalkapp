import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Play, 
  Pause, 
  BadgeCheck, 
  Bookmark, 
  Download, 
  Music 
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface MusicPostProps {
  post: {
    id: string;
    athleteName: string;
    sport: string;
    songTitle: string;
    audioUrl: string;
    likes: number;
    comments: number;
    imageUrl: string;
    verified: boolean;
    appleMusicUrl?: string;
  };
}

export const MusicPost = ({ post }: MusicPostProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast.success(isPlaying ? "Paused" : "Now playing");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from liked songs" : "Added to liked songs");
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const handleAppleMusic = () => {
    if (post.appleMusicUrl) {
      window.open(post.appleMusicUrl, '_blank');
      toast.success("Opening in Apple Music");
    } else {
      toast.error("Apple Music link not available");
    }
  };

  const handleShare = () => {
    toast.success("Share menu opened");
  };

  return (
    <Card className="bg-black/20 backdrop-blur-sm border-none overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.imageUrl} alt={post.athleteName} />
            <AvatarFallback>{post.athleteName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-white">{post.athleteName}</h3>
              {post.verified && (
                <BadgeCheck className="h-4 w-4 text-blue-500" />
              )}
            </div>
            <p className="text-sm text-white/70">{post.sport}</p>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <div className="relative aspect-square bg-gradient-to-br from-brand-blue/20 to-brand-purple/20">
        <img 
          src={post.imageUrl} 
          alt={post.songTitle}
          className="w-full h-full object-cover opacity-50"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 text-white" />
          ) : (
            <Play className="h-8 w-8 text-white ml-1" />
          )}
        </Button>
      </div>

      {/* Post Actions */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={handleLike}
          >
            <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={handleBookmark}
          >
            <Bookmark className={`h-6 w-6 ${isBookmarked ? "fill-yellow-500 text-yellow-500" : ""}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={handleAppleMusic}
          >
            <Music className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={handleShare}
          >
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{post.likes.toLocaleString()} likes</p>
          <h4 className="text-white font-medium">{post.songTitle}</h4>
          <p className="text-sm text-white/70">
            View all {post.comments} comments
          </p>
        </div>
      </div>
    </Card>
  );
};