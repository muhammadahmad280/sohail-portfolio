import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@hooks/useScrollReveal';
import { Award, Users, Code, Briefcase, GraduationCap, Zap } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration / end) * (end > 100 ? 10 : 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const { ref, style } = useScrollReveal({ delay: 200 });

const stats = [
  { icon: Code, value: 40, suffix: '+', label: 'Laravel Projects', color: 'text-blue-500' },
  { icon: Users, value: 20, suffix: '+', label: 'Happy Clients', color: 'text-green-500' },
  { icon: Briefcase, value: 8, suffix: '+', label: 'Years Experience', color: 'text-purple-500' },
  { icon: Award, value: 8, suffix: '+', label: 'Certifications', color: 'text-yellow-500' },
  { icon: Zap, value: 60, suffix: '+', label: 'Successful Deployments', color: 'text-red-500' },
  { icon: GraduationCap, value: 15, suffix: '+', label: 'Team Collaborations', color: 'text-pink-500' },
];

  const skills = [
    'Laravel Framework', 'RESTful APIs', 'MySQL', 'PHP', 'Blade Templates',
    'Eloquent ORM', 'Authentication', 'Role-Based Access', 'API Integration',
    'Database Optimization', 'Server Deployment', 'Git & GitHub'
  ];

  return (
   <section
  id="about"
  className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
>
  <div className="container mx-auto max-w-6xl px-4">
    <motion.div ref={ref} style={style} className="text-center mb-10 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">About Me</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Passionate Laravel Developer focused on building secure, scalable, and high-performance backend systems.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <div className="glass rounded-xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Laravel Developer & Backend Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Crafting efficient and scalable web solutions
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m a backend developer specializing in <strong>Laravel, PHP, and MySQL</strong>.
            I build structured, optimized, and secure server-side applications and RESTful APIs
            that power dynamic web experiences.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My focus is on creating reliable business logic, integrating third-party services,
            and ensuring seamless communication between frontend and backend systems.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-sm font-medium rounded-full gradient-text"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-5"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-5 text-center hover:shadow-md transition-all"
          >
            <div
              className={`w-10 h-10 ${stat.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-3`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

   
  </div>
</section>

  );
};

export default About;
