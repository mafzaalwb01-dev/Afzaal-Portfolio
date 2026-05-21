import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaTiktok, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'mafzaal.dev@gmail.com',
    href: 'mailto:mafzaal.dev@gmail.com',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    description: 'Drop me a line anytime',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/+923001234567',
    color: '#25d366',
    bg: 'rgba(37,211,102,0.1)',
    description: 'Quick replies guaranteed',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Pakistan',
    href: '#',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
    description: 'Available worldwide remotely',
  },
];

const socials = [
  { icon: <FaGithub size={17} />, href: 'https://github.com/mafzaalwb01-dev', label: 'GitHub', color: '#333' },
  { icon: <FaLinkedinIn size={16} />, href: '#', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaTiktok size={16} />, href: '#', label: 'TikTok', color: '#000' },
  { icon: <FaInstagram size={17} />, href: '#', label: 'Instagram', color: '#e4405f' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill all fields');
      return;
    }
    setSending(true);
    try {
      await axios.post('/api/messages', form);
      toast.success('Message sent! 🎉');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background decoration */}
      <div className="contact-bg-blob contact-bg-blob-1" />
      <div className="contact-bg-blob contact-bg-blob-2" />

      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <motion.div {...fadeUp(0)} animate={inView ? fadeUp(0).animate : {}} className="contact-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mt-3">
            Have a project in mind? I'd love to hear about it. Let's build something great together.
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="contact-info-col"
          >
            {/* Contact Cards */}
            <div className="contact-cards">
              {contactInfo.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-card"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className="contact-card-icon"
                    style={{ color: c.color, background: c.bg }}
                  >
                    {c.icon}
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">{c.label}</span>
                    <span className="contact-card-value">{c.value}</span>
                    <span className="contact-card-desc">{c.description}</span>
                  </div>
                  <FiArrowRight className="contact-card-arrow" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-social-block">
              <p className="contact-social-heading">Follow Me</p>
              <div className="contact-social-row">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="contact-social-btn"
                    whileHover={{ y: -4, scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = s.color;
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}55`;
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
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="contact-form-col"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Send a Message</h3>
                <p className="contact-form-subtitle">I'll get back to you within 24 hours.</p>
              </div>

              <div className="contact-form-body">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Muhammad Afzaal"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion / Collaboration"
                    className="form-input"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, timeline..."
                    rows={5}
                    className="form-input resize-none"
                    required
                  />
                </div>

                <button type="submit" disabled={sending} className="contact-submit-btn">
                  {sending ? (
                    <>
                      <span className="contact-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
