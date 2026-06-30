import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mafzaalwb01@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard!', {
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '600',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'mafzaalwb01@gmail.com', desc: 'Drop me a line anytime', link: 'mailto:mafzaalwb01@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+92 335 0599196', desc: 'Mon-Fri 9am-6pm', link: 'tel:+923350599196' },
    { icon: <FiMapPin />, label: 'Location', value: 'Punjab, Pakistan', desc: 'Available for remote work worldwide', link: '#' },
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Background blobs */}
      <div className="contact-bg-blob contact-bg-blob-1" aria-hidden="true" />
      <div className="contact-bg-blob contact-bg-blob-2" aria-hidden="true" />

      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="contact-header"
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle mt-3">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="contact-layout mt-10">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info-col flex flex-col h-full"
          >
            <div className="contact-cards flex-1">
              {contactInfo.map((info, i) => (
                <a 
                  key={i} 
                  href={info.link}
                  className="contact-card group"
                  target={info.label === 'Location' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                >
                  <div className="contact-card-icon" style={{ background: 'rgba(108, 99, 255, 0.1)', color: 'var(--primary)' }}>
                    {info.icon}
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                    <span className="contact-card-desc">{info.desc}</span>
                  </div>
                  {info.label !== 'Location' && (
                    <FiArrowRight className="contact-card-arrow" />
                  )}
                </a>
              ))}
            </div>

            {/* Quick Copy Email CTA */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mt-4">
              <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Prefer direct email?
              </div>
              <button 
                onClick={handleCopyEmail}
                className="contact-copy-btn"
              >
                {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
            
            <div className="contact-social-block mt-6">
              <h4 className="contact-social-heading">Connect with me</h4>
              <div className="contact-social-row">
                <a href="https://github.com/mafzaalwb01-dev" target="_blank" rel="noopener noreferrer" className="contact-social-btn hover:text-[#333] dark:hover:text-white hover:border-[#333] dark:hover:border-white">
                  <FiGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="contact-social-btn hover:text-[#0077b5] hover:border-[#0077b5]">
                  <FiLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="contact-form-col"
          >
            <div className="contact-form h-full flex flex-col">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Send me a message 🚀</h3>
                <p className="contact-form-subtitle">I'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form-body flex-1">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name" className="contact-label">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe" 
                      className="form-input" 
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com" 
                      className="form-input" 
                    />
                  </div>
                </div>
                
                <div className="contact-field">
                  <label htmlFor="subject" className="contact-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?" 
                    className="form-input" 
                  />
                </div>
                
                <div className="contact-field flex-1 flex flex-col">
                  <label htmlFor="message" className="contact-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello, I'd like to talk about..." 
                    rows="5"
                    className="form-input flex-1 resize-y min-h-[120px]"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="contact-submit-btn"
                >
                  {loading ? (
                    <div className="contact-spinner" />
                  ) : (
                    <>
                      Send Message
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
