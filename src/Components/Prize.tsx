import { motion } from 'framer-motion';
import { Trophy, Award, Star, Gift, Users, BookOpen, Briefcase } from 'lucide-react';
import GlassCard from './Glasscard';

const PrizesSection = () => {
  const prizes = [
    {
      rank: "1st",
      title: "Grand Prize",
      amount: "₹12,000",
      icon: Trophy,
      color: "#FFD700",
      perks: ["Cash Prize", "Certificates", "Mentorship Program", "Internship Opportunity"],
      gradient: "from-yellow-400 to-yellow-600",
      glow: "shadow-[0_0_40px_-10px_rgba(255,215,0,0.6)]"
    },
    {
      rank: "2nd",
      title: "Runner Up",
      amount: "₹8,000",
      icon: Award,
      color: "#C0C0C0",
      perks: ["Cash Prize", "Certificates", "Mentorship Program", "Recognition"],
      gradient: "from-gray-300 to-gray-500",
      glow: "shadow-[0_0_40px_-10px_rgba(192,192,192,0.6)]"
    },
    {
      rank: "3rd",
      title: "Second Runner Up",
      amount: "₹5,000",
      icon: Star,
      color: "#CD7F32",
      perks: ["Cash Prize", "Certificates", "Mentorship Program", "Goodies"],
      gradient: "from-orange-400 to-orange-600",
      glow: "shadow-[0_0_40px_-10px_rgba(205,127,50,0.6)]"
    }
  ];

  const specialPrizes = [
    {
      title: "Best Innovation",
      amount: "₹5,000",
      description: "Most creative and innovative solution",
      icon: <LightbulbIcon />
    },
    {
      title: "Best UI/UX",
      amount: "₹3,000",
      description: "Outstanding user interface and experience",
      icon: <LayoutIcon />
    },
    {
      title: "Best Use of Technology",
      amount: "₹3,000",
      description: "Excellent technical implementation",
      icon: <CpuIcon />
    },
    {
      title: "People's Choice",
      amount: "₹2,000",
      description: "Voted by participants and audience",
      icon: <HeartIcon />
    }
  ];

  const benefits = [
    {
      title: "Networking",
      description: "Connect with industry professionals and mentors",
      icon: Users
    },
    {
      title: "Learning",
      description: "Gain hands-on experience with cutting-edge technologies",
      icon: BookOpen
    },
    {
      title: "Recognition",
      description: "Showcase your skills to potential employers",
      icon: Briefcase
    }
  ];

  // Custom icon components for better control
  function LightbulbIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#1cb683] mx-auto mb-3 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    );
  }

  function LayoutIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#1cb683] mx-auto mb-3 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    );
  }

  function CpuIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#1cb683] mx-auto mb-3 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    );
  }

  function HeartIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#1cb683] mx-auto mb-3 group-hover:drop-shadow-[0_0_10px_#1cb683] transition-all duration-300">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    );
  }

  return (
    <section id="prizes" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
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
              boxShadow: '0 0 10px 2px #1cb683'
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">
            <span className='text-white'>Exciting</span> Prizes Await
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Compete for amazing prizes totaling <span className="font-semibold text-white">₹25,000+</span> plus exclusive opportunities and recognition!
          </motion.p>
        </motion.div>

        {/* Main prizes */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-20 relative"
        >
          {/* Decorative connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1cb683]/30 to-transparent -z-10" />
          
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className={index === 0 ? "md:mt-0" : index === 1 ? "md:mt-8" : "md:mt-16"}
            >
              <GlassCard className={`p-8 text-center h-full relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:${prize.glow} ${
                index === 0 ? 'border-yellow-400/30 shadow-yellow-400/20' : 
                index === 1 ? 'border-gray-400/30 shadow-gray-400/20' : 
                'border-orange-400/30 shadow-orange-400/20'
              }`}>
                {/* Animated background gradient */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Rank badge */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${prize.gradient} text-black shadow-md`}
                >
                  {prize.rank} Place
                </motion.div>

                {/* Icon with floating animation */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative z-10 mb-6"
                >
                  <prize.icon 
                    className="w-16 h-16 mx-auto"
                    style={{ color: prize.color, filter: `drop-shadow(0 0 12px ${prize.color}80)` }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {prize.title}
                </h3>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
                >
                  {prize.amount}
                </motion.div>

                {/* Perks with staggered animation */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="space-y-3"
                >
                  {prize.perks.map((perk, perkIndex) => (
                    <motion.div 
                      key={perkIndex}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'}`} />
                      <span>{perk}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Special prizes */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]"
          >
            Special <span className="text-white">Categories</span>
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
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="p-6 text-center h-full group hover:shadow-[0_0_30px_-10px_rgba(28,182,131,0.5)] transition-all duration-300">
                  {prize.icon}
                  <h4 className="text-lg font-semibold mb-2 text-white">{prize.title}</h4>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1] mb-3">
                    {prize.amount}
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {prize.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <GlassCard className="p-8 text-center backdrop-blur-lg hover:shadow-[0_0_40px_-15px_rgba(28,182,131,0.4)] transition-all duration-500">
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]"
            >
              Beyond <span className="text-white">Prizes</span>
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
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  <benefit.icon className="w-10 h-10 mx-auto mb-4 text-[#1cb683]" />
                  <h4 className="font-semibold mb-2 text-white">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            Ready to showcase your skills and win amazing prizes?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(28, 182, 131, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1cb683] to-[#4dffd1] text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const formSection = document.getElementById('registration-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;