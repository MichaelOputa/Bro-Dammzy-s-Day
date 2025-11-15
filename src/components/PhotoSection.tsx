import { Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PhotoSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('photos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const photos = [
    { id: 1, delay: '0s', image: '/Photo 1.jpg' },
    { id: 2, delay: '0.2s', image: '/Photo 2.jpg' },
  ];

  return (
    <section id="photos" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Birthday Celebrant
          </h2>
          <p className="text-xl text-yellow-200">
            Best Amongst Men
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`transition-all duration-1000 ${visible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: photo.delay }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl hover:scale-105 hover:rotate-2 transform transition-all duration-500 group">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center overflow-hidden relative group-hover:shadow-xl transition-shadow duration-300">
                  {photo.image ? (
                    <img src={photo.image} alt={`Memory ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <Camera className="w-16 h-16 text-pink-400 group-hover:scale-125 transition-transform duration-300" />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">
                  Photo {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
