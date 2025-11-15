import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import PhotoSection from './components/PhotoSection';
import MessageSection from './components/MessageSection';
import FunElements from './components/FunElements';
import FinalSection from './components/FinalSection';
import './animations.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowContent(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 overflow-hidden relative">
      <div className="animated-background"></div>
      <FunElements />

      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <PhotoSection />
        <MessageSection />
        <FinalSection />
      </div>
    </div>
  );
}

export default App;
