import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

export const LiveSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Live Now</h2>
      <Card className="relative aspect-video bg-zinc-900 overflow-hidden rounded-lg">
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            LIVE
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="font-semibold">Marcus Thompson</h3>
          <p className="text-sm text-gray-400">Basketball Practice Session</p>
        </div>
      </Card>
    </div>
  );
};