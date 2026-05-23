import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Astra AI',
      subtitle: 'National CyberShield Hackathon 2025 (Top 35/1149)',
      description: 'Developed a PyTorch + Transformers based NLP model to detect anti-India campaigns across digital platforms with real-time analytics and automated content flagging.',
      tech: ['PyTorch', 'Transformers', 'FastAPI', 'SQLite', 'Gemini API', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🛡️',
      github: 'https://github.com/Nishant05Dubey/Astra-AI-Updated/tree/dev',
      live: 'https://www.etvbharat.com/hi/!bharat/jabalpur-engineering-students-made-astra-ai-app-stopps-misleading-msg-on-social-media-hindi-news-mpn25091203185',
      media: [
        { name: 'ETV Bharat', url: 'https://www.etvbharat.com/hi/!bharat/jabalpur-engineering-students-made-astra-ai-app-stopps-misleading-msg-on-social-media-hindi-news-mpn25091203185' },
        { name: 'IBC24 Mahakaushal', url: 'https://www.youtube.com/watch?v=ivAUx0gVp0U' },
        { name: 'Vistaar News', url: 'https://www.facebook.com/watch/?v=1126318382341975' }
      ],
      highlights: [
        'NLP-based harmful content detection',
        'Real-time geo-attribution analytics',
        'Integrated Gemini API for contextual analysis',
        'Featured by ETV Bharat, IBC24 & Vistaar News'
      ]
    },
    {
      title: 'NIFTY Intelligence Trading Platform',
      subtitle: 'ML-Powered Stock Market Prediction',
      description: 'Built and trained an XGBoost model on 25+ years of NIFTY data achieving ≈50% directional accuracy. Interactive simulator supporting 7 options strategies with real-time P/L tracking.',
      tech: ['XGBoost', 'FastAPI', 'React', 'Pandas', 'NumPy'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: '📈',
      github: 'https://github.com/Shivin1234/nifty-intelligence',
      live: 'https://nifty-intelligence.vercel.app/',
      highlights: [
        '50% directional accuracy (vs 33% baseline)',
        '11 custom engineered features',
        'Backtesting with confidence scoring',
        'Deployed on Render + Vercel'
      ]
    },
    {
      title: 'MedAI - Medical Image Diagnostics',
      subtitle: 'AI-Powered Healthcare Platform',
      description: 'Full-stack diagnostic platform supporting 3 imaging modalities (X-Ray, MRI, CT) with clinical context prompting. Integrated Gemini 2.5 Flash for multimodal analysis.',
      tech: ['React', 'Flask', 'Gemini API', 'SQLite', 'Python'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🏥',
      github: 'https://github.com/Shivin1234/MedAI-Diagnostics',
      live: 'https://github.com/Shivin1234/MedAI-Diagnostics',
      highlights: [
        'Multi-modal image diagnostics',
        'Clinical context-aware AI outputs',
        'Structured findings in 30 seconds',
        'Complete diagnostic audit trail'
      ]
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-black via-cyan-950/10 to-black">
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
              My Work
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.2 }}
              >
                <div className="relative grid lg:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="text-5xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/10 rounded-full text-xs text-gray-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full text-white font-semibold text-sm hover:shadow-lg transition-all`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🔗 GitHub
                        </motion.a>
                        {project.title === 'NIFTY Intelligence Trading Platform' && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                        {'media' in project && (
                          <>
                            {(project as any).media.map((mediaItem: any) => (
                              <motion.a
                                key={mediaItem.name}
                                href={mediaItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-medium text-xs hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                📺 {mediaItem.name}
                              </motion.a>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                      className={`relative w-full aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl opacity-20 blur-3xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-9xl opacity-20">{project.icon}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
