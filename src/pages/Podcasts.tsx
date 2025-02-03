import { PodcastUpload } from "@/components/PodcastUpload";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { Button } from "@/components/ui/button";
import { Plus, Mic } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data - replace with actual data from your backend
const podcasts = [
  {
    id: 1,
    title: "Game Day Prep Talk",
    artist: "John Smith",
    coverUrl: "/placeholder.svg",
    audioUrl: "#",
  },
  {
    id: 2,
    title: "Sports Psychology",
    artist: "Sarah Johnson",
    coverUrl: "/placeholder.svg",
    audioUrl: "#",
  },
];

const Podcasts = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Podcasts</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Upload Podcast
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload New Podcast</DialogTitle>
              </DialogHeader>
              <PodcastUpload />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {podcasts.map((podcast) => (
            <PodcastPlayer
              key={podcast.id}
              title={podcast.title}
              artist={podcast.artist}
              coverUrl={podcast.coverUrl}
              audioUrl={podcast.audioUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;