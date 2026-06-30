import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiShield, FiAward, FiMapPin, FiBook, FiBriefcase, FiTarget, FiUser } from 'react-icons/fi';

/* ── Animated Counter ── */
const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const steps = 60;
    const inc = end / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 28);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
};

const stats = [
  { icon: <FiCode size={24} />, value: 7,   suffix: '+', label: 'Months Experience', color: 'var(--primary)' },
  { icon: <FiCpu  size={24} />, value: 10,  suffix: '+', label: 'Projects Done',    color: 'var(--secondary)' },
  { icon: <FiShield size={24} />, value: 9, suffix: '+', label: 'Technologies',     color: 'var(--accent)' },
  { icon: <FiAward  size={24} />, value: 100, suffix: '%', label: 'Satisfaction',   color: '#10b981' },
];

const facts = [
  { icon: <FiBriefcase size={15} />, label: 'Role',       value: 'MERN Stack Developer' },
  { icon: <FiCode      size={15} />, label: 'Experience', value: '7 Months' },
  { icon: <FiBook      size={15} />, label: 'Education',  value: '11th Class Student' },
  { icon: <FiUser      size={15} />, label: 'Academy',    value: 'Logic Gigs' },
  { icon: <FiMapPin    size={15} />, label: 'Location',   value: 'Pakistan 🇵🇰' },
  { icon: <FiTarget    size={15} />, label: 'Focus',      value: 'Full Stack Dev & Future Software Eng' },
];

const techs = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Git'];

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="about-section">
      {/* Subtle bg blobs */}
      <div className="about-blob about-blob-1" aria-hidden="true" />
      <div className="about-blob about-blob-2" aria-hidden="true" />

      <div className="section-wrapper" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Know <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="section-subtitle mt-3">
            A passionate developer crafting clean, high-performance digital experiences
            with modern tools and a focus on quality.
          </p>
        </motion.div>

        {/* ── Two-Column Layout ── */}
        <div className="about-layout">

          {/* Left — Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="about-facts-col"
          >
            <div className="about-facts-card">
              {/* Card header */}
              <div className="about-facts-card-header">
                <div className="about-facts-icon-wrapper">
                  <FiCode size={20} />
                </div>
                <div>
                  <h3 className="about-facts-title">Quick Facts</h3>
                  <p className="about-facts-subtitle">Professional snapshot</p>
                </div>
              </div>

              {/* Facts list */}
              <ul className="about-facts-list">
                {facts.map((item, i) => (
                  <motion.li
                    key={i}
                    className="about-fact-row"
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                  >
                    <span className="about-fact-label">
                      <span className="about-fact-icon">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="about-fact-value">{item.value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="about-bio-col"
          >
            <h3 className="about-bio-heading">
              Passionate Full Stack Developer{' '}
              <br className="hidden lg:block"/>
              <span className="gradient-text">Building The Future</span>
            </h3>

            <p className="about-bio-para">
              I'm a Full Stack Developer focused on creating modern, responsive, and
              user-friendly web applications. Currently deepening my expertise in
              advanced software engineering and cyber security while mastering the
              MERN stack ecosystem.
            </p>

            <p className="about-bio-para">
              Dedicated to building innovative digital experiences with clean UI,
              powerful backend systems, and modern technologies. I believe in writing
              clean, maintainable code and crafting solutions that make a real impact.
            </p>

            {/* Tech Tags */}
            <div className="about-tech-label">Core Technologies</div>
            <div className="about-tags">
              {techs.map((tech, i) => (
                <motion.span
                  key={i}
                  className="about-tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.35 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="about-stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="about-stat-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <div className="about-stat-icon" style={{ color: stat.color, background: `color-mix(in srgb, ${stat.color} 12%, transparent)` }}>
                {stat.icon}
              </div>
              <div className="about-stat-number" style={{ color: stat.color }}>
                {inView && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="about-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
