'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
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
            {portfolioData.experience.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                Education
              </h3>
              <div className="space-y-4">
                {portfolioData.experience.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-teal-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-400 mb-2 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">💼</span>
                Experience
              </h3>
              <div className="space-y-4">
                {portfolioData.experience.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h4>
                      <span className="text-sm text-teal-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-400 mb-2 font-medium">
                      {exp.organization}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
