import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Users, Code, Clock, Shield } from 'lucide-react';
import GlassCard from './Glasscard';

const RulesSection = () => {
  const rules = [
    {
      icon: Users,
      title: "Team Formation",
      points: [
        "Teams must have 2-4 members",
        "Cross-department collaboration encouraged",
        "Team formation allowed until event start",
        "Solo participation not permitted"
      ]
    },
    {
      icon: Code,
      title: "Technical Guidelines",
      points: [
        "Any programming language/framework allowed",
        "Open source libraries permitted",
        "Pre-existing code libraries allowed (must be declared)",
        "Projects must be original work created during hackathon"
      ]
    },
    {
      icon: Clock,
      title: "Time & Submission",
      points: [
        "48-hour development window strictly enforced",
        "Final submissions due March 17, 9:00 AM",
        "Late submissions will not be accepted",
        "Demo videos required (max 5 minutes)"
      ]
    },
    {
      icon: Shield,
      title: "Fair Play",
      points: [
        "No external professional help allowed",
        "Mentors available for guidance only",
        "Plagiarism will result in disqualification",
        "Code repositories must be public post-event"
      ]
    }
  ];

  const judgingCriteria = [
    { category: "Innovation & Creativity", weight: "25%", description: "Uniqueness and originality of the solution" },
    { category: "Technical Implementation", weight: "25%", description: "Code quality, architecture, and technical depth" },
    { category: "Problem Solving", weight: "20%", description: "How well the solution addresses the problem" },
    { category: "User Experience", weight: "15%", description: "Design, usability, and user interface quality" },
    { category: "Presentation", weight: "10%", description: "Quality of demo and communication" },
    { category: "Team Collaboration", weight: "5%", description: "Evidence of effective teamwork" }
  ];

  return (
    <section id="rules" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rules & <span className="text-[#1cb683]">Guidelines</span>
          </h2>
          <div className="w-24 h-1 bg-[#1cb683] mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read and understand all rules to ensure fair play and an amazing experience for everyone.
          </p>
        </motion.div>

        {/* Rules grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rules.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-8 h-8 text-[#1cb683] drop-shadow-[0_0_10px_#1cb683]" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (pointIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#1cb683] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Judging criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GlassCard className="p-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              Judging <span className="text-[#1cb683]">Criteria</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {judgingCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <div className="text-2xl font-bold text-[#1cb683] mb-2">{criteria.weight}</div>
                  <h4 className="font-semibold mb-2">{criteria.category}</h4>
                  <p className="text-sm text-gray-400">{criteria.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Important notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 border-yellow-500/20 bg-yellow-500/5">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-3 text-yellow-500">Important Reminders</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <strong>• Registration:</strong> Must be completed before March 10, 11:59 PM
                  </div>
                  <div>
                    <strong>• Attendance:</strong> Physical presence required throughout the event
                  </div>
                  <div>
                    <strong>• Resources:</strong> Internet access, power outlets, and food provided
                  </div>
                  <div>
                    <strong>• Equipment:</strong> Bring your own laptops and development tools
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;