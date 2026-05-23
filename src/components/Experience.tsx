import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: 'Machine Learning and Data Analytics Trainee',
      company: 'NOKIA',
      period: '2025',
      type: 'Training Program',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      projectLink: 'https://github.com/Shivin1234/Capstone-Project-Network-Quality-Revenue-Optimization-Analytics',
      achievements: [
        'Built end-to-end churn prediction model with ≈72% accuracy processing 5,000+ telecom records',
        'Developed ML models (Linear Regression, Decision Tree) to identify high-risk regions',
        'Designed Looker Studio dashboard visualizing 8+ KPIs for performance monitoring',
        'Generated actionable insights for customer retention strategies'
      ]
    },
    {
      role: 'Salesforce CRM Trainee',
      company: 'TCS SmartBridge',
      period: '2025',
      type: 'Training Program',
      icon: '☁️',
      color: 'from-purple-500 to-pink-500',
      projectLink: 'https://www.salesforce.com/trailblazer/dft4vteffoo3xck04q',
      achievements: [
        'Managed and configured CRM data including leads, opportunities, and user roles',
        'Automated workflows using Process Builder and Workflow Rules',
        'Designed dashboards to track sales KPIs and customer metrics',
        'Improved operational efficiency through automation'
      ]
    },
    {
      role: 'Cisco AICTE Virtual Internship Program',
      company: 'Cloud Security',
      period: '2023',
      type: 'Virtual Internship',
      icon: '🔐',
      color: 'from-emerald-500 to-teal-500',
      projectLink: 'https://drive.google.com/file/d/11qG7qfN39UqaeWgunfQCMC39-kngG8cd/view?usp=drive_link',
      achievements: [
        'Completed training on networking fundamentals and introductory cybersecurity concepts',
        'Learned core security principles including Confidentiality, Integrity, and Availability (CIA triad)',
        'Gained exposure to common cyber threats such as phishing, malware, and social engineering attacks',
        'Explored basic network simulation concepts through Cisco Networking Academy learning modules'
      ]
    },
  ];

  const achievements = [
    {
      title: 'National CyberShield Hackathon 2025',
      description: 'Top 35 / 1149 teams - organized by MP Police, sponsored by SBI',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
      highlight: 'Featured by ETV Bharat, IBC24 Mahakaushal, and Vistaar News'
    },
    {
      title: 'LeetCode Problem Solving',
      description: 'Solved 150+ LeetCode problems demonstrating strong problem-solving skills',
      icon: '💡',
      color: 'from-green-500 to-emerald-500',
      highlight: 'Consistent practice in data structures and algorithms',
      link: 'https://leetcode.com/u/shivin-11/'
    },
    {
      title: 'Core Team Member (Sports)',
      description: 'Managed 30+ events and served as Cricket Coordinator',
      icon: '⚡',
      color: 'from-indigo-500 to-purple-500',
      highlight: 'Represented college in inter-college tournaments'
    },
  ];

  return (
    <section id="experience" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.span
              className="text-purple-400 font-semibold tracking-wider uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              My Journey
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Experience & Achievements
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12 mb-20">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-ping opacity-75" />
                  </div>

                  <div className="md:ml-24">
                    <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                      {/* Glow */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="text-4xl"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {exp.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {exp.role}
                              </h3>
                              <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                              {exp.period}
                            </span>
                            <span className="text-xs text-gray-500">{exp.type}</span>
                          </div>
                        </div>

                        {/* Project Link */}
                        {'projectLink' in exp && (
                          <motion.a
                            href={(exp as any).projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r ${exp.color} bg-opacity-10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all`}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔗 {exp.company === 'NOKIA' ? 'View Project' : exp.company === 'Cloud Security' ? 'View Certificate' : 'View Profile'}
                          </motion.a>
                        )}

                        {/* Achievements */}
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.6 + idx * 0.2 + i * 0.1 }}
                            >
                              <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements Grid */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={achievement.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + idx * 0.1 }}
                  >
                    <div className="relative h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                      {/* Glow */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                      <div className="relative z-10">
                        <motion.div
                          className="text-5xl mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {achievement.icon}
                        </motion.div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                          {achievement.description}
                        </p>
                        <p className={`text-xs font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}>
                          {achievement.highlight}
                        </p>
                        {'link' in achievement && (
                          <motion.a
                            href={(achievement as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                            whileHover={{ x: 3 }}
                          >
                            View Profile →
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
