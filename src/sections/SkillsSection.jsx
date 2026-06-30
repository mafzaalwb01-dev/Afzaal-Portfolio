import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiMysql } from 'react-icons/si';

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const skills = [
  { name: 'HTML5', percent: 98, icon: <FaHtml5 />, color: '#E34F26', cat: 'Frontend' },
  { name: 'CSS3', percent: 90, icon: <FaCss3Alt />, color: '#1572B6', cat: 'Frontend' },
  { name: 'JavaScript', percent: 85, icon: <FaJsSquare />, color: '#F7DF1E', cat: 'Frontend' },
  { name: 'React.js', percent: 40, icon: <FaReact />, color: '#61DAFB', cat: 'Frontend' },
  { name: 'Next.js', percent: 30, icon: <SiNextdotjs />, color: '#000000', cat: 'Frontend' },
  { name: 'Tailwind CSS', percent: 90, icon: <SiTailwindcss />, color: '#06B6D4', cat: 'Frontend' },
  { name: 'Node.js', percent: 60, icon: <FaNodeJs />, color: '#339933', cat: 'Backend' },
  { name: 'Express.js', percent: 20, icon: <SiExpress />, color: '#6366F1', cat: 'Backend' },
  { name: 'MongoDB', percent: 85, icon: <SiMongodb />, color: '#47A248', cat: 'Backend' },
  { name: 'MySQL', percent: 90, icon: <SiMysql />, color: '#4479A1', cat: 'Backend' },
  { name: 'Git/GitHub', percent: 89, icon: <FaGithub />, color: '#181717', cat: 'Tools' },
  { name: 'Figma', percent: 85, icon: <FaFigma />, color: '#F24E1E', cat: 'Tools' },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.cat === activeTab);

  return (
    <section id="skills" className="skills-section">
      {/* Background blobs */}
      <div className="skills-blob skills-blob-1" aria-hidden="true" />
      <div className="skills-blob skills-blob-2" aria-hidden="true" />

      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <span className="section-badge">My Skills</span>
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle mt-2">Technologies and tools I use to build amazing products</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="skills-category-tabs"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`skills-tab ${activeTab === cat ? 'skills-tab-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -4 }} 
                className="skill-card"
              >
                {/* Glow behind icon */}
                <div 
                  className="skill-card-glow"
                  style={{ background: skill.color }}
                />

                <div className="skill-card-header">
                  <div className="skill-card-info">
                    <div 
                      className="skill-card-icon" 
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}dd, ${skill.color})`,
                        boxShadow: `0 4px 12px ${skill.color}40`
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-card-meta">
                      <h3 className="skill-card-name">{skill.name}</h3>
                      <p className="skill-card-category">{skill.cat}</p>
                    </div>
                  </div>
                  <span 
                    className="skill-card-percent" 
                    style={{ color: skill.color }}
                  >
                    {skill.percent}%
                  </span>
                </div>
                
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress" 
                    initial={{ width: 0 }} 
                    animate={inView ? { width: `${skill.percent}%` } : { width: 0 }} 
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: "easeOut" }} 
                    style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }} 
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
