import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'OCI: Data Science Professional',
      issuer: 'Oracle',
      icon: '🎯',
      color: 'from-red-500 to-orange-500',
      link: 'https://drive.google.com/file/d/1u_VJKu3FvG-eRsUbgcokW2wN80aGbgyO/view?usp=drive_link'
    },
    {
      title: 'PCAP: Python Programming',
      issuer: 'Cisco',
      icon: '🐍',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://drive.google.com/file/d/1G_r2fZzEJDwi_jC0yZE_AaM7fk26frnv/view?usp=drive_link'
    },
    {
      title: 'CCNA: Cisco Certified Network Associate',
      issuer: 'Cisco',
      icon: '🌐',
      color: 'from-cyan-500 to-teal-500',
      link: 'https://drive.google.com/file/d/1_cz76EJAMTKQUaVCkWfSF0AJRfZeoHJM/view?usp=drive_link'
    },
    {
      title: 'Power BI Job Simulation',
      issuer: 'PwC Forage',
      icon: '📊',
      color: 'from-yellow-500 to-orange-500',
      link: 'https://drive.google.com/file/d/1D7RKLfXmivm9jsHnCsrW8ZjBMP6q60ZD/view?usp=drive_link'
    },
    {
      title: 'DSA in C++',
      issuer: 'Apna College',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      link: 'https://drive.google.com/file/d/1Cx2fOnR-_oJTKS6JUmmVHwRjlBMILMSK/view?usp=drive_link'
    },
    {
      title: 'SAP: Exploring SAP Analytics Cloud',
      issuer: 'SAP',
      icon: '☁️',
      color: 'from-indigo-500 to-purple-500',
      link: 'https://drive.google.com/file/d/1FGwPsw8yMKqqJPxBT1paZSjBYha8RF-w/view?usp=drive_link'
    },
  ];

  return (
    <section id="certifications" className="relative py-32 bg-gradient-to-b from-black via-pink-950/10 to-black">
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
              Professional Development
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Certifications
            </motion.h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.a
                key={cert.title}
                href={'link' in cert ? (cert as any).link : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="text-3xl">{cert.icon}</span>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Award size={16} className={`text-gray-500 group-hover:text-purple-400 transition-colors`} />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Badge Corner */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-400 text-lg">
              Continuously learning and expanding my skill set in ML, Data Science, and Cloud Technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
