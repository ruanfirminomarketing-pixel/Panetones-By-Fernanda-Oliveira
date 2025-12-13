import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownBar: React.FC = () => {
  // 23 minutos e 49 segundos em segundos
  const INITIAL_TIME = (23 * 60) + 49; 
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-[60] bg-holiday-dark text-white py-3 px-4 shadow-md border-b-2 border-holiday-gold">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base font-medium">
        <Clock className="w-5 h-5 text-holiday-gold animate-pulse" />
        <p className="text-center">
          Essa oferta é válida apenas em: 
          <span className="ml-2 font-mono font-bold text-holiday-gold text-lg tracking-wider">
            {formatTime(timeLeft)}
          </span>
        </p>
      </div>
    </div>
  );
};