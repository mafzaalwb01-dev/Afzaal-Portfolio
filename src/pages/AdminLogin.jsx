import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail, FiEye, FiEyeOff, FiArrowLeft, FiShield } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

/* ─── micro-animation variants ─── */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Input Field Component ─── */
const InputField = ({ index, label, type, value, onChange, placeholder, icon: Icon, rightSlot }) => {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div custom={index} variants={fieldVariants} initial="hidden" animate="visible">
      <label className="al-label">{label}</label>
      <div className={`al-input-wrap ${focused ? 'al-input-wrap--focused' : ''}`}>
        <Icon className="al-input-icon" size={15} />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="al-input"
          required
          autoComplete={type === 'password' ? 'current-password' : 'email'}
        />
        {rightSlot && <div className="al-input-right">{rightSlot}</div>}
      </div>
    </motion.div>
  );
};

/* ─── Main Component ─── */
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/admin/dashboard', { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back! 🎉');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="al-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ── Decorative blobs ── */}
      <div className="al-blob al-blob-1" />
      <div className="al-blob al-blob-2" />
      <div className="al-blob al-blob-3" />

      {/* ── Dot grid ── */}
      <div className="al-grid-dots" aria-hidden="true" />

      {/* ── Back button — top-left ── */}
      <motion.button
        onClick={() => navigate('/')}
        className="al-back-btn"
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.96 }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <FiArrowLeft size={15} className="al-back-arrow" />
        <span>Back to Portfolio</span>
      </motion.button>

      {/* ── Card ── */}
      <motion.div
        className="al-card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Top accent bar ── */}
        <div className="al-card-top-bar" />

        {/* ── Logo ── */}
        <motion.div
          className="al-logo-wrap"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="al-logo">
            <span>M</span>
          </div>
          <div className="al-logo-glow" aria-hidden="true" />
        </motion.div>

        {/* ── Header text ── */}
        <motion.div
          className="al-header"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <h1 className="al-title">Admin Login</h1>
          <p className="al-subtitle">Sign in to manage your portfolio</p>
        </motion.div>

        {/* ── Divider ── */}
        <div className="al-divider" />

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="al-form" noValidate>
          {/* Email */}
          <InputField
            index={0}
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@mafzaal.dev"
            icon={FiMail}
          />

          {/* Password */}
          <InputField
            index={1}
            label="Password"
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            icon={FiLock}
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="al-eye-btn"
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={showPass ? 'off' : 'on'}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            }
          />

          {/* Submit Button */}
          <motion.div
            custom={2}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="al-btn-wrap"
          >
            <motion.button
              type="submit"
              disabled={loading}
              className="al-submit-btn"
              whileHover={!loading ? { scale: 1.015, y: -1 } : {}}
              whileTap={!loading ? { scale: 0.985 } : {}}
            >
              <AnimatePresence mode="wait" initial={false}>
                {loading ? (
                  <motion.span
                    key="loading"
                    className="al-btn-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="al-spinner" />
                    Signing in…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    className="al-btn-inner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <FiShield size={15} />
                    Sign In
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </form>

        {/* ── Footer note ── */}
        <motion.p
          className="al-footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.4 }}
        >
          🔒 Secure admin access only
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AdminLogin;
