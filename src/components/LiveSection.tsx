import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

export const LiveSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-white">
        <Video className="text-red-500" />
        Live Now
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <Card className="aspect-video bg-zinc-900/50 rounded-xl overflow-hidden relative">
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            LIVE
          </div>
          <div className="w-full h-full flex items-center justify-center text-zinc-600">
            400 x 200
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold">Marcus Thompson</p>
          </div>
        </Card>
      </div>
    </div>
  );
};