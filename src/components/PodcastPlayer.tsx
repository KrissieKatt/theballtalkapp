import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PodcastPlayerProps {
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
}

export const PodcastPlayer = ({ title, artist, coverUrl, audioUrl }: PodcastPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <img
          src={coverUrl}
          alt={title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button onClick={togglePlay} variant="outline" size="icon">
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button variant="outline" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-32"
          />
        </div>

        <audio src={audioUrl} />
      </div>
    </Card>
  );
};