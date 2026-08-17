
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logod.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

        {/* Logo + Nom */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-slate-900">
              Yassegoungbe
            </h1>

            <p className="text-xs text-slate-500">
              Software & Data
            </p>
          </div>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#home"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Accueil
          </a>

          <a
            href="#apropos"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            À propos
          </a>

          <a
            href="#projets"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Projets
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            Compétences
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-slate-200 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-1">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
            >
              Accueil
            </a>

            <a
              href="#apropos"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
            >
              À propos
            </a>

            <a
              href="#projets"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
            >
              Projets
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
            >
              Compétences
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition"
            >
              Contact
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}

export default Header;
