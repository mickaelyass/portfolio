import { useState } from 'react';
import { motion } from 'framer-motion';
import projet1 from '../assets/ptf1-landscape.png';
import projet2 from '../assets/pf2-portrait.png';
import projet4 from '../assets/codec-side.png';
import projet3 from '../assets/code2-front.png';
const projectsData = [
  { id: 1, title: 'GestiPerso', description: 'Développement d’une plateforme de gestion du personnel pour la DDS littoral avec Node.js/React', image:projet1, technologies: ['React', 'Node.js'] },
  { id: 2, title: "Carte d'invitation", description: "Conception de carte d'invitation pour soutenance de Doctorat en Médecine avec figma", image: projet2, technologies: ['Figma'] },
  {id: 3,title: 'GoPark',description: `Application de gestion de voitures autonomes en C++.`,
    image: projet3,
    technologies: ['C++', 'UML']
  },
  {
    id: 4,
    title: 'Système de gestion d’épicerie',
    description: `Développement d’une application console en C pour la gestion des stocks et des transactions.`,
    image: projet4,
    technologies: ['C', 'Listes chaînées']
  }
  ,
  {
    id: 5,
    title: "Installation et configuration d'OS ",
    description: `Installation de systèmes Windows et distributions Linux sur postes clients et serveurs.`,
    image: 'url_image_si_tu_as_une_capture_du_poste_ou_du_terminal',
    technologies: ['Windows', 'Linux', 'VirtualBox']
  }
  
  // Ajoute d'autres projets ici
];

function Projets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = projectsData.filter((project) =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(term))
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="projets" className="py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          Mes Projets
        </motion.h2>

        {/* Filtre de recherche */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full max-w-md border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Liste des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
          <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: project.id * 0.1 }}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          style={{ height: '300px' }}
        >
          {/* Image zoomable */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
        
          {/* Overlay + contenu */}
          <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center text-white px-4"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-lg">{project.title}</h3>
              <p className="mb-4 text-gray-100">{project.description}</p>
              <div className="flex flex-wrap justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        

          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
