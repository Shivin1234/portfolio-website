import { motion } from 'framer-motion';
import { Download, ChevronDown, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const socialLinks = [
    { icon: '🔗', href: 'https://github.com/Shivin1234', label: 'GitHub' },
    { icon: '💼', href: 'https://www.linkedin.com/in/shivin-bassi-37327023b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Shivinbassi.11@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hello Animation */}
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Shivin Bassi
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="font-light">
              <span className="text-purple-400 font-semibold">ML Engineer</span> |{' '}
              <span className="text-cyan-400 font-semibold">Full Stack Developer</span> |{' '}
              <span className="text-pink-400 font-semibold">Data Analyst</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent systems and data-driven applications with cutting-edge AI/ML technologies.
            Ranked <span className="text-purple-400 font-semibold">Top 35/1149</span> at National CyberShield Hackathon 2025.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1Q8q9o909jUKaSmXENfW32dJFIwsp-d9b/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-8 justify-center items-start mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, idx) => {
              const isEmail = social.label === 'Email';
              const Component = isEmail ? motion.div : motion.a;
              const linkProps = isEmail ? {} : {
                href: social.href,
                target: "_blank",
                rel: "noopener noreferrer"
              };
              
              return (
                <Component
                  key={social.label}
                  {...linkProps}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                >
                  <motion.div
                    className={`p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full ${!isEmail ? 'hover:bg-white/10 hover:border-purple-500/50 cursor-pointer' : ''} transition-all flex items-center justify-center w-14 h-14`}
                    whileHover={!isEmail ? { scale: 1.1, y: -5 } : {}}
                  >
                    {typeof social.icon === 'string' ? (
                      <span className="text-2xl">{social.icon}</span>
                    ) : (
                      <social.icon size={24} />
                    )}
                  </motion.div>
                  <span className="text-xs text-gray-400 text-center">
                    {social.label === 'GitHub' ? 'GitHub' : social.label === 'LinkedIn' ? 'LinkedIn' : 'shivinbassi.11@gmail.com'}
                  </span>
                </Component>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="inline-flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
