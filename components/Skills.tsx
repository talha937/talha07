'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            {portfolioData.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.skills.categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 bg-slate-800 text-gray-300 rounded-lg text-sm border border-slate-700 hover:border-teal-500/50 hover:text-teal-400 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
