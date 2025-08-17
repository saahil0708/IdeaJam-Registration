"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, MapPin, Users, ChevronRight, Award, Code, Mic } from "lucide-react"
import GlassCard from "./Glasscard"
import { useRef } from "react"

const TimelineSection = () => {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })

  // Animate the progress bar
  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const timelineEvents = [
    {
      round: "Round 1",
      date: "--/--",
      time: "9:00 AM",
      title: "Preliminary Round",
      description: "Initial submissions and basic evaluation of projects",
      icon: Code,
      status: "highlight",
    },
    {
      round: "Round 2",
      date: "--/--",
      time: "9:00 AM",
      title: "Semi-Finals",
      description: "Shortlisted teams present their progress to judges",
      icon: Mic,
      status: "highlight",
    },
    {
      round: "Round 3",
      date: "--/--",
      time: "2:00 PM",
      title: "Final Presentations",
      description: "Top teams compete for the top prizes",
      icon: Award,
      status: "highlight",
    },
  ]

  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#1cb683]/10 rounded-full blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Event <span className="text-[#1cb683]">Timeline</span>
          </h2>
          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">Our 3-round competition structure</p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical timeline line with animated progress */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 h-full w-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div className="absolute top-0 left-0 w-full bg-[#1cb683]" style={{ height: heightProgress }} />
          </div>

          {/* Timeline events */}
          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${event.status === "highlight" ? "bg-[#1cb683] shadow-[0_0_15px_#1cb683]" : "bg-gray-400"}`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  {/* Round marker for each event */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4 lg:mb-6"
                  >
                    <div className={`flex ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                      <GlassCard className="px-3 py-1 sm:px-4 sm:py-2 inline-block ml-16 lg:ml-0">
                        <span className="text-[#1cb683] font-bold text-sm sm:text-base">{event.round}</span>
                      </GlassCard>
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div className={`lg:flex ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                    <div className="w-[calc(100%-5rem)] ml-16 lg:ml-0 lg:w-5/12 lg:max-w-md pr-4 lg:pr-0">
                      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                        <GlassCard
                          className={`p-4 sm:p-6 relative overflow-hidden group ${event.status === "highlight" ? "border border-[#1cb683]/30 shadow-lg shadow-[#1cb683]/10" : ""}`}
                        >
                          {/* Glow effect for highlighted events */}
                          {event.status === "highlight" && (
                            <div className="absolute inset-0 bg-[#1cb683]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}

                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <event.icon
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${event.status === "highlight" ? "text-[#1cb683]" : "text-gray-400"}`}
                              />
                              <div>
                                <div className="text-[#1cb683] font-semibold text-sm sm:text-base">{event.date}</div>
                                <div className="text-gray-400 text-xs sm:text-sm">{event.time}</div>
                              </div>
                            </div>
                          </div>

                          <h3
                            className={`text-lg sm:text-xl font-semibold mb-2 ${event.status === "highlight" ? "text-[#1cb683]" : "text-white"}`}
                          >
                            {event.title}
                          </h3>
                          <p className="text-gray-300 mb-3 text-sm sm:text-base">{event.description}</p>

                          {event.status === "highlight" && (
                            <div className="inline-flex items-center text-xs text-[#1cb683] font-semibold">
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Key Round
                            </div>
                          )}
                        </GlassCard>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Quick info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              title: "Main Venue",
              content: "C-Block",
              icon: MapPin,
              highlight: "U-Zone",
            },
            {
              title: "Event Duration",
              content: "3 Days Total",
              icon: Clock,
              highlight: "2-5 September, 2024",
            },
            {
              title: "Participants",
              content: "200+ Expected",
              icon: Users,
              highlight: "Register Now!",
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-4 sm:p-6 group hover:border-[#1cb683]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#1cb683] group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300" />
                  <h4 className="font-semibold text-base sm:text-lg">{info.title}</h4>
                </div>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">{info.content}</p>
                <p className="text-xs sm:text-sm text-[#1cb683] font-medium">{info.highlight}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection
