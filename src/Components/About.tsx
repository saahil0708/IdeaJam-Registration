import { motion, useAnimation } from 'framer-motion';
import { Code, Lightbulb, Target, Users, Sparkles, ChevronRight, Award } from 'lucide-react';
import GlassCard from './Glasscard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "SIH-Themed Innovation",
      description: "Work on real-world problem statements inspired by the Smart India Hackathon.",
      color: "text-purple-400"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Form teams of 4-6 students to brainstorm, build, and present your ideas.",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Freedom to Innovate",
      description: "Use any tech stack or tools to develop your creative solutions.",
      color: "text-emerald-400"
    },
    {
      icon: Award,
      title: "Compete & Win",
      description: "Showcase your ideas across three rounds and win from a prize pool of ₹25,000.",
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

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#1cb683] drop-shadow-[0_0_10px_rgba(28,182,131,0.5)]">IdeaJam</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { delay: 0.3, duration: 0.8 }
            }}
          />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            IdeaJam is <span className="text-[#1cb683] font-medium">SIH-themed innovation challenge</span>, 
            designed to prepare students for the <span className="text-[#1cb683]">Smart India Hackathon</span>. 
            Over three competitive rounds, participants will present, pitch, and perfect their solutions to real-world problems.
          </p>
        </motion.div>

        {/* Content Grid */}
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
                Why IdeaJam 2025?
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  IdeaJam is fully aligned with <span className="text-[#1cb683] font-medium">SIH guidelines</span>, 
                  ensuring you experience the same challenge structure, judging criteria, and innovation-driven atmosphere.
                </p>
                <p>
                  It’s not just about coding — it’s about <span className="text-[#1cb683] font-medium">creativity, feasibility, and impact</span>. 
                  Your solutions must be innovative and directly aligned with official SIH problem statements.
                </p>
                <p>
                  From idea validation to final pitch, this platform will give you the experience and confidence to 
                  compete nationally in <span className="text-[#1cb683] font-medium">Smart India Hackathon</span>.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Features */}
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
      </div>
    </section>
  );
};

export default AboutSection;
