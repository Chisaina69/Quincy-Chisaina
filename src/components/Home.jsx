import React from 'react';
import Particle from '../Particles';
import Textstyle from '../Textstyles';
import selfie from '/selfie.jpg'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import About from './About';
import Services from './Services';
import Skill from './Skills';

const Home = () => {
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
              Passionate software engineer with a strong focus on web development. Dedicated to coding, problem-solving, and expanding expertise in software development. Interested in gaming, anime, and spending quality time with my loyal companion, Ashley.
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
      </div>
    
  
    </>
  );
};

export default Home;

