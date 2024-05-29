import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black  text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.linkedin.com/in/me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4"
          >
            <FaLinkedin className="text-2xl text-blue-700" />
          </a>
          <a
            href="https://github.com/Chisaina69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://wa.me/+254797646598"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
        </div>
        <p className="text-sm text-white">
          &copy; 2024 Quincy Muyekwe. All rights reserved.
        </p>
        <p className="text-sm mt-1 text-white">
          Built with React | Designed by Quincy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
