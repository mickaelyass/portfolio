
import { Download, ArrowRight } from "lucide-react";
import profil from "../assets/y.jpg";

function Home() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center py-8 px-4">

      <div className="max-w-6xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* =========================
              CONTENU TEXTE
          ========================== */}
          <div className="text-center md:text-left">

            {/* Petit label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>

              <span className="text-sm font-medium text-blue-700">
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Présentation */}
            <p className="text-lg text-slate-500 mb-3">
              Bonjour, je suis
            </p>

         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
  Yassegoungbe
  <span className="block text-blue-600">
    S. Mickael Bonheur
  </span>
</h2>

            {/* Fonction */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6">
              Développeur Software & Data
            </h2>

            {/* Spécialités */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
                IA
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
                Data
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
                Biostatistique
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
                Développement logiciel
              </span>

            </div>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Je conçois des solutions logicielles et des outils Data adaptés
              aux besoins des utilisateurs. Mon approche combine développement
              logiciel, analyse de données, biostatistique et intégration de
              technologies d’intelligence artificielle, notamment dans le
              domaine de la santé.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                <Download size={19} />
                Télécharger mon CV
              </a>

              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              >
                Voir mes projets
                <ArrowRight size={19} />
              </a>

            </div>

            {/* Technologies principales */}
            <div className="mt-10 pt-6 border-t border-slate-200">

              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Technologies principales
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-500">

                <span>Python</span>
                <span>R / Shiny</span>
                <span>Node.js</span>
                <span>React</span>
                <span>SQL</span>

              </div>

            </div>

          </div>


          {/* =========================
              PHOTO
          ========================== */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* Cercle décoratif */}
              <div className="absolute -inset-4 rounded-full bg-blue-50 -z-10"></div>

              {/* Photo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">

                <img
                  src={profil}
                  alt="Yassegoungbe S. Mickael Bonheur"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-0 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3">

                <p className="text-xs text-slate-400 mb-1">
                  Spécialisation
                </p>

                <p className="text-sm font-semibold text-slate-800">
                  Software • Data • IA
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;

