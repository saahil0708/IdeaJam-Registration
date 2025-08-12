import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Calendar, Users, Trophy, Zap, ChevronDown, Sparkles, Award } from 'lucide-react';
import GlassCard from './Glasscard';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const statsRef = useRef(null);

  // Animated counter for top teams
  useEffect(() => {
    const animation = animate(count, 25, { duration: 2, delay: 1.5 });
    return animation.stop;
  }, []);

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
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={`particle-${i}`} index={i} />
        ))}
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#1cb683] to-white bg-clip-text text-transparent">
              Ideajam
            </span>
            <motion.span
              className="text-[#1cb683] ml-3"
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
              2025
            </motion.span>
          </h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          <div>From a spark of thought to a wave of change</div>
          <div className="text-[#1cb683] mt-2">
            Innovate • Collaborate • Excel
          </div>
        </motion.div>

        {/* Interactive content: Prize Pool Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-6 justify-center mb-10"
        >
          {/* {[
            { place: "1st Prize", amount: "₹12,000" },
            { place: "2nd Prize", amount: "₹8,000" },
            { place: "3rd Prize", amount: "₹5,000" },
          ].map((prize, idx) => (
            <GlassCard
              key={idx}
              className="px-6 py-4 w-40 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <Award className="w-6 h-6 mx-auto mb-2 text-[#1cb683] group-hover:scale-125 transition-transform duration-300" />
              <div className="font-bold text-[#1cb683]">{prize.place}</div>
              <div className="text-gray-300">{prize.amount}</div>
            </GlassCard>
          ))} */}
        </motion.div>

        {/* Quick stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12"
        >
          {[
            { icon: Trophy, label: "₹25,000", value: "Prize Pool" },
            { icon: Users, label: <motion.span>{rounded}</motion.span>, value: "Top Teams" },
            { icon: Zap, label: "3", value: "Rounds" },
            { icon: Calendar, label: "SIH Theme", value: "Aligned" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <GlassCard className="p-6 text-center group transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1cb683] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <stat.icon className="w-8 h-8 text-[#1cb683] mx-auto mb-2 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300" />
                <div className="text-2xl font-bold text-[#1cb683]">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.value}</div>
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-[#1cb683] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge WITHOUT date */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <GlassCard className="inline-block px-6 py-3">
            <span className="text-[#1cb683] font-semibold flex items-center gap-2">
              -- / -- / ----
            </span>
          </GlassCard>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#1cb683] animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
