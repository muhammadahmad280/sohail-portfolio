// 📄 src/components/sections/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@hooks/useScrollReveal';
import { Code, Server, Database, Settings, ChevronRight } from 'lucide-react';
import skillsData from '@data/skills.json';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, style } = useScrollReveal({ delay: index * 100 });

  return (
    <motion.div
      ref={ref}
      style={style}
      className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md">
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-full h-full object-contain"
            
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{skill.experience} experience</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">Proficiency</span>
          <span className="text-sm font-bold text-primary">{skill.level}%</span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill bg-gradient-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* Hover Description */}
      <AnimatePresence>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {skill.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  const { ref, style } = useScrollReveal();

  const categories = [
    {
      id: 'backend',
      label: 'Backend',
      icon: Server,
      color: 'text-green-500',
      description: 'Building powerful RESTful APIs and server-side applications with Laravel, PHP, and MySQL.'
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Code,
      color: 'text-blue-500',
      description: 'Developing clean and responsive interfaces with Blade, Vue.js, and Tailwind CSS.'
    },
    {
      id: 'database',
      label: 'Database',
      icon: Database,
      color: 'text-purple-500',
      description: 'Designing and optimizing relational databases using MySQL and PostgreSQL.'
    },
    {
      id: 'tools',
      label: 'Tools & DevOps',
      icon: Settings,
      color: 'text-orange-500',
      description: 'Using Git, Docker, and Composer to streamline development and deployment workflows.'
    },
  ];

  return (
  <section
  id="skills"
  className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
>
  <div className="container mx-auto max-w-6xl px-4">
    {/* Header */}
    <motion.div ref={ref} style={style} className="text-center mb-10 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">Technical Skills</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Core technologies and frameworks I use to build secure, scalable Laravel applications.
      </p>
    </motion.div>

    {/* Category Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'glass hover:bg-white/20 dark:hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              className={`w-5 h-5 ${
                activeCategory === cat.id ? 'text-white' : cat.color
              }`}
            />
            <span>{cat.label}</span>
          </motion.button>
        );
      })}
    </div>

    {/* Category Description */}
    <motion.div
      key={activeCategory}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {categories.find((c) => c.id === activeCategory)?.description}
      </p>
    </motion.div>

    {/* Skills Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {skillsData[activeCategory]?.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>

    
  </div>
</section>

  );
};

export default Skills;
 