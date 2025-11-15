import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MessageSection() {
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullMessage = "To my amazing big brother, you've been my role model, my protector, and my best friend. Your kindness, strength, and humor inspire me every day. Thank you for all the memories we've shared and for always being there when I needed you. Today, we celebrate not just your birthday, but the incredible person you are. Here's to another year of adventures, laughter, and making unforgettable memories together. You deserve all the happiness in the world!";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('message');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullMessage.length) {
          setDisplayedText(fullMessage.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [visible, fullMessage]);

  return (
    <section id="message" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${visible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 float-animation">
              <Heart className="w-12 h-12 text-red-500 fill-red-500" />
            </div>

            <div className="absolute bottom-4 left-4 float-animation" style={{ animationDelay: '1s' }}>
              <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 mb-8 text-center">
              A Special Message
            </h2>

            <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
              <p className="min-h-[400px]">
                {displayedText}
                <span className="inline-block w-1 h-6 bg-pink-600 ml-1 animate-pulse"></span>
              </p>
            </div>

            <div className="text-right mt-8">
              <p className="text-2xl font-bold text-pink-600">
                With Love ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
