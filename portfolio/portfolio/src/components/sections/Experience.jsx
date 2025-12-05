// ✅ File: src/components/sections/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@hooks/useScrollReveal";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";
import experienceData from "@data/experience.json";

const TimelineItem = ({ item, type, index }) => {
  const isLeft = index % 2 === 0;
  const { ref, style } = useScrollReveal({ delay: index * 200 });

  const iconMap = {
    experience: { Icon: Briefcase, color: "text-blue-500" },
    education: { Icon: GraduationCap, color: "text-green-500" },
    certification: { Icon: Award, color: "text-purple-500" },
  };

  const { Icon, color } = iconMap[type] || iconMap.experience;

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary to-cyan-400 hidden md:block" />

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white dark:bg-gray-800 border-4 border-primary rounded-full z-10" />

      {/* Card */}
      <div
        className={`relative w-full md:w-5/12 ${
          isLeft ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="glass p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {item.title || item.degree}
              </h3>
              <p className="text-primary font-semibold mb-2">
                {item.company || item.school || item.issuer}
              </p>

              {/* Meta Info */}
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* Icon */}
            <div
              className={`w-12 h-12 ${color} bg-current/10 rounded-full flex items-center justify-center`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Courses */}
          {item.relevantCourses && item.relevantCourses.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Relevant Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.relevantCourses.map((course, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

         
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { ref, style } = useScrollReveal();

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-gray-900 pt-20"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div ref={ref} style={style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and continuous learning path in web
            development.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="max-w-6xl mx-auto">
          {[
            { key: "experience", label: "Professional Experience" },
            { key: "education", label: "Education" },
          
          ].map((section) => (
            <div key={section.key} className="mb-20">
              <motion.h3
                className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {section.label}
              </motion.h3>
              <div className="relative">
                {experienceData[section.key].map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    type={section.key.slice(0, -1)}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {experienceData.experience.length}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Roles
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {experienceData.education.length}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Degrees
              </p>
            </div>
            <div>
            
              
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {new Date().getFullYear() - 2019}+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
