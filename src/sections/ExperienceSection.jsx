import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBookOpen, FiShield, FiStar, FiCode, FiGlobe, FiAward } from 'react-icons/fi';

/* ── Data ─────────────────────────────────────────── */
const experience = [
  {
    icon: <FiBriefcase />,
    title: 'Full Stack Developer',
    subtitle: 'Freelance & Independent Projects',
    desc: 'Building production-ready web applications with the MERN stack — from architecture to deployment.',
    period: '2024 – Present',
    color: 'var(--primary)',
  },
  {
    icon: <FiCode />,
    title: 'Frontend Developer Intern',
    subtitle: 'Logic Gigs',
    desc: 'Created responsive, pixel-perfect UIs and collaborated on building robust RESTful APIs.',
    period: '2023',
    color: 'var(--accent)',
  },
  {
    icon: <FiGlobe />,
    title: 'Web Developer',
    subtitle: 'Personal Projects',
    desc: 'Mobile-first, cross-device designs with smooth animations and accessibility best-practices.',
    period: '2022 – 2023',
    color: '#10b981',
  },
];

const education = [
  {
    icon: <FiBookOpen />,
    title: 'Future Software Engineering',
    subtitle: '11th Class Student',
    desc: 'Currently in 11th class while building real-world projects and growing as a software engineer.',
    period: '2024 - Present',
    color: '#f59e0b',
  },
  {
    icon: <FiAward />,
    title: 'Advanced Web Development',
    subtitle: 'Logic Gigs Academy',
    desc: 'Intensive training in modern frameworks, MERN stack, and programming principles.',
    period: '2023',
    color: 'var(--secondary)',
  },
  {
    icon: <FiShield />,
    title: 'Cyber Security Fundamentals',
    subtitle: 'Self-Taught & Certifications',
    desc: 'Expanding knowledge in security fundamentals, ethical hacking and network protection.',
    period: 'Ongoing',
    color: '#ec4899',
  },
];

/* ── Card Component ──────────────────────────────────── */
const TimelineCard = ({ item, index, inView }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    className="exp-timeline-card"
  >
    {/* Icon */}
    <div 
      className="exp-timeline-icon" 
      style={{ 
        background: `linear-gradient(135deg, color-mix(in srgb, ${item.color} 80%, transparent), ${item.color})`,
        boxShadow: `0 4px 16px color-mix(in srgb, ${item.color} 30%, transparent)`
      }}
    >
      {item.icon}
    </div>

    {/* Content */}
    <div className="exp-timeline-content">
      <div className="exp-timeline-header">
        <div>
          <h4 className="exp-timeline-title">{item.title}</h4>
          <span className="exp-timeline-subtitle">{item.subtitle}</span>
        </div>
        {item.period && (
          <span
            className="exp-timeline-period"
            style={{ color: item.color, backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)` }}
          >
            {item.period}
          </span>
        )}
      </div>
      <p className="exp-timeline-desc">{item.desc}</p>
    </div>

    {/* Hover glow */}
    <div 
      className="exp-timeline-glow"
      style={{ background: `radial-gradient(circle at 0% 0%, color-mix(in srgb, ${item.color} 6%, transparent), transparent 70%)` }}
    />
  </motion.div>
);

/* ── Section ──────────────────────────────────────── */
const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="exp-section">
      {/* Subtle background blobs */}
      <div className="exp-blob exp-blob-1" aria-hidden="true" />
      <div className="exp-blob exp-blob-2" aria-hidden="true" />

      <div className="section-wrapper" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="exp-section-header"
        >
          <span className="section-badge">✦ My Journey</span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
            Professional journey and academic background that shaped who I am today.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="exp-columns">

          {/* Experience column */}
          <div className="exp-column">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="exp-column-header"
            >
              <div className="exp-column-icon" style={{ background: 'linear-gradient(135deg, #6C63FF, #8B5CF6)' }}>
                <FiBriefcase size={20} />
              </div>
              <h3 className="exp-column-title">Experience</h3>
            </motion.div>
            
            <div className="exp-timeline-stack">
              {experience.map((item, i) => (
                <TimelineCard key={i} item={item} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="exp-column">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="exp-column-header"
            >
              <div className="exp-column-icon" style={{ background: 'linear-gradient(135deg, #00C2FF, #38BDF8)' }}>
                <FiBookOpen size={20} />
              </div>
              <h3 className="exp-column-title">Education</h3>
            </motion.div>

            <div className="exp-timeline-stack">
              {education.map((item, i) => (
                <TimelineCard key={i} item={item} index={i + 3} inView={inView} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
