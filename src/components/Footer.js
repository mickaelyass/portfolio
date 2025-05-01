import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
    </footer>
  );
}

export default Footer;
