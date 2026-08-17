
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";

import projet1 from "../assets/ptf1-landscape.png";
import projet2 from "../assets/biostats.png";
import projet3 from "../assets/code2-front.png";
import projet4 from "../assets/codec-side.png";
import projet5 from "../assets/image-composite-numerique-ordinateur-portable-divers-symboles_1048944-13026027.jpg";
import projet6 from "../assets/voix_africaine.png";
import projet7 from "../assets/clone_upwork.png";

const projectsData = [
  {
    id: 1,
    title: "YASS BioAnalytics",
    description:
      "Application d'analyse biostatistique assistée par intelligence artificielle, développée pour faciliter l'analyse et l'interprétation des données de santé.",
    image: projet2,
    technologies: ["R", "RStudio", "Shiny", "IA", "Biostatistique"],
    category: "Data & IA",
    featured: true,
  },

  {
    id: 2,
    title: "GestiPerso",
    description:
      "Plateforme de gestion du personnel conçue lors d'un stage à la Direction Départementale de la Santé du Littoral. Développement d'API REST sécurisées et d'une interface web.",
    image: projet1,
    technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
    category: "Développement Web",
    featured: true,
  },

  {
    id: 3,
    title: "Voix_Africaine",
    description:
      "Plateforme web de gestion d'œuvres littéraires permettant d'organiser les contenus par chapitres et de gérer les ressources audio associées.",
    image: projet6,
    technologies: ["FastAPI", "Python", "React", "Cloudinary"],
    category: "Développement Web",
    featured: true,
  },

  {
    id: 4,
    title: "Up Travail",
    description:
      "Conception d'un clone de la plateforme Upwork afin d'explorer l'architecture d'une application web de mise en relation entre utilisateurs.",
    image: projet7,
    technologies: ["Nest.js", "React", "MongoDB", "Prisma"],
    category: "Développement Web",
  },

  {
    id: 5,
    title: "GoPark",
    description:
      "Projet académique autour de la modélisation et de la gestion d'un système de voiture autonome en C++, avec conception UML et gestion des rôles.",
    image: projet3,
    technologies: ["C++", "UML"],
    category: "Projet académique",
  },

  {
    id: 6,
    title: "Système de gestion d'épicerie",
    description:
      "Application console développée en C pour la gestion des stocks, des produits et des transactions.",
    image: projet4,
    technologies: ["C", "Listes chaînées"],
    category: "Projet académique",
  },

  {
    id: 7,
    title: "Installation & configuration de systèmes",
    description:
      "Travaux pratiques autour de l'installation et de la configuration de systèmes Windows et Linux sur différents environnements.",
    image: projet5,
    technologies: ["Windows", "Linux", "VirtualBox"],
    category: "Systèmes",
  },
];

function Projets() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search)
      )
    );
  });

  return (
    <section id="projets" className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* =========================
            EN-TÊTE
        ========================== */}
        <div className="text-center mb-12">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mes projets
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Une sélection de projets réalisés dans les domaines du
            développement logiciel, de la Data, de l'intelligence artificielle
            et des systèmes d'information.
          </p>

        </div>


        {/* =========================
            RECHERCHE
        ========================== */}
        <div className="flex justify-center mb-10">

          <div className="relative w-full max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-3
                bg-white
                border
                border-slate-200
                rounded-xl
                text-slate-700
                placeholder:text-slate-400
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                transition
              "
            />

          </div>

        </div>


        {/* =========================
            PROJETS
        ========================== */}
        {filteredProjects.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map((project, index) => (

              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  {/* Catégorie */}
                  <div className="absolute top-4 left-4">

                    <span className="
                      inline-flex
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/95
                      backdrop-blur-sm
                      text-xs
                      font-semibold
                      text-slate-700
                      shadow-sm
                    ">
                      {project.category}
                    </span>

                  </div>

                </div>


                {/* Contenu */}
                <div className="p-5 flex flex-col flex-grow">

                  <div className="flex items-start justify-between gap-3 mb-3">

                    <h3 className="
                      text-xl
                      font-bold
                      text-slate-900
                      group-hover:text-blue-600
                      transition-colors
                    ">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="
                        flex-shrink-0
                        text-slate-300
                        group-hover:text-blue-600
                        transition-colors
                      "
                    />

                  </div>


                  <p className="
                    text-sm
                    text-slate-600
                    leading-relaxed
                    mb-5
                    flex-grow
                  ">
                    {project.description}
                  </p>


                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          px-2.5
                          py-1
                          rounded-md
                          bg-slate-100
                          text-slate-600
                          text-xs
                          font-medium
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        ) : (

          <div className="
            text-center
            py-16
            bg-white
            border
            border-slate-200
            rounded-2xl
          ">

            <p className="text-slate-500">
              Aucun projet ne correspond à votre recherche.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Projets;

