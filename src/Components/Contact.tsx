import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Linkedin, Clock, HelpCircle } from 'lucide-react';
import GlassCard from './Glasscard';

const ContactSection = () => {
  const organizers = [
    {
      name: "TANIYA SINGH",
      role: "Coordinator",
      email: "mike.chen@college.edu",
      phone: "+91 98765 43212",
      avatar: "TS",
      availability: "Tue-Thu, 9AM-4PM"
    },
    {
      name: "SAAHIL",
      role: "Lead Organizer",
      email: "saahil.ind.dgp@gmail.com",
      phone: "+91 94741 56798",
      avatar: "S",
      availability: "Mon-Fri, 10AM-6PM"
    },
    {
      name: "KSHITIJ RAJ",
      role: "Technical Coordinator",
      email: "sarah.kim@college.edu",
      phone: "+91 98765 43211",
      avatar: "KS",
      availability: "Mon-Wed, 1PM-8PM"
    }
    
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      url: "#", 
      color: "#E4405F",
      handle: "@ideajam2025"
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      url: "#", 
      color: "#1DA1F2",
      handle: "@ideajam_hack"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      url: "#", 
      color: "#0077B5",
      handle: "IdeaJam Hackathon"
    },
    { 
      icon: MessageCircle, 
      label: "Discord", 
      url: "#", 
      color: "#5865F2",
      handle: "ideajam.community"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "team.theuniques@sviet.ac.in",
      description: "For general inquiries and support",
      action: "Send us a message"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 94741 56798",
      description: "Call during business hours",
      action: "Call now"
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "The Uniques, C - Block",
      description: "",
      action: "Get directions"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
              opacity: 0.1
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
            Contact <span className="text-white">Us</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Need help? Our team is here to assist you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            {/* General contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 hover:shadow-[0_0_30px_-10px_rgba(28,182,131,0.3)] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-full bg-[#1cb683]/20 text-[#1cb683] group-hover:bg-[#1cb683]/30 transition-all">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-lg text-white mb-1">{method.value}</p>
                        <p className="text-sm text-gray-400 mb-2">{method.description}</p>
                        <a 
                          href={method.title === 'Email' ? `mailto:${method.value}` : 
                               method.title === 'Phone' ? `tel:${method.value.replace(/\D/g, '')}` : '#'}
                          className="inline-flex items-center text-[#1cb683] hover:text-white transition-colors duration-300 text-sm font-medium"
                        >
                          {method.action}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Social media */}
            
          </div>

          {/* Organizers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full hover:shadow-[0_0_30px_-10px_rgba(28,182,131,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">
                Meet the Organizers
              </h3>
              <div className="space-y-6">
                {organizers.map((organizer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-[#1cb683]/20 flex items-center justify-center text-[#1cb683] font-bold text-xl group-hover:bg-[#1cb683]/30 transition-all">
                          {organizer.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#1cb683] text-white text-xs px-2 py-0.5 rounded-full">
                          {index === 0 ? "Lead" : "Team"}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-[#1cb683] transition-colors duration-300">
                          {organizer.name}
                        </h4>
                        <p className="text-sm text-gray-400 mb-3">{organizer.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Link */}
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="p-6 hover:shadow-[0_0_30px_-10px_rgba(28,182,131,0.3)] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">Idea</span>
                  <span className="text-white">Jam 2025</span>
                </h3>
                <p className="text-gray-400">Innovate. Collaborate. Excel.</p>
              </div>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 10px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <social.icon 
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400">
                  © 2025 The Uniques. All rights reserved.
                </p>
                <p className="text-sm text-gray-300 font-semibold">
                  Made with <span className="text-[#1cb683]">❤️</span> by Tech Team (Uniques 3.0)
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;