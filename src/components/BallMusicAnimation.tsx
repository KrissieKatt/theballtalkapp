import React, { useState, useEffect } from 'react';
import { Volleyball, Circle, CircleDot, Target, Music2, Music3, Music4 } from 'lucide-react';

export const BallMusicAnimation = () => {
  const [currentBall, setCurrentBall] = useState(0);
  const balls = [
    { icon: Circle, label: 'Basketball' },
    { icon: Volleyball, label: 'Volleyball' },
    { icon: CircleDot, label: 'Football' },
    { icon: Target, label: 'Baseball' }
  ];
  
  const CurrentBall = balls[currentBall].icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBall((prev) => (prev + 1) % balls.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 w-32 mx-auto">
      {/* Ball */}
      <div className="absolute w-full animate-[bounce_2s_infinite] group">
        <div className="animate-[roll_4s_linear_infinite]">
          <CurrentBall className="h-12 w-12 text-white transition-all duration-300" />
        </div>
      </div>
      
      {/* Music Notes */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <div className="relative">
          <Music2 className="absolute -left-8 h-6 w-6 text-white animate-[fade-in_0.5s_ease-out_0.5s_forwards,float_3s_ease-in-out_infinite] opacity-0" />
          <Music3 className="absolute left-0 h-6 w-6 text-white animate-[fade-in_0.5s_ease-out_0.7s_forwards,float_2.5s_ease-in-out_infinite] opacity-0" />
          <Music4 className="absolute left-8 h-6 w-6 text-white animate-[fade-in_0.5s_ease-out_0.9s_forwards,float_3.5s_ease-in-out_infinite] opacity-0" />
        </div>
      </div>
    </div>
  );
};