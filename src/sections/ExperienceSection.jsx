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
    title: 'B.S. Software Engineering',
    subtitle: 'University Name (1st Year)',
    desc: 'Actively pursuing degree while shipping real-world projects to grow as an engineer.',
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

/* ── Card variants for stagger animation ─────────── */
const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Single Card ──────────────────────────────────── */
const Card = ({ item, index, inView }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={cardVariants}
    className="exp-card relative pl-8 md:pl-0"
  >
    {/* Timeline dot and line (Mobile) */}
    <div className="absolute left-0 top-6 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:hidden">
      <div 
        className="absolute -left-[5px] top-0 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900"
        style={{ backgroundColor: item.color }}
      />
    </div>

    {/* Body */}
    <div className="exp-card-body p-5 rounded-xl border border-slate-200/60 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
      
      {/* Glow on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 0%, color-mix(in srgb, ${item.color} 5%, transparent), transparent 70%)` }}
      />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 relative z-10">
        <div>
          <h4 className="text-[1.05rem] font-bold text-slate-800 dark:text-slate-100 font-['Space_Grotesk']">
            {item.title}
          </h4>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {item.subtitle}
          </span>
        </div>
        {item.period && (
          <span
            className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap self-start"
            style={{ color: item.color, backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)` }}
          >
            {item.period}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
        {item.desc}
      </p>
    </div>
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
          <h2 className="section-title exp-heading">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle exp-subtitle">
            Professional journey and academic background that shaped who I am today.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10">

          {/* Experience column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6]">
                <FiBriefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-['Space_Grotesk']">Experience</h3>
            </motion.div>
            
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-[19px] top-[70px] bottom-4 w-px bg-slate-200 dark:bg-slate-700/60" />

            <div className="flex flex-col gap-6">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                   {/* Desktop Timeline Dot */}
                  <div 
                    className="hidden md:block absolute -left-[23px] top-7 w-[11px] h-[11px] rounded-full border-[2.5px] border-white dark:border-slate-900 z-10"
                    style={{ backgroundColor: item.color, left: '14px' }}
                  />
                  <div className="md:ml-12">
                    <Card item={item} index={i} inView={inView} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-[#00C2FF] to-[#38BDF8]">
                <FiBookOpen size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-['Space_Grotesk']">Education</h3>
            </motion.div>

            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-[19px] top-[70px] bottom-4 w-px bg-slate-200 dark:bg-slate-700/60" />

            <div className="flex flex-col gap-6">
              {education.map((item, i) => (
                <div key={i} className="relative">
                   {/* Desktop Timeline Dot */}
                  <div 
                    className="hidden md:block absolute -left-[23px] top-7 w-[11px] h-[11px] rounded-full border-[2.5px] border-white dark:border-slate-900 z-10"
                    style={{ backgroundColor: item.color, left: '14px' }}
                  />
                  <div className="md:ml-12">
                    <Card item={item} index={i + 3} inView={inView} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
