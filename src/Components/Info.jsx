<motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl overflow-hidden"
        >
          <div className="relative h-full">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1cb683] rounded-full opacity-10 blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#1cb683] rounded-full opacity-5 blur-lg"></div>

            <div className="relative z-10">
              {/* Header with animated underline */}
              {/* Extraordinary Header Section */}
              <div className="mb-10 relative overflow-hidden">
                {/* Animated floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                  className="absolute -top-10 -right-10 w-24 h-24 bg-[#1cb683] rounded-full opacity-10 blur-xl"
                />

                {/* Main header with particle effect */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] via-[#4fd1c5] to-[#1cb683] animate-gradient-x">
                      About IdeaJam 2.0
                    </h2>

                    {/* Animated floating icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'mirror'
                      }}
                      className="hidden md:block p-3 bg-[#1cb683] bg-opacity-20 rounded-xl"
                    >
                      <FiAward className="text-2xl text-[#1cb683]" />
                    </motion.div>
                  </div>

                  {/* Particle text effect */}
                  <div className="relative">
                    <p className="text-gray-300 text-lg mb-6 font-light">
                      Where innovation meets opportunity
                    </p>

                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#1cb683]"
                        style={{
                          width: Math.random() * 6 + 2 + 'px',
                          height: Math.random() * 6 + 2 + 'px',
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 20 + 'px',
                          opacity: Math.random() * 0.4 + 0.1
                        }}
                        animate={{
                          y: [0, (Math.random() - 0.5) * 40],
                          x: [0, (Math.random() - 0.5) * 30],
                        }}
                        transition={{
                          duration: Math.random() * 10 + 5,
                          repeat: Infinity,
                          repeatType: 'mirror',
                        }}
                      />
                    ))}
                  </div>

                  {/* Glowing divider */}
                  <div className="relative h-px w-full my-6 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-[#1cb683] opacity-20 blur-sm"></div>
                  </div>

                  {/* Interactive floating card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 border border-[#1cb683] border-opacity-30 shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 p-3 bg-[#1cb683] bg-opacity-20 rounded-xl">
                        <FiInfo className="text-2xl text-[#1cb683]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Pro Tip</h3>
                        <p className="text-gray-300">
                          Teams with complete submissions (including PPT) get <span className="text-[#1cb683] font-medium">priority evaluation</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Timeline Section */}
              {/* Enhanced Timeline Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#1cb683] bg-opacity-20 rounded-xl mr-4">
                    <FiClock className="text-2xl text-[#1cb683]" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4fd1c5]">
                    Event Timeline
                  </h3>
                </div>

                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[22px] top-0 h-full w-1 bg-gradient-to-b from-[#1cb683] via-[#1cb683] to-transparent opacity-30"></div>

                  {[
                    {
                      title: "Registration Open",
                      date: "Aug 1 - 20",
                      status: "current",
                      icon: <FiUser className="text-white" />,
                      desc: "Secure your team's spot in the competition"
                    },
                    {
                      title: "Idea Submission",
                      date: "Aug 25",
                      status: "upcoming",
                      icon: <FiUpload className="text-white" />,
                      desc: "Submit your innovative idea documentation"
                    },
                    {
                      title: "Prototype Development",
                      date: "Sep 1-10",
                      status: "upcoming",
                      icon: <FiBriefcase className="text-white" />,
                      desc: "Build your prototype with mentor support"
                    },
                    {
                      title: "Final Pitch",
                      date: "Sep 25",
                      status: "upcoming",
                      icon: <FiAward className="text-white" />,
                      desc: "Present to industry expert judges"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative pl-12 pb-8 ${index === 3 ? 'pb-2' : ''}`}
                    >
                      {/* Timeline dot */}
                      <div className={`
          absolute left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center
          ${item.status === 'current' ?
                          'bg-[#1cb683] ring-4 ring-[#1cb683] ring-opacity-30' :
                          'bg-gray-600 border-2 border-[#1cb683]'}
          transform -translate-x-1/2
        `}>
                        {item.icon}
                      </div>

                      {/* Content card */}
                      <div className={`
          bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5
          border ${item.status === 'current' ? 'border-[#1cb683]' : 'border-gray-700'}
          shadow-lg hover:shadow-xl transition-all duration-300
        `}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className={`text-lg font-bold ${item.status === 'current' ? 'text-[#1cb683]' : 'text-white'}`}>
                              {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                          </div>
                          <span className={`
              px-3 py-1 rounded-full text-xs font-medium
              ${item.status === 'current' ?
                              'bg-[#1cb683] bg-opacity-20 text-[#1cb683]' :
                              'bg-gray-700 text-gray-300'}
            `}>
                            {item.date}
                          </span>
                        </div>

                        {item.status === 'current' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                            className="mt-3 h-1 bg-gradient-to-r from-[#1cb683] to-transparent rounded-full"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Prize Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#1cb683] bg-opacity-20 rounded-lg mr-3">
                    <FiDollarSign className="text-xl text-[#1cb683]" />
                  </div>
                  <h3 className="text-xl font-semibold">Prizes & Benefits</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1st Prize",
                      value: "$5,000",
                      perks: ["Incubation Support", "Mentorship", "Certificates"],
                      color: "from-amber-500 to-amber-600"
                    },
                    {
                      title: "2nd Prize",
                      value: "$3,000",
                      perks: ["Incubation Support", "Networking"],
                      color: "from-gray-500 to-gray-600"
                    },
                    {
                      title: "3rd Prize",
                      value: "$2,000",
                      perks: ["Networking", "Certificates"],
                      color: "from-amber-700 to-amber-800"
                    },
                    {
                      title: "All Participants",
                      value: "Certificates",
                      perks: ["Networking", "Workshops"],
                      color: "from-[#1cb683] to-[#1cb683]"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`bg-gradient-to-br ${item.color} rounded-xl p-4 shadow-lg`}
                    >
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-2xl font-bold mb-2">{item.value}</p>
                      <ul className="space-y-1 text-sm">
                        {item.perks.map((perk, i) => (
                          <li key={i} className="flex items-center">
                            <FiPlus className="mr-1 text-xs" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#1cb683] bg-opacity-20 rounded-lg mr-3">
                    <FiShield className="text-xl text-[#1cb683]" />
                  </div>
                  <h3 className="text-xl font-semibold">Submission Requirements</h3>
                </div>

                <div className="bg-gray-700 bg-opacity-40 rounded-xl p-4 border border-[#1cb683] border-opacity-30">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-[#1cb683] rounded-full p-1 mr-3 mt-0.5">
                        <FiLink className="text-xs" />
                      </div>
                      <span>PPT/PDF submission (optional but recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#1cb683] rounded-full p-1 mr-3 mt-0.5">
                        <FiUser className="text-xs" />
                      </div>
                      <span>Team size: 1-4 members</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#1cb683] rounded-full p-1 mr-3 mt-0.5">
                        <FiInfo className="text-xs" />
                      </div>
                      <span>Original ideas only - plagiarism will be disqualified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>