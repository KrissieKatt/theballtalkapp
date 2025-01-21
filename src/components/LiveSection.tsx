import { Card } from "@/components/ui/card";
import { LiveStream } from "lucide-react";

export const LiveSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <LiveStream className="text-red-500" />
        Live Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="aspect-video bg-zinc-900 flex items-center justify-center">
          <span className="text-red-500 font-semibold">LIVE</span>
        </Card>
      </div>
    </div>
  );
};