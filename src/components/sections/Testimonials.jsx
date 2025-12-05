// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useScrollReveal } from '@hooks/useScrollReveal';
// import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CEO, TechStartup Inc.",
//     company: "TechStartup Inc.",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//     content: "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, technical expertise, and ability to understand our business needs made the project a huge success. The platform handles thousands of transactions daily without any issues.",
//     rating: 5,
//     project: "E-Commerce Platform"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Product Manager",
//     company: "Digital Solutions Corp",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//     content: "Working with John was a fantastic experience. He transformed our complex requirements into a user-friendly task management application that our team loves. His communication skills and problem-solving abilities are outstanding.",
//     rating: 5,
//     project: "Task Management App"
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Marketing Director",
//     company: "Global Marketing Agency",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//     content: "John created a stunning corporate website for our company that perfectly represents our brand. The site is fast, responsive, and easy to manage. His expertise in WordPress development is truly impressive.",
//     rating: 5,
//     project: "Corporate Website"
//   },
//   {
//     id: 4,
//     name: "David Thompson",
//     role: "Founder",
//     company: "EduTech Innovations",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     content: "The learning management system John built for us has revolutionized how we deliver online education. The platform is scalable, feature-rich, and our students love the intuitive interface. Highly recommended!",
//     rating: 5,
//     project: "Learning Management System"
//   },
//   {
//     id: 5,
//     name: "Lisa Park",
//     role: "Business Owner",
//     company: "Creative Agency",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
//     content: "John's portfolio generator tool has been a game-changer for our clients. The ability to create custom portfolio websites quickly and efficiently has added tremendous value to our service offerings.",
//     rating: 5,
//     project: "Portfolio Generator"
//   }
// ];

// const TestimonialCard = ({ testimonial, isActive }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: isActive ? 0 : 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: isActive ? 0 : -50 }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="glass rounded-2xl p-8 max-w-4xl mx-auto"
//     >
//       {/* Quote Icon */}
//       <div className="flex justify-center mb-6">
//         <Quote className="w-12 h-12 text-primary/30" />
//       </div>

//       {/* Content */}
//       <div className="text-center mb-8">
//         <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//           "{testimonial.content}"
//         </p>
        
//         {/* Rating */}
//         <div className="flex justify-center space-x-1 mb-4">
//           {[...Array(testimonial.rating)].map((_, index) => (
//             <Star
//               key={index}
//               className="w-5 h-5 text-yellow-400 fill-current"
//             />
//           ))}
//           {[...Array(5 - testimonial.rating)].map((_, index) => (
//             <Star
//               key={index}
//               className="w-5 h-5 text-gray-300 dark:text-gray-600"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Author Info */}
//       <div className="flex items-center justify-center space-x-4">
//         <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
//           {testimonial.image ? (
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-full h-full rounded-full object-cover"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'flex';
//               }}
//             />
//           ) : null}
//           <div 
//             className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center"
//             style={{ display: testimonial.image ? 'none' : 'flex' }}
//           >
//             <User className="w-8 h-8 text-white" />
//           </div>
//         </div>
        
//         <div className="text-left">
//           <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
//             {testimonial.name}
//           </h4>
//           <p className="text-gray-600 dark:text-gray-400">
//             {testimonial.role}
//           </p>
//           <p className="text-sm text-primary font-medium">
//             {testimonial.project}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { ref, style } = useScrollReveal();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto">
//         <motion.div
//           ref={ref}
//           style={style}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="gradient-text">Client Testimonials</span>
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             What my clients and colleagues say about working with me
//           </p>
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
//           </button>

//           {/* Testimonial Cards */}
//           <div className="relative min-h-[400px] flex items-center">
//             <AnimatePresence mode="wait">
//               <TestimonialCard
//                 key={currentIndex}
//                 testimonial={testimonials[currentIndex]}
//                 isActive={true}
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center space-x-2 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? 'bg-primary w-8'
//                   : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//         >
//           <div className="glass rounded-xl p-6">
//             <div className="text-3xl font-bold text-primary mb-2">
//               {testimonials.length}
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 font-medium">
//               Happy Clients
//             </p>
//           </div>
          
//           <div className="glass rounded-xl p-6">
//             <div className="text-3xl font-bold text-yellow-500 mb-2">
//               {testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length}
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 font-medium">
//               Average Rating
//             </p>
//           </div>
          
//           <div className="glass rounded-xl p-6">
//             <div className="text-3xl font-bold text-green-500 mb-2">
//               100%
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 font-medium">
//               Satisfaction Rate
//             </p>
//           </div>
          
//           <div className="glass rounded-xl p-6">
//             <div className="text-3xl font-bold text-purple-500 mb-2">
//               24/7
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 font-medium">
//               Support Available
//             </p>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center glass rounded-2xl p-8"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//             Ready to be the next success story?
//           </h3>
//           <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//             Join the growing list of satisfied clients who have transformed their ideas into reality. 
//             Let's discuss how we can achieve similar results for your project.
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>Start Your Project</span>
//             <Star className="w-5 h-5" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;