import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';
import GlassCard from './Glasscard';

const ContactSection = () => {
  const organizers = [
    {
      name: "Alex Johnson",
      role: "Lead Organizer",
      email: "alex.johnson@college.edu",
      phone: "+91 98765 43210"
    },
    {
      name: "Sarah Kim",
      role: "Technical Coordinator",
      email: "sarah.kim@college.edu",
      phone: "+91 98765 43211"
    },
    {
      name: "Mike Chen",
      role: "Registration Head",
      email: "mike.chen@college.edu",
      phone: "+91 98765 43212"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "#", color: "#E4405F" },
    { icon: Twitter, label: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "#0077B5" },
    { icon: MessageCircle, label: "Discord", url: "#", color: "#5865F2" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
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
            Contact <span className="text-[#1cb683]">Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#1cb683] mx-auto mb-6" />
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
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#1cb683]">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#1cb683]" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-400">ideajam2025@college.edu</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#1cb683]" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-400">+91 98765 43200</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-[#1cb683]" />
                    <div>
                      <div className="font-medium">Venue</div>
                      <div className="text-gray-400">
                        Main Campus, Computer Science Building<br />
                        Room 101-105, Tech University
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#1cb683]">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 group"
                    >
                      <social.icon 
                        className="w-5 h-5 transition-all duration-300"
                        style={{ color: social.color }}
                      />
                      <span className="group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Organizers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-[#1cb683]">Meet the Organizers</h3>
              <div className="space-y-6">
                {organizers.map((organizer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1cb683]/20 flex items-center justify-center text-[#1cb683] font-bold text-lg">
                        {organizer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-[#1cb683] transition-colors duration-300">
                          {organizer.name}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">{organizer.role}</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#1cb683]" />
                            <span className="text-gray-400">{organizer.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#1cb683]" />
                            <span className="text-gray-400">{organizer.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-4 rounded-lg border border-[#1cb683]/20 bg-[#1cb683]/5 text-center"
              >
                <h4 className="font-semibold mb-2 text-[#1cb683]">Quick Questions?</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Check out our comprehensive FAQ section for instant answers to common questions.
                </p>
                <a
                  href="#faq"
                  className="inline-block text-[#1cb683] hover:text-white transition-colors duration-300 font-medium"
                >
                  View FAQ →
                </a>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-[#1cb683]">Idea</span>Jam 2025
                </h3>
                <p className="text-gray-400">Innovate. Collaborate. Excel.</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">
                  © 2025 Tech University. All rights reserved.
                </p>
                <p className="text-sm text-gray-500">
                  Made with ❤️ by the IdeaJam Team
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