import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const quickLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

const socials = [
  { icon: <FiGithub size={17} />, href: 'https://github.com/mafzaalwb01-dev', label: 'GitHub', color: '#6366f1' },
  { icon: <FaLinkedinIn size={16} />, href: '#', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaWhatsapp size={17} />, href: '#', label: 'WhatsApp', color: '#25d366' },
  { icon: <FaTiktok size={16} />, href: '#', label: 'TikTok', color: '#a78bfa' },
  { icon: <FaInstagram size={17} />, href: '#', label: 'Instagram', color: '#e4405f' },
];

const FooterSection = () => (
  <footer className="footer-root">
    {/* Top glow line */}
    <div className="footer-glow-line" />

    <div className="section-wrapper">
      {/* Main Grid */}
      <div className="footer-grid">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <div className="footer-logo-icon">M</div>
            <span className="footer-logo-text">
              Afzaal<span className="footer-logo-accent">.dev</span>
            </span>
          </div>
          <p className="footer-brand-desc">
            Full Stack Developer crafting modern, high-performance web experiences
            with the MERN Stack. Let's build something amazing together.
          </p>
          <div className="footer-social-row">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-btn"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = s.color;
                  e.currentTarget.style.borderColor = s.color;
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = `0 6px 18px ${s.color}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-links-list">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  spy
                  smooth
                  duration={600}
                  offset={-80}
                  className="footer-link"
                >
                  <span className="footer-link-dot" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div className="footer-connect-col">
          <h4 className="footer-col-heading">Let's Connect</h4>
          <p className="footer-connect-desc">
            Available for freelance projects, collaborations, and full-time opportunities.
          </p>
          <div className="footer-contact-chips">
            <a href="mailto:mafzaal.dev@gmail.com" className="footer-chip">
              <span className="footer-chip-dot footer-chip-dot-indigo" />
              mafzaal.dev@gmail.com
            </a>
            <a href="#" className="footer-chip">
              <span className="footer-chip-dot footer-chip-dot-green" />
              WhatsApp Available
            </a>
            <span className="footer-chip">
              <span className="footer-chip-dot footer-chip-dot-pink" />
              Pakistan 🇵🇰
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Muhammad Afzaal Khan — Made with{' '}
          <FiHeart className="footer-heart" size={13} /> in Pakistan
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="footer-back-top"
          whileHover={{ y: -3, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        >
          <FiArrowUp size={14} />
          Back to Top
        </motion.button>
      </div>
    </div>
  </footer>
);

export default FooterSection;
