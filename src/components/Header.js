import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logod.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-800 to-purple-800

 text-white p-6 flex justify-between items-center shadow-lg"
    >
      <div className="flex items-center space-x-8">
        <img src={logo} alt="Logo" className="h-10 w-25 rounded-full" />
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>
      </div>

      <nav className="hidden md:flex space-x-4 px-3">
        <a href="#home" className="hover:underline hover:text-blue-300 transition duration-300">Home</a>
        <a href="#apropos" className="hover:underline hover:text-blue-300 transition duration-300">À propos</a>
        <a href="#projets" className="hover:underline hover:text-blue-300 transition duration-300">Projets</a>
        <a href="#skills" className="hover:underline hover:text-blue-300 transition duration-300">Compétences</a>
        <a href="#contact" className="hover:underline hover:text-blue-300 transition duration-300">Contact</a>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white text-black rounded shadow-lg p-4 space-y-2 z-50">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block">Home</a>
          <a href="#apropos" onClick={() => setMenuOpen(false)} className="block">À propos</a>
          <a href="#projets" onClick={() => setMenuOpen(false)} className="block">Projets</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="block">Compétences</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
