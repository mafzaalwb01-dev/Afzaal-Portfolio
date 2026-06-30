import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
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
    active: true,
    color: '#6C63FF',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedinIn size={17} />,
    href: 'https://www.linkedin.com/feed/',
    label: 'LinkedIn',
    active: true,
    color: '#0077b5',
  },
  {
    id: 'whatsapp',
    icon: <FaWhatsapp size={18} />,
    href: 'https://wa.me/923350599196',
    label: 'WhatsApp',
    active: true,
    color: '#25d366',
  },
  {
    id: 'tiktok',
    icon: <FaTiktok size={16} />,
    href: 'https://www.tiktok.com/@afzaaltechhub',
    label: 'TikTok',
    active: true,
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
   FLOATING TECH BADGES (around profile image)
────────────────────────────────────────────────────────────────────────── */
const floatingBadges = [
  { label: 'React', icon: <FaReact size={12} />, position: 'hero-float-label--top-left', dotClass: 'hero-float-dot--cyan', delay: 0 },
  { label: 'Node.js', icon: <FaNodeJs size={12} />, position: 'hero-float-label--left', dotClass: 'hero-float-dot--green', delay: 0.5 },
  { label: 'MongoDB', icon: <SiMongodb size={12} />, position: 'hero-float-label--bottom-left', dotClass: 'hero-float-dot--green', delay: 1 },
  { label: 'Express', icon: <SiExpress size={12} />, position: 'hero-float-label--top-right', dotClass: 'hero-float-dot--purple', delay: 1.5 },
  { label: 'Next.js', icon: <SiNextdotjs size={12} />, position: 'hero-float-label--bottom-right', dotClass: 'hero-float-dot--indigo', delay: 2 },
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   HERO SECTION COMPONENT
────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => (
  <section
    id="home"
    className="hero-bg"
  >
    {/* ── Decorative background blobs ── */}
    <div className="hero-blob hero-blob-1" aria-hidden="true" />
    <div className="hero-blob hero-blob-2" aria-hidden="true" />
    <div className="hero-blob hero-blob-3" aria-hidden="true" />

    {/* ── Radial glow lights ── */}
    <div className="hero-glow-light hero-glow-light-1" aria-hidden="true" />
    <div className="hero-glow-light hero-glow-light-2" aria-hidden="true" />

    {/* ── Subtle dot-grid background ── */}
    <div className="hero-grid-dots" aria-hidden="true" />

    {/* ═══════════════════════════════════════════════════════════════════
        CONTENT GRID
    ═══════════════════════════════════════════════════════════════════ */}
    <div className="section-wrapper relative z-10 w-full py-6 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 xl:gap-20">

        {/* ════════════════════ LEFT — TEXT CONTENT ════════════════════ */}
        <motion.div
          className="flex-1 text-center lg:text-left w-full min-w-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Available badge ── */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card mb-6 hero-badge"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--text-secondary)' }}>
              Available for projects
            </span>
          </motion.div>

          {/* ── Greeting ── */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium mb-2 md:mb-3 tracking-widest uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            Hello, I'm
          </motion.p>

          {/* ── Name ── */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.05] mb-4 md:mb-5 hero-name"
          >
            <span className="gradient-text">Muhammad{' '}<br className="sm:hidden" />Afzaal Khan</span>
          </motion.h1>

          {/* ── Typing Animation Badge ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start mb-5 md:mb-6"
          >
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
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-[15px] max-w-[460px] mx-auto lg:mx-0 mb-7 md:mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            1+ Year Experience as Full Stack Web Developer, building modern, responsive 
            and high-performance web applications with the MERN Stack ecosystem.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3.5 lg:gap-4 justify-center lg:justify-start mb-8 md:mb-10"
          >
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-72}
              className="w-full sm:w-auto inline-flex"
            >
              <button
                id="hero-btn-talk"
                className="btn-primary w-full group"
              >
                Hire Me
                <FiArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>

            <a
              id="hero-btn-cv"
              href="/cv.pdf"
              download="Muhammad_Afzaal_Khan_CV.pdf"
              className="btn-outline w-full sm:w-auto group flex items-center justify-center gap-2"
            >
              <FiDownload
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </motion.div>

          {/* ── Social Icons ── */}
          <motion.div
            variants={itemVariants}
            className="hero-socials-row mb-8"
          >
            <span className="hero-socials-label">Follow Me</span>
            <div className="hero-socials-icons gap-2.5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.id}
                  id={`hero-social-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
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

          {/* ── Tech Stack Badges ── */}
          <motion.div variants={itemVariants} className="hero-tech-badges">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                className="hero-tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {tech.icon}
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════════════════ RIGHT — PROFILE IMAGE ════════════════════ */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-wrapper">

            {/* Slow-spinning dashed orbit ring */}
            <div className="hero-orbit-ring" aria-hidden="true" />

            {/* Pulsing glow aura behind image */}
            <div className="hero-glow-aura" aria-hidden="true" />

            {/* Floating up-down animation wrapper */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-image-float"
            >
              {/* Gradient border ring */}
              <div className="profile-ring hero-profile-ring">
                <div className="hero-image-inner">
                  <img
                    src="/assets/profile.png"
                    alt="Muhammad Afzaal Khan — MERN Stack Developer"
                    className="hero-profile-img"
                    draggable={false}
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating technology badges around image */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
                className={`hero-float-label ${badge.position}`}
              >
                <span className={`hero-float-dot ${badge.dotClass}`} />
                <span>{badge.label}</span>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
