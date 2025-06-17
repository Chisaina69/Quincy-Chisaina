import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Contact = () => {
  // Structured data for contact information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Quincy Muyekwe",
    "jobTitle": "Software Engineer",
    "telephone": "+254 797646598",
    "email": ["muyekwequincy@gmail.com", "muyekwe11@gmail.com"],
    "sameAs": [
      "https://www.linkedin.com/in/quincy-muyekwe-794248212/",
      "https://github.com/Chisaina69"
    ]
  };

  return (
    <section
      className='bg-black py-[5rem] md:py-[10rem] bg-cover bg-center relative'
      style={{
        backgroundImage: "url('/Background.jpg')",
      }}
      aria-label="Contact Information"
    >
      <Helmet>
        <title>Contact Quincy Muyekwe | Software Engineer & Web Developer</title>
        <meta name="description" content="Get in touch with Quincy Muyekwe, a professional software engineer and web developer. Available for projects, collaborations, and opportunities." />
        <meta name="keywords" content="contact, software engineer, web developer, Quincy Muyekwe, hire developer" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Overlay for better text visibility */}
      <div className='absolute inset-0 bg-black opacity-50' aria-hidden="true"></div>
      
      <div className='relative'>
        <header>
          <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase mb-[4rem]'>
            Contact <span className='text-yellow-400'>Me</span>
          </h1>
        </header>

        <div className='w-[80%] mx-auto text-center text-white'>
          <p className='text-lg mb-4'>
            I'm always excited to work on new projects and connect with professionals. If you have any questions, collaboration ideas, or just want to say hello, feel free to reach out to me through the following contact details or connect with me on social media.
          </p>
          
          <nav className='flex flex-col items-center space-y-4 mt-8' aria-label="Contact Methods">
            <div className='flex items-center space-x-4'>
              <FaPhoneAlt className='text-yellow-400 text-2xl' aria-hidden="true" />
              <a href="tel:+254797646598" className='text-lg hover:text-yellow-400 transition-all duration-300'>
                +254 797646598
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaEnvelope className='text-teal-400 text-2xl' aria-hidden="true" />
              <a href="mailto:muyekwequincy@gmail.com" className='text-lg hover:text-teal-500 transition-all duration-300'>
                muyekwequincy@gmail.com
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaEnvelope className='text-teal-400 text-2xl' aria-hidden="true" />
              <a href="mailto:muyekwe11@gmail.com" className='text-lg hover:text-teal-500 transition-all duration-300'>
                muyekwe11@gmail.com
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaLinkedin className='text-teal-400 text-2xl' aria-hidden="true" />
              <a 
                href="https://www.linkedin.com/in/quincy-muyekwe-794248212/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-lg hover:text-teal-500 transition-all duration-300'
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <FaGithub className='text-teal-400 text-2xl' aria-hidden="true" />
              <a 
                href="https://github.com/Chisaina69" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-lg hover:text-teal-500 transition-all duration-300'
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Contact;
