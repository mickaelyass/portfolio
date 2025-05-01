import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      category: "Backend",
      items: [
        "Node.js / Express.js (Intermédiaire)",
        "Nest.js (Débutant)",
        "Django (Débutant)",
        "API REST",
        "PostgreSQL",
      ],
    },
    {
      category: "Frontend",
      items: [
        "HTML, CSS (Bootstrap)",
        "React (Intermédiaire)",
        "Vue.js (Débutant)",
      ],
    },
    {
      category: "Outils",
      items: ["Git", "Docker (Notion)", "Figma"],
    },
    {
      category: "Systèmes",
      items: [
        "Maîtrise de Linux",
        "Installation Windows et Linux",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Modélisation UML",
        "Adaptabilité",
        "Résolution de problèmes",
        "Apprentissage rapide",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-blue-600 mb-12"
        >
          Mes Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                {skillCategory.category}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {skillCategory.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
