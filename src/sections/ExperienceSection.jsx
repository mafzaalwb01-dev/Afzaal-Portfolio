import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBookOpen, FiShield, FiStar, FiCode, FiGlobe } from 'react-icons/fi';

/* ── Data ─────────────────────────────────────────── */
const experience = [
  {
    icon: <FiBriefcase />,
    title: '1 Year Full Stack Developer',
    desc: 'Building production-ready web applications with the MERN stack — from architecture to deployment.',
    period: '2024 – Present',
    color: '#6366f1',
  },
  {
    icon: <FiStar />,
    title: 'MERN Stack Projects',
    desc: 'Developed multiple full-stack projects using React, Node.js & MongoDB with real-world complexity.',
    period: 'Ongoing',
    color: '#8b5cf6',
  },
  {
    icon: <FiCode />,
    title: 'Frontend & Backend Dev',
    desc: 'Creating responsive, pixel-perfect UIs and robust RESTful APIs that scale under real traffic.',
    period: 'Ongoing',
    color: '#06b6d4',
  },
  {
    icon: <FiGlobe />,
    title: 'Responsive Websites',
    desc: 'Mobile-first, cross-device designs with smooth animations and accessibility best-practices.',
    period: 'Ongoing',
    color: '#10b981',
  },
];

const education = [
  {
    icon: <FiBookOpen />,
    title: '1st Year Student',
    desc: 'Actively pursuing education while shipping real-world projects to grow as an engineer.',
    color: '#f59e0b',
  },
  {
    icon: <FiBookOpen />,
    title: 'Logic Gigs Academy',
    desc: 'Intensive training in advanced web development, modern frameworks and programming principles.',
    color: '#6366f1',
  },
  {
    icon: <FiShield />,
    title: 'Learning Cyber Security',
    desc: 'Expanding knowledge in security fundamentals, ethical hacking and network protection.',
    color: '#ec4899',
  },
  {
    icon: <FiStar />,
    title: 'Future Software Engineer',
    desc: 'Relentlessly working towards becoming a well-rounded, professional software engineer.',
    color: '#8b5cf6',
  },
];

/* ── Card variants for stagger animation ─────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Single Card ──────────────────────────────────── */
const Card = ({ item, index, inView }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={cardVariants}
    className="exp-card"
  >
    {/* Icon */}
    <div
      className="exp-card-icon"
      style={{
        background: `linear-gradient(135deg, ${item.color}cc, ${item.color})`,
        boxShadow: `0 6px 18px ${item.color}35`,
      }}
    >
      {item.icon}
    </div>

    {/* Body */}
    <div className="exp-card-body">
      <div className="exp-card-header">
        <h4 className="exp-card-title">{item.title}</h4>
        {item.period && (
          <span
            className="exp-card-period"
            style={{ color: item.color }}
          >
            {item.period}
          </span>
        )}
      </div>
      <p className="exp-card-desc">{item.desc}</p>
    </div>

    {/* Hover glow accent */}
    <div
      className="exp-card-glow"
      style={{ background: `radial-gradient(circle at 0% 50%, ${item.color}18, transparent 70%)` }}
    />
  </motion.div>
);

/* ── Column header ────────────────────────────────── */
const ColHeader = ({ icon, label, gradient, inView, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="exp-col-header"
  >
    <span className="exp-col-icon" style={{ background: gradient }}>{icon}</span>
    <span className="exp-col-label">{label}</span>
  </motion.div>
);

/* ── Section ──────────────────────────────────────── */
const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" className="exp-section">
      {/* Subtle background blobs */}
      <div className="exp-blob exp-blob-1" />
      <div className="exp-blob exp-blob-2" />

      <div className="section-wrapper" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="exp-section-header"
        >
          <span className="section-badge">✦ My Journey</span>
          <h2 className="section-title exp-heading">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle exp-subtitle">
            Professional journey and academic background that shaped who I am today.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="exp-grid">

          {/* Experience column */}
          <div className="exp-col">
            <ColHeader
              icon={<FiBriefcase />}
              label="Experience"
              gradient="linear-gradient(135deg, #6366f1, #8b5cf6)"
              inView={inView}
              delay={0.1}
            />
            <div className="exp-cards-stack">
              {experience.map((item, i) => (
                <Card key={i} item={item} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="exp-col">
            <ColHeader
              icon={<FiBookOpen />}
              label="Education"
              gradient="linear-gradient(135deg, #06b6d4, #0891b2)"
              inView={inView}
              delay={0.15}
            />
            <div className="exp-cards-stack">
              {education.map((item, i) => (
                <Card key={i} item={item} index={i + 0.5} inView={inView} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
