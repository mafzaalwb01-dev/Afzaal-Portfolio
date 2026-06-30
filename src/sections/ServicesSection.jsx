import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLayout, FiCode, FiServer, FiLayers, FiSmartphone, FiDatabase } from 'react-icons/fi';

const services = [
  { 
    icon: <FiLayout />, 
    title: 'Web Design', 
    desc: 'Beautiful, modern web interfaces with premium aesthetics, focusing on user experience and conversion.', 
    color: 'var(--primary)' 
  },
  { 
    icon: <FiCode />, 
    title: 'Frontend Development', 
    desc: 'Responsive, accessible, and performant frontends built with React.js and modern JavaScript ecosystem.', 
    color: 'var(--secondary)' 
  },
  { 
    icon: <FiServer />, 
    title: 'Backend APIs', 
    desc: 'Robust, secure, and scalable RESTful APIs developed with Node.js and Express.js.', 
    color: 'var(--accent)' 
  },
  { 
    icon: <FiLayers />, 
    title: 'Full Stack Web Apps', 
    desc: 'End-to-end applications seamlessly combining frontend interfaces with powerful backend systems.', 
    color: '#10b981' 
  },
  { 
    icon: <FiSmartphone />, 
    title: 'Responsive UI/UX', 
    desc: 'Mobile-first layouts ensuring your application looks stunning and functions perfectly on every device.', 
    color: '#f59e0b' 
  },
  { 
    icon: <FiDatabase />, 
    title: 'MERN Stack Solutions', 
    desc: 'Complete MERN solutions designed for scalable, high-performance, and data-intensive applications.', 
    color: '#ec4899' 
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="services-section">
      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-badge">What I Offer</span>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle mt-3">Professional digital solutions to bring your ideas to life with premium quality</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 24 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              className="service-card group relative"
            >
              {/* Radial gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `radial-gradient(circle at 100% 100%, color-mix(in srgb, ${s.color} 8%, transparent), transparent 60%)` }} 
              />
              
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white mb-5 relative z-10" 
                style={{ 
                  background: `linear-gradient(135deg, color-mix(in srgb, ${s.color} 80%, transparent), ${s.color})`, 
                  boxShadow: `0 8px 24px color-mix(in srgb, ${s.color} 40%, transparent)` 
                }}
              >
                {s.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                {s.desc}
              </p>
              
              {/* Bottom animated border line */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out" 
                style={{ background: `linear-gradient(90deg, ${s.color}, color-mix(in srgb, ${s.color} 20%, transparent))` }} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
