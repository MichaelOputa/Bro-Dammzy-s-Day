import { useEffect, useState } from 'react';

export default function FunElements() {
  const [confetti, setConfetti] = useState<{ id: number; left: string; delay: string; duration: string; color: string }[]>([]);
  const [balloons, setBalloons] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 5}s`,
      color: ['bg-yellow-400', 'bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500'][Math.floor(Math.random() * 6)]
    }));
    setConfetti(confettiArray);

    const balloonArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${15 + Math.random() * 10}s`
    }));
    setBalloons(balloonArray);

    const sparkleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    }));
    setSparkles(sparkleArray);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {confetti.map((item) => (
          <div
            key={item.id}
            className={`absolute w-3 h-3 ${item.color} rounded-full`}
            style={{
              left: item.left,
              animation: `confettiFall ${item.duration} linear infinite`,
              animationDelay: item.delay,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="absolute text-5xl"
            style={{
              left: balloon.left,
              animation: `balloonFloat ${balloon.duration} linear infinite`,
              animationDelay: balloon.delay,
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute text-2xl"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animation: `sparkle 2s ease-in-out infinite`,
              animationDelay: sparkle.delay,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 left-4 z-0 pointer-events-none">
        <div className="text-6xl float-animation">🎂</div>
      </div>

      <div className="fixed top-20 right-8 z-0 pointer-events-none">
        <div className="text-5xl float-animation" style={{ animationDelay: '0.5s' }}>🎉</div>
      </div>
    </>
  );
}
