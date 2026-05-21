import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', percent: 98, icon: <FaHtml5 />, color: '#e34f26' },
  { name: 'CSS', percent: 95, icon: <FaCss3Alt />, color: '#1572b6' },
  { name: 'Tailwind CSS', percent: 96, icon: <SiTailwindcss />, color: '#06b6d4' },
  { name: 'JavaScript', percent: 92, icon: <FaJsSquare />, color: '#f7df1e' },
  { name: 'React.js', percent: 90, icon: <FaReact />, color: '#61dafb' },
  { name: 'Bootstrap', percent: 93, icon: <FaBootstrap />, color: '#7952b3' },
  { name: 'Node.js', percent: 88, icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express.js', percent: 87, icon: <SiExpress />, color: '#6366f1' },
  { name: 'MongoDB', percent: 85, icon: <SiMongodb />, color: '#47a248' },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="skills" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)' }}>
      <div className="section-wrapper" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-14">
          <span className="section-badge">My Skills</span>
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle mt-2">Technologies I work with to build amazing products</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4 }} className="glass-card rounded-xl p-4 sm:p-5 group cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-base flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${skill.color}cc, ${skill.color})` }}>{skill.icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-slate-800 truncate">{skill.name}</h3>
                    <p className="text-[10px] text-slate-400">Proficiency</p>
                  </div>
                </div>
                <span className="text-sm font-bold flex-shrink-0" style={{ color: skill.color, fontFamily: 'var(--font-heading)' }}>{skill.percent}%</span>
              </div>
              <div className="skill-bar">
                <motion.div className="skill-progress" initial={{ width: 0 }} animate={inView ? { width: `${skill.percent}%` } : { width: 0 }} transition={{ duration: 1.2, delay: 0.2 + i * 0.07 }} style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`, boxShadow: `0 0 8px ${skill.color}50` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
