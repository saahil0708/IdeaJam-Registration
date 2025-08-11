import { motion } from 'framer-motion';
import { Users, Code, Clock, Shield, AlertCircle, CheckCircle, Award, Lightbulb, Presentation, Scale } from 'lucide-react';
import GlassCard from './Glasscard';

const RulesSection = () => {
  const rules = [
    {
      icon: Users,
      title: "Team Formation",
      points: [
        "Each team must consist of exactly 6 members",
        "All members must be from the same college/institution",
        "At least 1 female member is mandatory (SIH requirement)",
        "Teams must have a unique team name (avoid college names)",
        "Team registration must be completed before deadline"
      ]
    },
    {
      icon: Lightbulb,
      title: "Problem Statement",
      points: [
        "Select from provided SIH problem statements or propose Student Innovation idea",
        "Each team can submit maximum 2 ideas",
        "Problem should address real-world challenges",
        "Innovation and feasibility will be key evaluation factors",
        "Must align with SIH themes if selecting SIH track"
      ]
    },
    {
      icon: Presentation,
      title: "Submission Guidelines",
      points: [
        "Idea Presentation PDF (max 10 slides) required",
        "Must include: Problem Statement, Proposed Solution, Technology Stack",
        "Should cover: Innovation & Impact, Implementation Plan",
        "Submission via IdeaJam online portal before deadline",
        "Demo prototype (if available) earns bonus points"
      ]
    },
    {
      icon: Scale,
      title: "SIH Special Rules",
      points: [
        "Follow all official Smart India Hackathon guidelines",
        "Maintain decorum and professionalism throughout",
        "Judges' decisions will be final and binding",
        "Winning teams may represent at national level SIH",
        "All submissions must be original work"
      ]
    }
  ];

  const judgingCriteria = [
    { 
      category: "Innovation", 
      weight: "25%", 
      description: "Originality and uniqueness of the idea",
      icon: <Lightbulb className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    },
    { 
      category: "Feasibility", 
      weight: "20%", 
      description: "Practicality and scalability of the solution",
      icon: <CheckCircle className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    },
    { 
      category: "Impact", 
      weight: "20%", 
      description: "Potential to solve real-world challenges",
      icon: <Award className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    },
    { 
      category: "Technical Strength", 
      weight: "20%", 
      description: "Use of relevant tools and technologies",
      icon: <Code className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    },
    { 
      category: "Presentation", 
      weight: "10%", 
      description: "Clarity, design and communication of idea",
      icon: <Presentation className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    },
    { 
      category: "SIH Alignment", 
      weight: "5%", 
      description: "Relevance to Smart India Hackathon themes",
      icon: <Shield className="w-6 h-6 text-[#1cb683] mx-auto mb-2" />
    }
  ];

  return (
    <section id="rules" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              backgroundColor: '#1cb683',
              boxShadow: '0 0 10px 2px #1cb683',
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">
            Rules & <span className="text-white">Guidelines</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Official rules for participation in our hackathon and Smart India Hackathon (SIH) qualifiers.
          </p>
        </motion.div>

        {/* Rules grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {rules.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-6 h-full hover:shadow-[0_0_30px_-10px_rgba(28,182,131,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <section.icon className="w-10 h-10 p-2 rounded-full bg-[#1cb683]/20 text-[#1cb683]" />
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: pointIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#1cb683]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1cb683]/40 transition-all">
                        <CheckCircle className="w-4 h-4 text-[#1cb683]" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Judging criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          {/* <GlassCard className="p-8 hover:shadow-[0_0_40px_-15px_rgba(28,182,131,0.3)] transition-all duration-500">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]"
            >
              Evaluation <span className="text-white">Criteria</span>
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {judgingCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  // whileHover={{ scale: 1.03 }}
                  className="text-center p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-all"
                >
                  {criteria.icon}
                  <div className="text-2xl font-bold text-[#1cb683] mb-2">{criteria.weight}</div>
                  <h4 className="font-semibold mb-3 text-white">{criteria.category}</h4>
                  <p className="text-sm text-gray-400">{criteria.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard> */}
        </motion.div>

        {/* SIH Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <GlassCard className="p-8 border-[#1cb683]/30 hover:shadow-[0_0_40px_-15px_rgba(28,182,131,0.4)] transition-all">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-[#1cb683]/10 p-4 rounded-xl border border-[#1cb683]/20">
                  <h4 className="text-xl font-bold text-[#1cb683] mb-3">Smart India Hackathon</h4>
                  <p className="text-sm text-gray-300">
                    This event serves as a qualifier for SIH - India's largest hackathon initiative by the Government of India.
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-white mb-4">SIH Key Details</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1cb683] mt-0.5 flex-shrink-0" />
                    <span>Winners may represent at national level SIH</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1cb683] mt-0.5 flex-shrink-0" />
                    <span>Follow all official SIH rules and guidelines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1cb683] mt-0.5 flex-shrink-0" />
                    <span>Problem statements aligned with SIH themes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1cb683] mt-0.5 flex-shrink-0" />
                    <span>Special recognition for SIH-track winners</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Important notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <GlassCard className="p-6 border-yellow-500/30 bg-yellow-500/10 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-yellow-500/20 flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400 text-xl">Important Reminders</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-500 text-xs">!</span>
                    </div>
                    <span><strong>Registration:</strong> Must be completed before March 10, 11:59 PM</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-500 text-xs">!</span>
                    </div>
                    <span><strong>Attendance:</strong> Physical presence required throughout</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-500 text-xs">!</span>
                    </div>
                    <span><strong>Resources:</strong> Internet, power, and food provided</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-500 text-xs">!</span>
                    </div>
                    <span><strong>Equipment:</strong> Bring your own laptops and tools</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to participate in this exciting challenge and qualify for Smart India Hackathon?
          </p>
          <motion.button
            whileHover={{ boxShadow: "0 0 20px rgba(28, 182, 131, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1cb683] to-[#4dffd1] text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Register Your Team
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default RulesSection;