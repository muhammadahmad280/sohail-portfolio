import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Eye, Code, ChevronRight } from 'lucide-react';
import projectsData from '@data/projects.json';
import { useScrollReveal } from '@hooks/useScrollReveal';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, style } = useScrollReveal({ delay: index * 100 });

  return (
    <motion.div
      ref={ref}
      style={style}
      className="group relative glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
            >
       
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.category === 'frontend' ? 'bg-blue-500 text-white' :
            project.category === 'laravel' ? 'bg-red-500 text-white' :
            project.category === 'wordpress' ? 'bg-purple-500 text-white' :
            'bg-gray-500 text-white'
          }`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons (always visible on mobile) */}
        <div className="flex space-x-3 md:hidden">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Live</span>
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, style } = useScrollReveal();

  const filters = [
    { id: 'all', label: 'All Projects', count: projectsData.projects.length },
    { id: 'frontend', label: 'Frontend', count: projectsData.projects.filter(p => p.category === 'frontend').length },
    { id: 'laravel', label: 'Laravel', count: projectsData.projects.filter(p => p.category === 'laravel').length },
    { id: 'wordpress', label: 'WordPress', count: projectsData.projects.filter(p => p.category === 'wordpress').length }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projectsData.projects;
    }
    return projectsData.projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
   <section
  id="portfolio"
  className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
>
  <div className="container mx-auto max-w-6xl px-4">
    {/* Header */}
    <motion.div ref={ref} style={style} className="text-center mb-10 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">My Portfolio</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        A selection of projects showcasing my technical expertise and creativity in web development.
      </p>
    </motion.div>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-gradient-primary text-white shadow-lg'
              : 'glass hover:bg-white/20 dark:hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Filter className="w-4 h-4" />
          <span>{filter.label}</span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              activeFilter === filter.id
                ? 'bg-white/20'
                : 'bg-primary/10 text-primary'
            }`}
          >
            {filter.count}
          </span>
        </motion.button>
      ))}
    </div>

    {/* Projects Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>

    {/* Empty State */}
    {filteredProjects.length === 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10"
      >
        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
          <Filter className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
          No projects found
        </h3>
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          Try selecting a different category to see more projects.
        </p>
      </motion.div>
    )}

    {/* Call to Action */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 md:mt-16 text-center glass rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        Interested in working together?
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed text-base">
        I’m always open to discussing new projects or collaborations. Let’s create something great together.
      </p>
      <motion.a
        href="#contact"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Start a Project</span>
        <ChevronRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  </div>
</section>

  );
};

export default Portfolio;