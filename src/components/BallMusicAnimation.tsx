import React from 'react';
import { Volleyball, Music2, Music3, Music4 } from 'lucide-react';

export const BallMusicAnimation = () => {
  return (
    <div className="relative h-32 w-32 mx-auto">
      {/* Ball */}
      <div className="absolute w-full animate-[bounce_2s_infinite]">
        <Volleyball className="h-8 w-8 text-white" />
      </div>
      
      {/* Music Notes */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <div className="relative">
          <Music2 className="absolute -left-8 h-4 w-4 text-white animate-[fade-in_0.5s_ease-out_0.5s_forwards,float_3s_ease-in-out_infinite] opacity-0" />
          <Music3 className="absolute left-0 h-4 w-4 text-white animate-[fade-in_0.5s_ease-out_0.7s_forwards,float_2.5s_ease-in-out_infinite] opacity-0" />
          <Music4 className="absolute left-8 h-4 w-4 text-white animate-[fade-in_0.5s_ease-out_0.9s_forwards,float_3.5s_ease-in-out_infinite] opacity-0" />
        </div>
      </div>
    </div>
  );
};