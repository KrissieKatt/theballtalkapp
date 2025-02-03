import React, { useState, useEffect } from 'react';
import { Volleyball, Circle, CircleDot, Target, Music2, Music3, Music4, Mic } from 'lucide-react';

export const BallMusicAnimation = () => {
  const [currentBall, setCurrentBall] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(0);
  
  const balls = [
    { icon: Circle, label: 'Basketball' },
    { icon: Volleyball, label: 'Volleyball' },
    { icon: CircleDot, label: 'Football' },
    { icon: Target, label: 'Baseball' },
    { icon: Mic, label: 'Podcast' }
  ];

  const musicNotes = [Music2, Music3, Music4];

  useEffect(() => {
    const ballInterval = setInterval(() => {
      setCurrentBall((prev) => (prev + 1) % balls.length);
    }, 2000);

    const musicInterval = setInterval(() => {
      setCurrentMusic((prev) => (prev + 1) % musicNotes.length);
    }, 1000);

    return () => {
      clearInterval(ballInterval);
      clearInterval(musicInterval);
    };
  }, []);

  const CurrentBall = balls[currentBall].icon;
  const CurrentMusic = musicNotes[currentMusic];

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <div className="absolute transform transition-all duration-500 ease-in-out">
        <CurrentBall className="h-16 w-16 text-white animate-bounce" />
      </div>
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
        <CurrentMusic className="h-8 w-8 text-white animate-pulse" />
      </div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
        <CurrentMusic className="h-8 w-8 text-white animate-pulse" />
      </div>
    </div>
  );
};