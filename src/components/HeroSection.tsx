import { Sparkles, Gift } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const scrollToPhotos = () => {
    document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${visible ? 'fade-in-down' : 'opacity-0'}`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-yellow-300 float-animation" style={{ animationDelay: '0s' }} />
            <Gift className="w-16 h-16 text-red-400 float-animation" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-12 h-12 text-yellow-300 float-animation" style={{ animationDelay: '1s' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 glow-text">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-8 pulse-animation">
            Big Brother!
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${visible ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-2xl md:text-3xl text-white mb-12 font-light tracking-wide">
            Today is all about celebrating YOU!
          </p>

          <button
            onClick={scrollToPhotos}
            className="bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 transform transition-all duration-300 hover:shadow-pink-400/50"
          >
            Let's Celebrate 🎉
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="text-4xl float-animation"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              🎈
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
