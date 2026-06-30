import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiArrowUp, FiHeart, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Top animated glow line */}
      <div className="footer-glow-line" />

      <div className="section-wrapper">
        <div className="footer-grid">
          
          {/* Column 1: Brand & About */}
          <div className="footer-brand-col">
            <div className="footer-logo cursor-pointer" onClick={scrollToTop}>
              <div className="footer-logo-icon">M</div>
              <span className="footer-logo-text">
                Afzaal<span className="footer-logo-accent">.dev</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              A passionate Full Stack Developer building premium, responsive, and highly functional web applications. Bringing ideas to life through elegant code and intuitive design.
            </p>
            <div className="footer-social-row">
              <a href="https://github.com/mafzaalwb01-dev" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <FiGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <FiLinkedin size={16} />
              </a>
              <a href="https://wa.me/923350599196" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <FaWhatsapp size={16} />
              </a>
              <a href="https://www.tiktok.com/@afzaaltechhub" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="TikTok">
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Experience'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth
                    duration={600}
                    offset={-80}
                    className="footer-link group"
                  >
                    <span className="footer-link-dot" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-connect-col">
            <h4 className="footer-col-heading">Contact Info</h4>
            <p className="footer-connect-desc">
              Feel free to get in touch. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="footer-contact-chips">
              <a href="mailto:mafzaalwb01@gmail.com" className="footer-chip">
                <span className="footer-chip-dot footer-chip-dot-indigo" />
                <FiMail size={14} className="footer-chip-icon" />
                mafzaalwb01@gmail.com
              </a>
              <a href="tel:+923350599196" className="footer-chip">
                <span className="footer-chip-dot footer-chip-dot-green" />
                <FiPhone size={14} className="footer-chip-icon" />
                +92 335 0599196
              </a>
              <div className="footer-chip footer-chip-static">
                <span className="footer-chip-dot footer-chip-dot-pink" />
                <FiMapPin size={14} className="footer-chip-icon" />
                Punjab, Pakistan
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Muhammad Afzaal Khan. Made with <FiHeart className="footer-heart" />
          </div>
          
          <button onClick={scrollToTop} className="footer-back-top group" aria-label="Scroll to top">
            Back to Top
            <FiArrowUp size={14} className="footer-back-top-arrow" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
