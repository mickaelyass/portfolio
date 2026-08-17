
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">

      <Header />

      <main className="flex-grow pt-20">

        {/* =========================
            ACCUEIL
        ========================== */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Home />
        </motion.section>


        {/* =========================
            PROJETS
        ========================== */}
        <motion.section
          id="projets"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Projets />
        </motion.section>


        {/* =========================
            À PROPOS
        ========================== */}
        <motion.section
          id="apropos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Apropos />
        </motion.section>


        {/* =========================
            COMPÉTENCES
        ========================== */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Skills />
        </motion.section>


        {/* =========================
            CONTACT
        ========================== */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Contact />
        </motion.section>

      </main>

      <Footer />

    </div>
  );
}

export default Layout;

