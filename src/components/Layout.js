import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projets from './Projets';
import Apropos from './Apropos';
import { motion } from 'framer-motion';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-teal-400 to-yellow-200">
      <Header />
      {/* Ajout du padding-top pour compenser la hauteur du header fixe */}
      <main className="flex-grow pt-20 bg-no-repeat bg-contain pb-8">
        <motion.section 
          id="home"
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 1 }}
          className=" scroll-section max-w-screen-lg mx-auto px-4"
        >
          <Home />
        </motion.section>

        <motion.section 
          id="projets"
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className=" scroll-section max-w-screen-lg mx-auto px-4"
        >
          <Projets />
        </motion.section>

        <motion.section 
          id="apropos"
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className=" scroll-section max-w-screen-lg mx-auto px-4"
        >
          <Apropos />
        </motion.section>

        <motion.section 
          id="skills"
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className=" scroll-section max-w-screen-lg mx-auto px-4"
        >
          <Skills />
        </motion.section>

        <motion.section 
          id="contact"
          whileInView={{ opacity: 1 }} 
          initial={{ opacity: 0 }} 
          transition={{ duration: 1, delay: 0.8 }}
          className=" scroll-section max-w-screen-lg mx-auto px-4"
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
