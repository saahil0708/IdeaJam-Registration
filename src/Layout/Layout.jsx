import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSection from '../Components/Hero';
import AboutSection from '../Components/About';
import TimelineSection from '../Components/Timeline';
import PrizesSection from '../Components/Prize';
import RulesSection from '../Components/Rules';
import RegistrationSection from '../Components/Registration';
import ContactSection from '../Components/Contact';
import FloatingParticles from '../Components/Particles';
import { Button } from '../Components/UI/button';
import { ArrowUp } from 'lucide-react';

function Layout() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black -z-10" />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <PrizesSection />
        <RulesSection />
        <RegistrationSection />
        <ContactSection />
      </main>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#1cb683] hover:bg-[#16a076] p-0 shadow-lg hover:shadow-[#1cb683]/20 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default Layout;