import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiMapPin, FiCode } from 'react-icons/fi';
import { FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

/* ──────────────────────────────────────────────────────────────────────────
   SOCIAL LINKS
────────────────────────────────────────────────────────────────────────── */
const socialLinks = [
  {
    id: 'github',
    icon: <FiGithub size={18} />,
    href: 'https://github.com/mafzaalwb01-dev',
    label: 'GitHub',
    color: '#6C63FF',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedinIn size={17} />,
    href: 'https://www.linkedin.com/feed/',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  {
    id: 'whatsapp',
    icon: <FaWhatsapp size={18} />,
    href: 'https://wa.me/923350599196',
    label: 'WhatsApp',
    color: '#25d366',
  },
  {
    id: 'tiktok',
    icon: <FaTiktok size={16} />,
    href: 'https://www.tiktok.com/@afzaaltechhub',
    label: 'TikTok',
    color: '#6C63FF',
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   TECH STACK
────────────────────────────────────────────────────────────────────────── */
const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
];

/* ──────────────────────────────────────────────────────────────────────────
   FRAMER-MOTION VARIANTS
────────────────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   HERO SECTION COMPONENT
────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => (
  <section id="home" className="hero-section-new">
    {/* ── Decorative background elements ── */}
    <div className="hero-bg-gradient" aria-hidden="true" />
    <div className="hero-blob hero-blob-1" aria-hidden="true" />
    <div className="hero-blob hero-blob-2" aria-hidden="true" />
    <div className="hero-blob hero-blob-3" aria-hidden="true" />
    <div className="hero-grid-dots" aria-hidden="true" />

    {/* ═══════════════════════════════════════════════════════════════════
        CONTENT
    ═══════════════════════════════════════════════════════════════════ */}
    <div className="section-wrapper hero-content-wrapper">
      <div className="hero-layout">

        {/* ════════════════════ LEFT — TEXT CONTENT ════════════════════ */}
        <motion.div
          className="hero-text-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Available badge ── */}
          <motion.div variants={itemVariants} className="hero-status-badge">
            <span className="hero-status-dot-wrapper">
              <span className="hero-status-ping" />
              <span className="hero-status-dot" />
            </span>
            <span className="hero-status-text">Available for projects</span>
          </motion.div>

          {/* ── Greeting ── */}
          <motion.p variants={itemVariants} className="hero-greeting">
            Hello, I'm
          </motion.p>

          {/* ── Name ── */}
          <motion.h1 variants={itemVariants} className="hero-name-new">
            <span className="gradient-text">Muhammad</span>
            <br />
            <span className="gradient-text">Afzaal Khan</span>
          </motion.h1>

          {/* ── Typing Animation Badge ── */}
          <motion.div variants={itemVariants} className="hero-role-wrapper">
            <span className="hero-typing-badge">
              <span className="hero-typing-dot" />
              <TypeAnimation
                sequence={[
                  'Full Stack MERN Developer',
                  2200,
                  'Future Software Engineer',
                  2200,
                  'Learning Cyber Security',
                  2200,
                  'Building Modern Web Apps',
                  2200,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </motion.div>

          {/* ── Description ── */}
          <motion.p variants={itemVariants} className="hero-description">
            7 Months Experience as Full Stack Web Developer, building modern, responsive 
            and high-performance web applications with the MERN Stack ecosystem.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div variants={itemVariants} className="hero-cta-row">
            <Link to="contact" smooth duration={600} offset={-72}>
              <button id="hero-btn-talk" className="hero-btn-primary">
                Hire Me
                <FiArrowRight size={16} />
              </button>
            </Link>

            <a
              id="hero-btn-cv"
              href="/cv.pdf"
              download="Muhammad_Afzaal_Khan_CV.pdf"
              className="hero-btn-outline"
            >
              <FiDownload size={15} />
              Download CV
            </a>
          </motion.div>

          {/* ── Social Icons ── */}
          <motion.div variants={itemVariants} className="hero-socials-row">
            <span className="hero-socials-label">Follow Me</span>
            <div className="hero-socials-icons">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.id}
                  id={`hero-social-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="hero-social-icon-new"
                  aria-label={s.label}
                  title={s.label}
                  style={{ '--icon-color': s.color }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ════════════════════ RIGHT — PROFILE CARD ════════════════════ */}
        <motion.div
          className="hero-card-col"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-profile-card">
            {/* Floating glow behind card */}
            <div className="hero-card-glow" aria-hidden="true" />

            {/* Profile image */}
            <motion.div 
              className="hero-card-image-wrapper"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/assets/profile.png"
                alt="Muhammad Afzaal Khan — MERN Stack Developer"
                className="hero-card-image"
                draggable={false}
                loading="eager"
              />
            </motion.div>

            {/* Card info */}
            <div className="hero-card-info">
              <h3 className="hero-card-name">Muhammad Afzaal Khan</h3>
              <p className="hero-card-role">Full Stack MERN Developer</p>
              <div className="hero-card-location">
                <FiMapPin size={12} />
                <span>Punjab, Pakistan</span>
              </div>
            </div>

            {/* Tech badges inside card */}
            <div className="hero-card-techs">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  className="hero-card-tech-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tech.icon}
                  {tech.name}
                </motion.span>
              ))}
            </div>

            {/* Stats mini row */}
            <div className="hero-card-stats">
              <div className="hero-card-stat">
                <span className="hero-card-stat-number">1+</span>
                <span className="hero-card-stat-label">Years Exp</span>
              </div>
              <div className="hero-card-stat-divider" />
              <div className="hero-card-stat">
                <span className="hero-card-stat-number">10+</span>
                <span className="hero-card-stat-label">Projects</span>
              </div>
              <div className="hero-card-stat-divider" />
              <div className="hero-card-stat">
                <span className="hero-card-stat-number">9+</span>
                <span className="hero-card-stat-label">Technologies</span>
              </div>
            </div>
          </div>

          {/* Floating badges around card */}
          <motion.div
            className="hero-floating-badge hero-floating-badge--tl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaReact size={14} className="hero-floating-badge-icon" />
            <span>React</span>
          </motion.div>

          <motion.div
            className="hero-floating-badge hero-floating-badge--tr"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <FaNodeJs size={14} className="hero-floating-badge-icon" />
            <span>Node.js</span>
          </motion.div>

          <motion.div
            className="hero-floating-badge hero-floating-badge--bl"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <SiMongodb size={14} className="hero-floating-badge-icon" />
            <span>MongoDB</span>
          </motion.div>

          <motion.div
            className="hero-floating-badge hero-floating-badge--br"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          >
            <FiCode size={14} className="hero-floating-badge-icon" />
            <span>Full Stack</span>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
