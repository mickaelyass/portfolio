import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaGlobe, FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    const serviceID = 'service_n0oqptp';
    const templateID = 'template_v7xeqjb';
    const publicKey = 'YJlnFWRToFxc0san9';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Message envoyé !', response);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi :', error);
        alert('Erreur lors de l\'envoi du message !');
      });
  };



  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-blue-700 to-purple-700 bg-opacity-90">
      <div className="max-w-screen-lg mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-100 mb-12"
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
                <FaMapMarkerAlt className="text-blue-600" /> 01 BP 3187 Porto-Novo
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
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-700 mb-1 block">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm text-gray-700 mb-1 block">Sujet</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-gray-700 mb-1 block">Message</label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg font-medium transition duration-300"
        >
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
