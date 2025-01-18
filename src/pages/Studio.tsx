import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Mic, Music, Share2, Save } from "lucide-react";

const Studio = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Music Studio</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="border rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Track Editor</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button>
                  <Mic className="mr-2 h-4 w-4" />
                  Record
                </Button>
                <Button variant="outline">
                  <Music className="mr-2 h-4 w-4" />
                  Add Track
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Vocal Track</span>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div className="h-24 bg-gray-200 rounded relative">
                    {/* Waveform visualization would go here */}
                  </div>
                </div>
                
                <div className="p-4 border rounded bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Beat Track</span>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div className="h-24 bg-gray-200 rounded relative">
                    {/* Waveform visualization would go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Controls</h2>
            <div className="space-y-4">
              <Button className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save Project
              </Button>
              <Button className="w-full" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;