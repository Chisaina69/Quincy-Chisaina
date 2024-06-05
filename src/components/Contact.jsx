import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className='bg-black py-[5rem] md:py-[10rem] bg-cover bg-center relative'
      style={{
        backgroundImage: "url('/Background.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative'>
        <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase mb-[4rem]'>
          Contact <span className='text-yellow-400'>Me</span>
        </h1>
        <div className='w-[80%] mx-auto text-center text-white'>
          <p className='text-lg mb-4'>
            I'm always excited to work on new projects and connect with professionals. If you have any questions, collaboration ideas, or just want to say hello, feel free to reach out to me through the following contact details or connect with me on social media.
          </p>
          <div className='flex flex-col items-center space-y-4 mt-8'>
            <div className='flex items-center space-x-4'>
              <FaPhoneAlt className='text-yellow-400 text-2xl' />
              <span className='text-lg'>+254 797646598</span>
            </div>
            <div className='flex items-center space-x-4'>
              <FaEnvelope className='text-teal-400 text-2xl' />
              <a href="mailto:muyekwequincy@gmail.com" className='text-lg hover:text-teal-500 transition-all duration-300'>
                muyekwequincy@gmail.com
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaEnvelope className='text-teal-400 text-2xl' />
              <a href="mailto:secondemail@example.com" className='text-lg hover:text-teal-500 transition-all duration-300'>
                muyekwe11@gmail.com
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaLinkedin className='text-teal-400 text-2xl' />
              <a href="https://www.linkedin.com/in/me/" target="_blank" rel="noopener noreferrer" className='text-lg hover:text-teal-500 transition-all duration-300'>
                LinkedIn
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaGithub className='text-teal-400 text-2xl' />
              <a href="https://github.com/Chisaina69" target="_blank" rel="noopener noreferrer" className='text-lg hover:text-teal-500 transition-all duration-300'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
