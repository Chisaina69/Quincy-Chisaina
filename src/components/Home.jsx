import React, { useState, useEffect } from 'react';
import Particle from '../Particles';
import Textstyle from '../Textstyles';
import selfie from '/selfie.jpg'; 
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'; 
import About from './About';
import Services from './Services';
import Skill from './Skills';
import Project from './Projects';
import Footer from './Footer';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='relative h-[88vh] mt-[10vh] bg-cover bg-center'>
        <div className='absolute inset-0'>
          <Particle />
        </div>
        <div className='relative z-10 w-[80%] mx-auto grid-cols-1 grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
          <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-black'>
              HI, I'M <span className='text-yellow-400'>QUINCY</span>
            </h1>
            <Textstyle /> 
            <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
              Passionate software engineer with a strong focus on web development. Dedicated to coding, problem-solving, and expanding expertise in software development.
            </p>
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
              <a 
                href="https://www.linkedin.com/in/me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-blue-700 text-3xl'
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/Chisaina69" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-white hover:text-gray-400 text-3xl'
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
            <img
              src={selfie}
              alt='user'
              className='object-cover rounded-full w-full h-full'
            />
          </div>
        </div>
      </div>
      <div className='relative z-[30]'>
        <About />
        <Services/>
        <Skill/>
        <Project/>
        <Footer/>
        {showScrollButton && (
          <button
            className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
