import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, Pause, SkipBack, SkipForward, 
  Mic, Music, Save, Download 
} from "lucide-react";
import { toast } from "sonner";

export const AudioWorkspace = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    toast.success(isRecording ? "Recording stopped" : "Recording started");
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSave = () => {
    toast.success("Project saved successfully!");
  };

  return (
    <div className="space-y-6 p-4 apple-card">
      {/* Track Timeline */}
      <div className="h-64 border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Drag and drop audio files or record</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="icon">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={handlePlayPause}
        >
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

      {/* Tools */}
      <div className="flex gap-4">
        <Button 
          variant={isRecording ? "destructive" : "outline"}
          onClick={handleRecord}
        >
          <Mic className="mr-2 h-4 w-4" />
          {isRecording ? "Stop Recording" : "Record"}
        </Button>
        <Button variant="outline">
          <Music className="mr-2 h-4 w-4" />
          Add Track
        </Button>
        <Button variant="outline" onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Mixer */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Master Volume</label>
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Bass</label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Treble</label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
};