import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase } from 'react-icons/si';

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const skills = [
  { name: 'HTML5', percent: 98, icon: <FaHtml5 />, color: '#E34F26', cat: 'Frontend' },
  { name: 'CSS3', percent: 95, icon: <FaCss3Alt />, color: '#1572B6', cat: 'Frontend' },
  { name: 'JavaScript', percent: 92, icon: <FaJsSquare />, color: '#F7DF1E', cat: 'Frontend' },
  { name: 'React.js', percent: 90, icon: <FaReact />, color: '#61DAFB', cat: 'Frontend' },
  { name: 'Next.js', percent: 85, icon: <SiNextdotjs />, color: '#000000', cat: 'Frontend' },
  { name: 'Tailwind CSS', percent: 96, icon: <SiTailwindcss />, color: '#06B6D4', cat: 'Frontend' },
  { name: 'Node.js', percent: 88, icon: <FaNodeJs />, color: '#339933', cat: 'Backend' },
  { name: 'Express.js', percent: 87, icon: <SiExpress />, color: '#6366F1', cat: 'Backend' },
  { name: 'MongoDB', percent: 85, icon: <SiMongodb />, color: '#47A248', cat: 'Backend' },
  { name: 'Firebase', percent: 80, icon: <SiFirebase />, color: '#FFCA28', cat: 'Backend' },
  { name: 'Git/GitHub', percent: 92, icon: <FaGithub />, color: '#181717', cat: 'Tools' },
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
      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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
                className="glass-card rounded-xl p-5 cursor-default relative overflow-hidden"
              >
                {/* Glow behind icon */}
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-20"
                  style={{ background: skill.color }}
                />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0" 
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}dd, ${skill.color})`,
                        boxShadow: `0 4px 12px ${skill.color}40`
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-100 truncate">{skill.name}</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{skill.cat}</p>
                    </div>
                  </div>
                  <span 
                    className="text-sm font-bold flex-shrink-0" 
                    style={{ color: skill.color, fontFamily: 'var(--font-heading)' }}
                  >
                    {skill.percent}%
                  </span>
                </div>
                
                <div className="skill-bar relative z-10">
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
