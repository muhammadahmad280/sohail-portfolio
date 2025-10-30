import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@contexts/ThemeContext';
import { motion } from 'framer-motion';

// Components
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Skills from '@components/sections/Skills';
import Portfolio from '@components/sections/Portfolio';
import Experience from '@components/sections/Experience';
// import Testimonials from '@components/sections/Testimonials';
import Contact from '@components/sections/Contact';

// Scroll to top component
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

// Main Layout Component
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
    </motion.div>
  );
};

// App Component
function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add additional routes here if needed */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;