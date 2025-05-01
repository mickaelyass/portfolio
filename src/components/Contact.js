import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaGlobe, FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-600 mb-12"
        >
          Contactez-moi
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mes coordonnées</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" /> (+229) 90 83 14 18
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" /> 01 BP 3187 Abomey-Calavi
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" /> yassegoungbeseton@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-blue-600" /> <a href="https://github.com/mickaelyass" target="_blank" rel="noreferrer" className="hover:underline">github.com/mickaelyass</a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-blue-600" /> <a href="https://mickaels-projects-c86ff2e4.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
              </li>
            </ul>
          </motion.div>

          {/* Formulaire */}
          <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formulaire de contact</h3>

              <div>
                <label htmlFor="name" className="text-sm text-gray-700 mb-1 block">Nom complet</label>
                <input type="text" id="name" placeholder="Votre nom" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-gray-700 mb-1 block">Email</label>
                <input type="email" id="email" placeholder="Votre email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-gray-700 mb-1 block">Sujet</label>
                <input type="text" id="subject" placeholder="Sujet" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-gray-700 mb-1 block">Message</label>
                <textarea id="message" rows="4" placeholder="Votre message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg font-medium transition duration-300">
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>

        {/* Toast notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg z-50"
            >
              <FaCheckCircle className="text-white text-xl" />
              <span>Message envoyé avec succès !</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
