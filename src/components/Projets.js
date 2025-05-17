import { useState } from 'react';
import { motion } from 'framer-motion';
import projet1 from '../assets/ptf1-landscape.png';
import projet2 from '../assets/pf2-portrait.png';
import projet3 from '../assets/code2-front.png';
import projet4 from '../assets/codec-side.png';
import projet5 from '../assets/image-composite-numerique-ordinateur-portable-divers-symboles_1048944-13026027.jpg';

const projectsData = [
  { id: 1, title: 'GestiPerso', description: 'Développement d’une plateforme de gestion du personnel pour la DDS littoral avec Node.js/React', image: projet1, technologies: ['React', 'Node.js'] },
  { id: 2, title: "Carte d'invitation", description: "Conception de carte d'invitation pour soutenance de Doctorat en Médecine avec figma", image: projet2, technologies: ['Figma'] },
  { id: 3, title: 'GoPark', description: `Application de gestion de voitures autonomes en C++.`, image: projet3, technologies: ['C++', 'UML'] },
  { id: 4, title: 'Système de gestion d’épicerie', description: `Développement d’une application console en C pour la gestion des stocks et des transactions.`, image: projet4, technologies: ['C', 'Listes chaînées'] },
  { id: 5, title: "Installation et configuration d'OS", description: `Installation de systèmes Windows et distributions Linux sur postes clients et serveurs.`, image: projet5, technologies: ['Windows', 'Linux', 'VirtualBox'] },
];

function Projets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm))
  );

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projets" className="p-8 bg-gradient-to-r from-blue-700 to-purple-700 bg-opacity-90 text-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Mes Projets
        </motion.h2>

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full max-w-md border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-gray-800 pt-4 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover rounded-t-lg" />

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                <div className="flex flex-wrap mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {expandedProjectId === project.id && (
                  <p className="text-gray-300 mb-4">{project.description}</p>
                )}

                <button
                  onClick={() => toggleExpand(project.id)}
                  className="mt-auto text-sm text-blue-400 hover:text-blue-600 font-medium"
                >
                  {expandedProjectId === project.id ? '− Réduire' : '+ Voir plus'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
