import { Download } from 'lucide-react';
import profil from '../assets/y.jpg';

function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-10 px-4 min-h-[calc(100vh-64px)] relative">

      {/* Conteneur image de profil */}
      <div className="relative w-60 aspect-square rounded-full  shadow-xl overflow-hidden mb-6 hover:scale-105 transition duration-300">
        <img
          src={profil}
          alt="Profil"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Titre & sous-titre */}
      <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-md">
        Salut, moi c'est <span className="text-yellow-300">YASSEGOUNGBE S Mickael</span> 👋
      </h1>
      <h2 className="text-xl font-medium mb-4 text-white opacity-90">
        Développeur Web & Mobile • Passionné de Tech
      </h2>

      {/* Courte description */}
      <p className="max-w-xl text-lg mb-8 text-white opacity-90 leading-relaxed">
        Je conçois des applications web modernes, responsives et performantes. N’hésitez pas à explorer mes projets et compétences plus bas !
      </p>

      {/* Bouton de téléchargement du CV */}
      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center bg-white text-teal-600 font-semibold py-3 px-6 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300 shadow-lg"
      >
        <Download className="mr-2" /> Télécharger mon CV
      </a>
    </section>
  );
}

export default Home;
