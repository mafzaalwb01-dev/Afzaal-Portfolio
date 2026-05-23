import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(progress);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
};

export default ScrollProgress;
