import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Services', to: 'services' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`navbar-root ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="navbar-logo-icon">
            <span>M</span>
          </div>
          <span className="navbar-logo-text">
            Afzaal<span className="navbar-logo-dot">.dev</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={600}
              offset={-80}
              onSetActive={() => setActiveSection(link.to)}
              className={`navbar-link ${activeSection === link.to ? 'navbar-link-active' : ''}`}
            >
              {link.label}
              {activeSection === link.to && (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="navbar-active-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="navbar-icon-btn"
            aria-label="Toggle theme"
          >
            <motion.div
              key={darkMode ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </motion.div>
          </button>

          <button
            onClick={() => navigate('/admin/login')}
            className="navbar-admin-btn"
          >
            <span>Admin</span>
            <FiArrowRight size={14} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="navbar-hamburger"
            aria-label="Toggle menu"
          >
            <motion.div
              key={menuOpen ? 'close' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="navbar-mobile-backdrop"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="navbar-mobile-menu"
            >
              <div className="navbar-mobile-links">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      spy
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className={`navbar-mobile-link ${activeSection === link.to ? 'navbar-mobile-link-active' : ''}`}
                    >
                      <span className="navbar-mobile-link-dot" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="navbar-mobile-footer">
                <button
                  onClick={() => { navigate('/admin/login'); setMenuOpen(false); }}
                  className="navbar-mobile-admin-btn"
                >
                  Admin Panel
                  <FiArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
