import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart Inc.',
    image: 'https://i.pravatar.cc/150?img=47',
    text: 'Afzaal delivered a stunning, high-performance web application that exceeded our expectations. His attention to detail and mastery of the MERN stack is truly impressive.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Product Manager',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Working with Muhammad was an absolute pleasure. He is a problem-solver who writes clean, maintainable code. Highly recommended for any complex frontend work.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, BeautyHub',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'The luxury salon website he built for us is beautiful, fast, and exactly what we envisioned. The online booking integration works flawlessly. Fantastic work!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-wrapper" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }}
          className="testimonials-header"
        >
          <span className="section-badge">Client Reviews</span>
          <h2 className="section-title">What <span className="gradient-text">People Say</span></h2>
          <p className="section-subtitle mt-3">Testimonials from clients and colleagues I've worked with</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid mt-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 24 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: i * 0.15 }} 
              className="testimonial-card group"
            >
              <FaQuoteRight className="testimonial-quote-icon transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--primary)]" />
              
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="testimonial-star" />
                ))}
              </div>
              
              <p className="testimonial-text">"{t.text}"</p>
              
              <div className="testimonial-author mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="testimonial-avatar object-cover" 
                  loading="lazy"
                />
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{t.name}</h4>
                  <p className="testimonial-author-role">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
