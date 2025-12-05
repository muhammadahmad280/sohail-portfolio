import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { ChevronDown, MousePointer, Sparkles } from "lucide-react";
import profileImg from "../../assets/Sohail.jpeg"; // <-- correct import

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Laravel Developer",
        "Backend Engineer",
        "API Specialist",
        "Database Architect",
        "Problem Solver",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(270deg, #1e3a8a, #3b82f6, #1e40af, #2563eb)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 15s ease infinite",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 md:px-6">
        {/* Animated Icons */}
        <motion.div
          className="absolute -top-8 -left-8"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -right-8"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Hero Content: Text + Photo */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Sohail Sardar
                </span>
              </h1>
            </motion.div>

            {/* Typed Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold h-10 md:h-12">
                <span ref={typedRef} />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8"
            >
              I specialize in building secure, scalable, and high-performance
              web applications using{" "}
              <span className="text-red-500 font-bold">Laravel</span>,{" "}
              <span className="text-blue-500 font-bold">
                My<span className="text-orange-500">SQL</span>
              </span>
              , and{" "}
              <span className="text-gray-200 font-bold">RESTful APIs</span>. My
              passion lies in crafting clean backend architectures that bring
              ideas to life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-800 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Projects
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                Hire Me
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src={profileImg}
                alt="Sohail Sardar"
                width={240}
                height={240}
                className="w-full h-full object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              />
            </div>

            {/* Floating Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-white/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <MousePointer className="w-5 h-5 mb-1" />
            <ChevronDown className="w-5 h-5" />
          </motion.div>
          <p className="text-xs md:text-sm text-white/70">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
