import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLayout, FiCode, FiServer, FiLayers, FiSmartphone, FiDatabase } from 'react-icons/fi';

const services = [
  { icon: <FiLayout />, title: 'Web Design', desc: 'Beautiful, modern web interfaces with premium aesthetics.', color: '#6366f1' },
  { icon: <FiCode />, title: 'Frontend Development', desc: 'Responsive frontends with React.js and modern JavaScript.', color: '#8b5cf6' },
  { icon: <FiServer />, title: 'Backend APIs', desc: 'Robust RESTful APIs with Node.js and Express.js.', color: '#06b6d4' },
  { icon: <FiLayers />, title: 'Full Stack Web Apps', desc: 'End-to-end apps combining frontend and backend.', color: '#10b981' },
  { icon: <FiSmartphone />, title: 'Responsive UI/UX', desc: 'Mobile-first layouts stunning on every device.', color: '#f59e0b' },
  { icon: <FiDatabase />, title: 'MERN Stack', desc: 'Complete MERN solutions for scalable applications.', color: '#ec4899' },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="services" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)' }}>
      <div className="section-wrapper" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-14">
          <span className="section-badge">What I Offer</span>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle mt-2">Professional solutions to bring your ideas to life</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -6 }} className="service-card glass-card rounded-xl p-5 group cursor-default relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity" style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}, transparent 70%)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-white mb-4 relative z-10" style={{ background: `linear-gradient(135deg, ${s.color}dd, ${s.color})`, boxShadow: `0 4px 16px ${s.color}35` }}>{s.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed relative z-10">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
