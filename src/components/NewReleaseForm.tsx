import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const NewReleaseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [appleLink, setAppleLink] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically upload to your backend
    toast.success("Your new release has been posted!");
    
    // Reset form
    setTitle("");
    setDescription("");
    setSpotifyLink("");
    setAppleLink("");
    setCoverImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Track Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover">Cover Image</Label>
        <Input
          id="cover"
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="spotify">Spotify Link</Label>
        <Input
          id="spotify"
          value={spotifyLink}
          onChange={(e) => setSpotifyLink(e.target.value)}
          placeholder="https://open.spotify.com/..."
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="apple">Apple Music Link</Label>
        <Input
          id="apple"
          value={appleLink}
          onChange={(e) => setAppleLink(e.target.value)}
          placeholder="https://music.apple.com/..."
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Post New Release
      </Button>
    </form>
  );
};