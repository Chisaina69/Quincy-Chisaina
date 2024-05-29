import React from 'react';
import Particle from '../Particles';
import Textstyle from '../Textstyles';
import selfie from '/selfie.jpg'; // Ensure the correct path to your image
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const Home = () => {
  return (
    <div className='relative h-[88vh] bg-cover bg-center'>
      <Particle />
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
           <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55a6a5] text-black items-center space-x-2 '>
            <p>Download Cv</p>
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black '/>
           </button>
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
  );
};

export default Home;
