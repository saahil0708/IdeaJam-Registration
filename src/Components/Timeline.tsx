import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronRight, Zap, Award, Code, Mic } from 'lucide-react';
import GlassCard from './Glasscard';
import { useRef } from 'react';

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Animate the progress bar
  const heightProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const timelineEvents = [
    {
      round: "Round 1",
      date: "March 15",
      time: "9:00 AM",
      title: "Preliminary Round",
      description: "Initial submissions and basic evaluation of projects",
      icon: Code,
      status: "highlight",
      duration: "24 hours"
    },
    {
      round: "Round 2",
      date: "March 16",
      time: "9:00 AM",
      title: "Semi-Finals",
      description: "Shortlisted teams present their progress to judges",
      icon: Mic,
      status: "highlight",
      duration: "6 hours"
    },
    {
      round: "Round 3",
      date: "March 17",
      time: "2:00 PM",
      title: "Final Presentations",
      description: "Top teams compete for the top prizes",
      icon: Award,
      status: "highlight",
      duration: "4 hours"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-[#1cb683]/10 rounded-full blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${10 + i * 20}%`,
              left: `${5 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-[#1cb683]">Timeline</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our 3-round competition structure
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical timeline line with animated progress */}
          <div className="absolute left-8 md:left-1/2 h-full w-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#1cb683]"
              style={{ height: heightProgress }}
            />
          </div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const progress = (index / (timelineEvents.length - 1)) * 100;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  {/* Timeline dot with connection line */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${event.status === 'highlight' ? 'bg-[#1cb683] shadow-[0_0_15px_#1cb683]' : 'bg-gray-400'}`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>

                  {/* Round marker for each event */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute ${isLeft ? 'left-0 md:left-1/2 md:-translate-x-24' : 'right-0 md:right-1/2 md:translate-x-24'} -top-8 z-20`}
                  >
                    <GlassCard className="px-4 py-2 inline-block">
                      <span className="text-[#1cb683] font-bold">{event.round}</span>
                    </GlassCard>
                  </motion.div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GlassCard className={`p-6 relative overflow-hidden group ${event.status === 'highlight' ? 'border border-[#1cb683]/30 shadow-lg shadow-[#1cb683]/10' : ''}`}>
                        {/* Glow effect for highlighted events */}
                        {event.status === 'highlight' && (
                          <div className="absolute inset-0 bg-[#1cb683]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}

                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <event.icon className={`w-6 h-6 ${event.status === 'highlight' ? 'text-[#1cb683]' : 'text-gray-400'}`} />
                            <div>
                              <div className="text-[#1cb683] font-semibold">{event.date}</div>
                              <div className="text-gray-400 text-sm">{event.time}</div>
                            </div>
                          </div>
                          <div className="text-xs bg-gray-800 px-2 py-1 rounded">
                            {event.duration}
                          </div>
                        </div>

                        <h3 className={`text-xl font-semibold mb-2 ${event.status === 'highlight' ? 'text-[#1cb683]' : 'text-white'}`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-300 mb-3">{event.description}</p>
                        
                        {event.status === 'highlight' && (
                          <div className="inline-flex items-center text-xs text-[#1cb683] font-semibold">
                            <ChevronRight className="w-4 h-4 mr-1" />
                            Key Round
                          </div>
                        )}
                      </GlassCard>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Main Venue",
              content: "Tech Innovation Center",
              icon: MapPin,
              highlight: "Building A, Floor 3"
            },
            {
              title: "Event Duration",
              content: "3 Days Total",
              icon: Clock,
              highlight: "March 15-17"
            },
            {
              title: "Participants",
              content: "200+ Expected",
              icon: Users,
              highlight: "Register Now!"
            }
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 group hover:border-[#1cb683]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <info.icon className="w-8 h-8 text-[#1cb683] group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300" />
                  <h4 className="font-semibold text-lg">{info.title}</h4>
                </div>
                <p className="text-gray-300 mb-2">{info.content}</p>
                <p className="text-sm text-[#1cb683] font-medium">{info.highlight}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;