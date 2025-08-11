import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Calendar, Users, Trophy, Zap, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/Components/UI/button';
import GlassCard from './Glasscard';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const statsRef = useRef(null);
  
  // Animated counter effect
  useEffect(() => {
    const animation = animate(count, 200, { duration: 2, delay: 1.5 });
    return animation.stop;
  }, []);

  // Floating particles
  const Particle = ({ index }: { index: number }) => {
    const size = Math.random() * 10 + 5;
    return (
      <motion.div
        className="absolute rounded-full bg-[#1cb683]/20"
        initial={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeInOut",
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <Particle key={`particle-${i}`} index={i} />
        ))}
        
        {/* Glowing blobs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`blob-${i}`}
            className="absolute w-96 h-96 bg-[#1cb683]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main title with floating effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-[#1cb683] to-white bg-clip-text text-transparent">
                Idea
              </span>
              <motion.span 
                className="text-[#1cb683]"
                animate={{
                  textShadow: [
                    "0 0 10px #1cb683",
                    "0 0 20px #1cb683",
                    "0 0 30px #1cb683",
                    "0 0 10px #1cb683",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                Jam
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Subtitle - Fixed text without typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          <div className="text-xl md:text-2xl">The Ultimate Innovation Challenge</div>
          <div className="text-[#1cb683] text-xl md:text-2xl mt-2">
            Innovation • Collaboration • Excellence
          </div>
        </motion.div>

        {/* Quick stats with scroll-triggered animations */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12"
        >
          {[
            { icon: Calendar, label: "48 Hours", value: "Duration" },
            { icon: Users, label: <motion.span>{rounded}</motion.span>, value: "Participants" },
            { icon: Trophy, label: "₹50,000", value: "Prize Pool" },
            { icon: Zap, label: "10+", value: "Themes" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <GlassCard 
                className="p-6 text-center group transition-transform duration-300 relative overflow-hidden"
                // whileHover={{ boxShadow: "0 0 20px rgba(28, 182, 131, 0.5)" }}
              >
                <div className="absolute inset-0 bg-[#1cb683] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <stat.icon className="w-8 h-8 text-[#1cb683] mx-auto mb-2 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300" />
                <div className="text-2xl font-bold text-[#1cb683]">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.value}</div>
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-[#1cb683] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="px-8 py-4 text-lg font-semibold bg-[#1cb683] hover:bg-[#16a076] shadow-lg hover:shadow-[#1cb683]/50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#1cb683] to-[#2dd4a0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-[#1cb683] text-[#1cb683] hover:bg-[#1cb683]/10 hover:shadow-[#1cb683]/30 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-[#1cb683]/5 rounded-md scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Event date badge with pulse effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 rgba(28, 182, 131, 0)",
                "0 0 20px rgba(28, 182, 131, 0.3)",
                "0 0 0 rgba(28, 182, 131, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <GlassCard className="inline-block px-6 py-3">
              <span className="text-[#1cb683] font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                March 15-17, 2025
              </span>
            </GlassCard>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="w-8 h-8 text-[#1cb683] animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;