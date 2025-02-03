import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Mic } from "lucide-react";
import { toast } from "sonner";

export const PodcastUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically upload to your backend
    toast.success("Your podcast has been uploaded!");
    
    // Reset form
    setTitle("");
    setDescription("");
    setAudioFile(null);
    setCoverImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4">
      <div className="space-y-2">
        <Label htmlFor="title">Podcast Title</Label>
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
        <Label htmlFor="audio">Audio File</Label>
        <Input
          id="audio"
          type="file"
          accept="audio/*"
          onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
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

      <Button type="submit" className="w-full">
        <Upload className="mr-2 h-4 w-4" />
        Upload Podcast
      </Button>
    </form>
  );
};