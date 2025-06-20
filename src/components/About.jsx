import React from 'react';

const About = () => {
  return (
    <div className='bg-black pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 className='text-[20px] font-black uppercase text-[#55e6a5] mb-[1rem]'>ABOUT ME</h1>
          <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
            Transforming <span className='text-yellow-400'>Visions</span>
          </h2>
          <div className='mb-[3rem] flex items-center md:space-x-10'>
            <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
            <p className='text-[19px] text-slate-300 w-[80%]'>
              Hi, I'm a passionate software engineer with a strong focus on web development. With a background in both front-end and back-end development, I thrive on crafting intuitive and engaging user experiences. My journey in the tech world began with an insatiable curiosity for how things work and has since evolved into a full-blown love for creating elegant and efficient solutions.
            </p>
          </div>
          <div>
          <a 
            href="Quincy Muyekwe Chisaina.pdf" 
            download 
            className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
          >
            <p>Download CV</p>
          </a>
          </div>
        </div>
        <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] rounded-md shadow-lg relative'>
          <img
            src="/smile.JPG"
            alt="Quincy"
            className='relative z-[11] w-[100%] h-[100%] object-contain rounded-md shadow-lg'
          />
          <div className='absolute w-[100%] h-[100] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

