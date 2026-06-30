import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo spinner */}
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{ borderTopColor: '#6C63FF', borderRightColor: '#8B5CF6' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-3 rounded-full border-4 border-transparent"
            style={{ borderTopColor: '#00C2FF', borderLeftColor: '#8B5CF6' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>M</span>
          </div>
        </div>

        {/* Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
            Muhammad Afzaal Khan
          </h2>
          <p className="text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Loading Portfolio...</p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #6C63FF, #8B5CF6, #00C2FF)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
