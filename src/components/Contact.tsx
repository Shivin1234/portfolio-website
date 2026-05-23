import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivinbassi.11@gmail.com',
      href: 'mailto:shivinbassi.11@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7771926959',
      href: 'tel:+917771926959',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black">
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
              Get In Touch
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className={`p-3 bg-gradient-to-r ${info.color} bg-opacity-10 rounded-lg group-hover:scale-110 transition-transform`}>
                        <info.icon className={`text-white`} size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: '🔗', label: 'GitHub', href: 'https://github.com/Shivin1234' },
                    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivin-bassi-37327023b' },
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-sm font-medium text-white">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="relative p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 blur-2xl" />
                <div className="relative z-10">
                  <p className="text-lg font-semibold text-white mb-2">Open to Opportunities</p>
                  <p className="text-gray-400 text-sm">
                    I'm actively seeking opportunities in ML Engineering, Full Stack Development, and Data Analytics roles.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
