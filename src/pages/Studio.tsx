import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle, Upload, MessageCircle, Download } from "lucide-react";
import { toast } from "sonner";

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

const Studio = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const handleDemoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      toast.success("Demo uploaded successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Tabs defaultValue="releases" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="releases">New Releases</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="upload">Upload Demo</TabsTrigger>
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
        </Tabs>
      </div>
    </div>
  );
};

export default Studio;