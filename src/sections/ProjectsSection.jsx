import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';

const techIcons = {
  'HTML': <FaHtml5 />,
  'CSS': <FaCss3Alt />,
  'JavaScript': <FaJsSquare />,
  'React.js': <FaReact />,
  'Node.js': <FaNodeJs />,
  'MongoDB': <SiMongodb />,
  'Tailwind CSS': <SiTailwindcss />,
  'Express.js': <SiExpress />,
};

const projects = [
  {
    name: 'Agriculture Management System',
    description: 'Modern Agriculture Management System built to help farmers manage crops, track production, monitor resources, and improve farming efficiency using digital solutions.',
    techs: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Crop Tracking', 'Smart Farming', 'Farmer Dashboard', 'Weather Monitoring', 'Resource Management'],
    github: 'https://github.com/mafzaalwb01-dev',
    live: '#',
    image: '/assets/agri-dashboard.png',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)',
    accentColor: '#10b981',
    badge: '🌾 Smart Farming',
    featured: true,
  },
  {
    name: 'Luxury Hair Studio Website',
    description: 'Modern Hair Studio Website designed for salons and beauty professionals with elegant UI, online booking features, service showcases, and responsive user experience.',
    techs: ['React.js', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    features: ['Online Booking', 'Hair Styling Services', 'Barber Portfolio', 'Responsive Design', 'Beauty Products', 'Customer Reviews'],
    github: 'https://github.com/mafzaalwb01-dev/hair-salon-frontend',
    live: '#',
    image: '/assets/hair-studio.png',
    gradient: 'linear-gradient(135deg, #1c1007 0%, #2d1a0a 40%, #3b1f0b 100%)',
    accentColor: '#d4a853',
    badge: '✂️ Luxury Studio',
  },
  {
    name: 'UC or Diamond Store',
    description: 'A modern gaming rewards platform where users can buy UC, Diamonds, and earn free game coins instantly. Features a sleek dark neon UI with real-time rewards tracking.',
    techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    features: ['UC & Diamond Shop', 'Free Coins System', 'Reward Tracking', 'Instant Delivery', 'Gaming Wallet', 'Referral Bonuses'],
    github: 'https://github.com/mafzaalwb01-dev/UC-or-Diamond-store',
    live: '#',
    image: '/assets/uc-diamond-store.png',
    gradient: 'linear-gradient(135deg, #021a1a 0%, #042f2e 40%, #0d3d3b 100%)',
    accentColor: '#2dd4bf',
    badge: '🎮 Gaming Platform',
    gaming: true,
  },
];

const ProjectCard = ({ p, i, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / Visual Banner */}
      <div className="proj-banner" style={{ background: p.gradient }}>
        {p.image && (
          <>
            <motion.img
              src={p.image}
              alt={p.name}
              className="proj-banner-img"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onError={(e) => {
                // Fallback if image not found in assets yet
                e.target.style.display = 'none';
                e.target.nextSibling.style.opacity = 0.8;
              }}
            />
            {/* dark overlay on hover */}
            <motion.div
              className="proj-banner-overlay"
              animate={{ opacity: hovered ? 0.5 : 0.15 }}
              transition={{ duration: 0.35 }}
            />
          </>
        )}

        {/* Badge */}
        <div className="proj-badge">{p.badge}</div>

        {/* Quick action buttons on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="proj-quick-actions"
            >
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-quick-btn">
                <FiGithub size={15} /> Code
              </a>
              <a href={p.live} className="proj-quick-btn proj-quick-btn-live">
                <FiExternalLink size={15} /> Demo
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="proj-body">
        {/* Title */}
        <h3 className="proj-title">{p.name}</h3>

        {/* Description */}
        <p className="proj-desc">{p.description}</p>

        {/* Feature Tags */}
        <div className="proj-features">
          <span className="proj-features-label"><FiTag size={10} /> Key Features</span>
          <div className="proj-feature-tags">
            {p.features.map((f, j) => (
              <motion.span
                key={j}
                className="proj-feature-tag"
                style={{ borderColor: `color-mix(in srgb, ${p.accentColor} 25%, transparent)`, color: p.accentColor, background: `color-mix(in srgb, ${p.accentColor} 8%, transparent)` }}
                whileHover={{ scale: 1.05 }}
              >
                {f}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="proj-techs">
          {p.techs.map((t, j) => (
            <span key={j} className="proj-tech-tag">
              <span className="proj-tech-icon">{techIcons[t]}</span>
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="proj-actions mt-4">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn-outline"
          >
            <FiGithub size={16} />
            GitHub Repo
          </a>
          <a href={p.live} className="proj-btn-primary">
            <FiExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="projects-header"
        >
          <span className="section-badge">My Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle mt-3">
            A selection of projects I've built — each crafted with attention to detail, clean code, and great UX.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} inView={inView} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="projects-cta"
        >
          <a
            href="https://github.com/mafzaalwb01-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-cta-btn"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
            <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
