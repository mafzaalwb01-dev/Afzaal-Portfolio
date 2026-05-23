import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
    color: '#6366f1',
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
    color: '#010101',
  },
  {
    id: 'instagram',
    icon: <FaInstagram size={18} />,
    href: null,
    label: 'Instagram (Coming Soon)',
    active: false,
    color: '#e1306c',
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   FRAMER-MOTION VARIANTS
────────────────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
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
  hidden: { opacity: 0, scale: 0.78 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   DOWNLOAD CV HANDLER
────────────────────────────────────────────────────────────────────────── */
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/assets/Muhammad_Afzaal_Khan_CV.pdf';
  link.download = 'Muhammad_Afzaal_Khan_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/* ──────────────────────────────────────────────────────────────────────────
   HERO SECTION COMPONENT
────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => (
  <section
    id="home"
    className="hero-bg min-h-screen flex items-center relative pt-20 sm:pt-24 pb-12 overflow-hidden"
  >
    {/* ── Decorative background blobs ── */}
    <div
      className="hero-blob bg-indigo-300"
      style={{
        width: 'clamp(220px, 32vw, 460px)',
        height: 'clamp(220px, 32vw, 460px)',
        top: '-10%',
        left: '-6%',
      }}
    />
    <div
      className="hero-blob bg-purple-300"
      style={{
        width: 'clamp(180px, 26vw, 380px)',
        height: 'clamp(180px, 26vw, 380px)',
        bottom: '-8%',
        right: '-5%',
      }}
    />
    <div
      className="hero-blob bg-sky-200"
      style={{
        width: 'clamp(120px, 18vw, 270px)',
        height: 'clamp(120px, 18vw, 270px)',
        top: '40%',
        left: '46%',
      }}
    />

    {/* ── Subtle dot-grid background ── */}
    <div className="hero-grid-dots" aria-hidden="true" />

    {/* ═══════════════════════════════════════════════════════════════════
        CONTENT GRID
        ▸ Mobile  → column-reverse  (image on top, text below)
        ▸ Desktop → two columns     (text left, image right)
    ═══════════════════════════════════════════════════════════════════ */}
    <div className="section-wrapper relative z-10 w-full py-8 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

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
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card mb-8 hero-badge"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-slate-600 tracking-wide">
              Available for projects
            </span>
          </motion.div>

          {/* ── Greeting ── */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-slate-400 mb-2 md:mb-3 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          {/* ── Name ── */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.08] mb-4 md:mb-5 hero-name"
          >
            <span className="gradient-text">Muhammad <br className="sm:hidden" />Afzaal Khan</span>
          </motion.h1>

          {/* ── Typing Animation Badge ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start mb-6 md:mb-7"
          >
            <span className="hero-typing-badge">
              <span className="hero-typing-dot" />
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2200,
                  'Future Software Engineer',
                  2200,
                  'Learning CEH',
                  2200,
                  'Full Stack Web Developer',
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
            className="text-sm sm:text-[15px] text-slate-500 max-w-[440px] mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed"
          >
            1 Year Experience as Full Stack Web Developer.
            <br />
            Building modern, responsive web apps with MERN Stack technologies.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center lg:justify-start mb-12 md:mb-16"
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
                Let's Talk
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

          {/* ── Social Icons — improved spacing ── */}
          <motion.div
            variants={itemVariants}
            className="hero-socials-row mt-4"
          >
            <span className="hero-socials-label">
              Follow Me
            </span>

            <div className="hero-socials-icons gap-3 sm:gap-4">
              {socialLinks.map((s) =>
                s.active ? (
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
                ) : (
                  <span
                    key={s.id}
                    id={`hero-social-${s.id}`}
                    className="hero-social-icon-new hero-social-icon-new--disabled"
                    aria-label={s.label}
                    title={s.label}
                    style={{ '--icon-color': s.color }}
                  >
                    {s.icon}
                  </span>
                )
              )}
            </div>
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
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-image-float"
            >
              {/* Gradient border ring */}
              <div className="profile-ring hero-profile-ring">
                <div className="hero-image-inner">
                  <img
                    src="/afzaal-portfolio/assets/profile.png"
                    alt="Muhammad Afzaal Khan — MERN Stack Developer"
                    className="hero-profile-img"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating label — MERN Stack (top-left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-float-label hero-float-label--left"
            >
              <span className="hero-float-dot hero-float-dot--indigo" />
              <span>MERN Stack</span>
            </motion.div>

            {/* Floating label — Experience (bottom-right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-float-label hero-float-label--right"
            >
              <span className="hero-float-dot hero-float-dot--purple" />
              <span>1+ Year Exp</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
