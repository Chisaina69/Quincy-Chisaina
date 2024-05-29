import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/quincylogowithbackground.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full top-0 h-[12vh] sticky z-[10000] bg-black shadow-md flex items-center justify-between px-4">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-20 mt-1 mb-1" />
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white">
          About
        </Link>
        <Link to="/services" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white">
          Service
        </Link>
        <Link to="/portfolio" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white">
          Portfolio
        </Link>
        <Link to="/contact" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white">
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[12vh] left-0 w-full bg-[#141c27] shadow-md flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/services" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/portfolio" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
