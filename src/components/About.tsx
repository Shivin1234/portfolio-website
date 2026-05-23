import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '150+', label: 'LeetCode Problems Solved', icon: '🧩' },
    { value: 'Top 35', label: 'Out of 1149 Teams', icon: '🏆' },
    { value: '3+', label: 'ML & AI Projects', icon: '🤖' },
    { value: '3', label: 'Industry Programs', icon: '💼' },
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
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
              Get to know me
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* About Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a <span className="text-purple-400 font-semibold">Machine Learning Engineer</span> and{' '}
                  <span className="text-cyan-400 font-semibold">Full Stack Developer</span> passionate about building
                  intelligent systems that solve real-world problems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With expertise in <span className="text-purple-400">PyTorch</span>,{' '}
                  <span className="text-cyan-400">XGBoost</span>, <span className="text-pink-400">Transformers</span>,
                  and modern web technologies like <span className="text-purple-400">React</span> and{' '}
                  <span className="text-cyan-400">FastAPI</span>, I create end-to-end data-driven applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Recently ranked <span className="text-purple-400 font-bold">Top 35 among 1,149 teams</span> at the
                  National CyberShield Hackathon 2025 for developing an NLP-based harmful-content detection platform.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I specialize in <span className="text-purple-400">Machine Learning</span>,{' '}
                  <span className="text-cyan-400">Natural Language Processing</span>,{' '}
                  <span className="text-pink-400">Data Analytics</span>, and building scalable full-stack applications.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Tech in Computer Science and Business Systems
                </h3>
                <p className="text-purple-400 font-semibold mb-2">
                  Gyan Ganga Institute Of Technology And Sciences, Jabalpur
                </p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span>2022 – 2026</span>
                  <span>•</span>
                  <span className="text-cyan-400 font-semibold">CGPA: 7.38</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
