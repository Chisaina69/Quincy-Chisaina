import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/quincylogowithbackground.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 h-[12vh] fixed z-[10000] bg-black shadow-md flex items-center justify-between px-4" role="navigation" aria-label="Main navigation">
      <Link to="/" aria-label="Home">
        <img src={logo} alt="Quincy Muyekwe - Software Engineer" className="h-20 mt-1 mb-1" />
      </Link>
      
      <div className="hidden md:flex space-x-4" role="menubar">
        <Link to="/" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" role="menuitem" aria-current={window.location.pathname === '/' ? 'page' : undefined}>
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" role="menuitem" aria-current={window.location.pathname === '/about' ? 'page' : undefined}>
          About
        </Link>
        <Link to="/services" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" role="menuitem" aria-current={window.location.pathname === '/services' ? 'page' : undefined}>
          Service
        </Link>
        <Link to="/project" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" role="menuitem" aria-current={window.location.pathname === '/project' ? 'page' : undefined}>
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" role="menuitem" aria-current={window.location.pathname === '/contact' ? 'page' : undefined}>
          Contact
        </Link>
      </div>

      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-[12vh] left-0 w-full bg-[#141c27] shadow-md flex flex-col items-center space-y-4 py-4"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <Link 
            to="/" 
            className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" 
            role="menuitem"
            onClick={() => setIsOpen(false)}
            aria-current={window.location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" 
            role="menuitem"
            onClick={() => setIsOpen(false)}
            aria-current={window.location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" 
            role="menuitem"
            onClick={() => setIsOpen(false)}
            aria-current={window.location.pathname === '/services' ? 'page' : undefined}
          >
            Services
          </Link>
          <Link 
            to="/project" 
            className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" 
            role="menuitem"
            onClick={() => setIsOpen(false)}
            aria-current={window.location.pathname === '/project' ? 'page' : undefined}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-yellow-400 hover:border-b-2 hover:border-white" 
            role="menuitem"
            onClick={() => setIsOpen(false)}
            aria-current={window.location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
