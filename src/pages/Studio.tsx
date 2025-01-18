import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle, Upload, MessageCircle, Download, Music, Plus } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FanRequestForm } from "@/components/FanRequestForm";
import { NewReleaseForm } from "@/components/NewReleaseForm";

const recentReleases = [
  {
    id: 1,
    title: "Summer Vibes",
    artist: "John Smith",
    cover: "https://picsum.photos/200",
    platforms: {
      spotify: "#",
      apple: "#",
    },
  },
  {
    id: 2,
    title: "Midnight Run",
    artist: "Sarah Jones",
    cover: "https://picsum.photos/201",
    platforms: {
      spotify: "#",
      apple: "#",
    },
  },
];

const featuredArtists = [
  {
    name: "John Smith",
    role: "Producer",
    avatar: "https://picsum.photos/202",
    bio: "Award-winning producer with 10+ years of experience",
  },
  {
    name: "Sarah Jones",
    role: "Sound Engineer",
    avatar: "https://picsum.photos/203",
    bio: "Specialist in acoustic and electronic music production",
  },
];

interface Track {
  id: string;
  title: string;
  type: 'track' | 'beat';
  bpm?: number;
  genre?: string;
  description: string;
  audioUrl: string;
  createdAt: Date;
}

const Studio = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isAddingTrack, setIsAddingTrack] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const handleDemoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      toast.success("Demo uploaded successfully!");
    }
  };

  const handleAddTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newTrack: Track = {
      id: Math.random().toString(36).substring(7),
      title: formData.get('title') as string,
      type: formData.get('type') as 'track' | 'beat',
      bpm: formData.get('bpm') ? Number(formData.get('bpm')) : undefined,
      genre: formData.get('genre') as string,
      description: formData.get('description') as string,
      audioUrl: URL.createObjectURL(formData.get('audio') as File),
      createdAt: new Date(),
    };

    setTracks([newTrack, ...tracks]);
    setIsAddingTrack(false);
    toast.success("Track added successfully!");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Tabs defaultValue="releases" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="releases">New Releases</TabsTrigger>
            <TabsTrigger value="post-release">Post Release</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="tracks">My Tracks</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="upload">Upload Demo</TabsTrigger>
            <TabsTrigger value="requests">Fan Requests</TabsTrigger>
          </TabsList>

          {/* New Releases Tab */}
          <TabsContent value="releases">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentReleases.map((release) => (
                <Card key={release.id} className="p-4">
                  <div className="aspect-square relative mb-4">
                    <img
                      src={release.cover}
                      alt={release.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute bottom-2 right-2"
                    >
                      <PlayCircle className="h-6 w-6" />
                    </Button>
                  </div>
                  <h3 className="font-semibold">{release.title}</h3>
                  <p className="text-sm text-muted-foreground">{release.artist}</p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={release.platforms.spotify} target="_blank">
                        <Download className="h-4 w-4 mr-2" />
                        Spotify
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={release.platforms.apple} target="_blank">
                        <Download className="h-4 w-4 mr-2" />
                        Apple Music
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Post Release Tab */}
          <TabsContent value="post-release">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Post New Release</h2>
              <NewReleaseForm />
            </Card>
          </TabsContent>

          {/* Artists Tab */}
          <TabsContent value="artists">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArtists.map((artist) => (
                <Card key={artist.name} className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={artist.avatar} alt={artist.name} />
                      <AvatarFallback>{artist.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {artist.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{artist.bio}</p>
                  <Button className="mt-4" variant="secondary">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tracks Tab */}
          <TabsContent value="tracks">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Tracks & Beats</h2>
                <Dialog open={isAddingTrack} onOpenChange={setIsAddingTrack}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Track
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Track</DialogTitle>
                      <DialogDescription>
                        Upload your track or beat file and add details below.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddTrack} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <select
                          id="type"
                          name="type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          required
                        >
                          <option value="track">Track</option>
                          <option value="beat">Beat</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bpm">BPM (Optional)</Label>
                          <Input
                            id="bpm"
                            name="bpm"
                            type="number"
                            min="1"
                            max="999"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="genre">Genre</Label>
                          <Input id="genre" name="genre" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audio">Audio File</Label>
                        <Input
                          id="audio"
                          name="audio"
                          type="file"
                          accept="audio/*"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Upload Track
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((track) => (
                  <Card key={track.id} className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{track.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {track.type.charAt(0).toUpperCase() + track.type.slice(1)}
                            {track.bpm && ` • ${track.bpm} BPM`}
                            {track.genre && ` • ${track.genre}`}
                          </p>
                        </div>
                        <Music className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm">{track.description}</p>
                      <audio
                        controls
                        className="w-full"
                        src={track.audioUrl}
                      >
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card className="p-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input required />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea required className="min-h-[150px]" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </Card>
          </TabsContent>

          {/* Upload Demo Tab */}
          <TabsContent value="upload">
            <Card className="p-6">
              <div className="text-center space-y-4">
                <div className="border-2 border-dashed border-muted rounded-lg p-8">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your demo file here, or click to browse
                  </p>
                  <Input
                    type="file"
                    accept="audio/*"
                    className="hidden"
                    id="demo-upload"
                    onChange={handleDemoUpload}
                  />
                  <Button asChild>
                    <label htmlFor="demo-upload">Choose File</label>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Maximum file size: 50MB. Supported formats: MP3, WAV
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Make a Request</h2>
              <FanRequestForm />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Studio;
