import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      color: 'from-purple-500 to-purple-600',
      skills: ['Python', 'C++'],
    },
    {
      title: 'ML / AI',
      icon: '🤖',
      color: 'from-cyan-500 to-cyan-600',
      skills: ['PyTorch', 'Scikit-learn', 'XGBoost', 'Transformers'],
    },
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      color: 'from-indigo-500 to-indigo-600',
      skills: ['FastAPI', 'Flask', 'SQLite'],
    },
    {
      title: 'Data Tools',
      icon: '📊',
      color: 'from-violet-500 to-violet-600',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Looker Studio'],
    },
    {
      title: 'Core CS',
      icon: '🧠',
      color: 'from-fuchsia-500 to-fuchsia-600',
      skills: ['DSA', 'DBMS', 'OOP', 'Operating Systems'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-black">
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
              My Expertise
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Skills & Technologies
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <div className="relative h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />

                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skill}
                          className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + idx * 0.1 + skillIdx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Tools */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-400 mb-4">Other Tools & Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'GitHub', color: 'from-purple-500 to-purple-600' },
                { name: 'Salesforce', color: 'from-cyan-500 to-cyan-600' },
                { name: 'Vercel', color: 'from-pink-500 to-pink-600' },
                { name: 'Render', color: 'from-indigo-500 to-indigo-600' }
              ].map((tool, idx) => (
                <motion.span
                  key={tool.name}
                  className={`px-4 py-2 bg-gradient-to-r ${tool.color} bg-opacity-10 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-opacity-20 hover:border-white/30 hover:text-white transition-all`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
