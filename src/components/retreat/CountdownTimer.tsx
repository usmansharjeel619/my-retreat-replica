import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center bg-card/80 backdrop-blur-sm rounded-xl px-3 py-3 md:px-5 md:py-4 border border-primary/20 shadow-warm min-w-[70px] md:min-w-[90px]"
        >
          <span className="text-2xl md:text-4xl font-serif font-bold text-primary">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
