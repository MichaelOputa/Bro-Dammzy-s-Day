import { PartyPopper, Cake } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FinalSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('final');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${visible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
            <div className="flex justify-center items-center gap-6 mb-8">
              <PartyPopper className="w-16 h-16 text-orange-500 float-animation" />
              <Cake className="w-20 h-20 text-pink-500 pulse-animation" />
              <PartyPopper className="w-16 h-16 text-orange-500 float-animation" style={{ animationDelay: '0.5s' }} />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Wishing You Well!
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              May this special day bring you endless joy, amazing surprises, and beautiful moments.
              Here's to another year of incredible adventures and dreams coming true!
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-4xl mb-8">
              {['🎁', '🎊', '🥳', '🌟', '💝', '🎈'].map((emoji, i) => (
                <span
                  key={i}
                  className="float-animation"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <div className="text-3xl font-bold text-pink-600 mb-4">
              Make a wish and blow out the candles!
            </div>

            <div className="text-6xl animate-pulse">
              🕯️🎂🕯️
            </div>
          </div>
        </div>

        <div className={`mt-12 transition-all duration-1000 delay-500 ${visible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-2xl p-8 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-white">
              🎉 Thank you for being the best brother anyone could ask for! 🎉
            </p>
          </div>
        </div>

        <footer className="mt-16 text-white text-lg">
          <p className="opacity-90">
            Made with ❤️ for the World's Best Brother
          </p>
          <p className="mt-2 text-yellow-200">
            Happy Birthday! 🎂✨
          </p>
        </footer>
      </div>
    </section>
  );
}
