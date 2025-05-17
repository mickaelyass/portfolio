import { motion } from 'framer-motion';
import React from 'react';
import profil from '../assets/profil.jpg';

function Apropos() {
  return (
    <div className="p-6 flex flex-col md:flex-row items-center gap-12 max-w-5xl  bg-gradient-to-r from-blue-700 to-purple-700 bg-opacity-90  mx-auto">
      
      {/* Image animée */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-60 h-65"
      >
        <img 
          src={profil} 
          alt="Profil" 
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>
      
      {/* Texte animé */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center md:text-left max-w-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">À propos de moi</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-100">
          Développeur backend junior, diplômé en <span className="font-semibold">Systèmes d’Information et Réseaux</span>, 
          je cherche à intégrer une entreprise innovante pour contribuer
          à des projets fullstack. Passionné par les
          technologies <span className="font-semiboldtext-gray-100">Node.js</span> et <span className="font-semibold text-gray-100">React</span>, 
          je combine rigueur mathématique et créativité technique.
        </p>
      </motion.div>

    </div>
  );
}

export default Apropos;
