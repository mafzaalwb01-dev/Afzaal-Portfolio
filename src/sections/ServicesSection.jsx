import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLayout, FiCode, FiServer, FiLayers, FiSmartphone, FiDatabase, FiArrowRight } from 'react-icons/fi';

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
      {/* Background blobs */}
      <div className="services-blob services-blob-1" aria-hidden="true" />
      <div className="services-blob services-blob-2" aria-hidden="true" />

      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="services-header"
        >
          <span className="section-badge">What I Offer</span>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle mt-3">Professional digital solutions to bring your ideas to life with premium quality</p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 24 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              whileHover={{ y: -6 }}
              className="service-card-new"
            >
              {/* Icon */}
              <div 
                className="service-card-icon" 
                style={{ 
                  background: `linear-gradient(135deg, color-mix(in srgb, ${s.color} 80%, transparent), ${s.color})`, 
                  boxShadow: `0 8px 24px color-mix(in srgb, ${s.color} 30%, transparent)` 
                }}
              >
                {s.icon}
              </div>
              
              {/* Content */}
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              
              {/* Learn more link */}
              <div className="service-card-link">
                <span>Learn more</span>
                <FiArrowRight size={14} />
              </div>

              {/* Hover glow */}
              <div 
                className="service-card-glow"
                style={{ background: `radial-gradient(circle at 100% 100%, color-mix(in srgb, ${s.color} 8%, transparent), transparent 60%)` }} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
