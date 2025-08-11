import { motion, useAnimation } from 'framer-motion';
import { Code, Lightbulb, Target, Users, Sparkles, ChevronRight } from 'lucide-react';
import GlassCard from './Glasscard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Bring your wildest ideas to life with cutting-edge technology and creative problem-solving.",
      color: "text-purple-400"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Form teams of 2-4 members and work together to build something extraordinary.",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Tech Freedom",
      description: "Use any programming language, framework, or technology stack you're comfortable with.",
      color: "text-emerald-400"
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Create solutions that address real-world problems and make a meaningful difference.",
      color: "text-amber-400"
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1cb683]/20"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#1cb683] drop-shadow-[0_0_10px_rgba(28,182,131,0.5)]">IdeaJam</span>
            </h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { delay: 0.3, duration: 0.8 }
            }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8 }
            }}
          >
            IdeaJam is our college's premier internal hackathon where creativity meets technology. 
            <span className="text-[#1cb683]"> Over 48 intense hours</span>, students collaborate, innovate, and compete to build groundbreaking solutions.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1cb683]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="absolute top-4 right-4 w-5 h-5 text-[#1cb683] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="text-2xl font-semibold mb-6 text-[#1cb683] flex items-center gap-2">
                <ChevronRight className="w-5 h-5" />
                What Makes IdeaJam Special?
              </h3>
              <div className="space-y-4 text-gray-300">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  IdeaJam isn't just another hackathon – it's a <span className="text-[#1cb683] font-medium">celebration of innovation</span>, creativity, 
                  and collaborative spirit. Students from all departments come together to tackle 
                  challenging problems and create solutions that matter.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Whether you're a <span className="text-[#1cb683] font-medium">seasoned developer</span> or just starting your coding journey, 
                  IdeaJam provides the perfect platform to learn, grow, and showcase your skills 
                  alongside like-minded peers.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  With <span className="text-[#1cb683] font-medium">mentorship from industry experts</span>, workshops, and networking opportunities, 
                  participants gain valuable experience that extends far beyond the competition.
                </motion.p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full text-center group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${feature.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`} />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#1cb683]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-[#1cb683] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-[#1cb683]"
              whileHover={{ scale: 1.02 }}
            >
              Previous Edition Highlights
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "180+", label: "Participants", color: "text-purple-400" },
                { number: "45", label: "Teams", color: "text-blue-400" },
                { number: "8", label: "Problem Tracks", color: "text-emerald-400" },
                { number: "95%", label: "Completion Rate", color: "text-amber-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`}>
                    {stat.number}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -ml-2 text-xs"
                    >
                      {stat.number === "95%" && "🔥"}
                    </motion.span>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;