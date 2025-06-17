import React, { useState, useEffect } from 'react';
import Particle from '../Particles';
import Textstyle from '../Textstyles';
import selfie from '/selfie.jpg'; 
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'; 
import { Helmet } from 'react-helmet';
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

  // Structured data for personal information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Quincy Muyekwe",
    "jobTitle": "Software Engineer",
    "description": "Passionate software engineer with a strong focus on web development. Dedicated to coding, problem-solving, and expanding expertise in software development.",
    "url": "https://your-portfolio-url.com",
    "sameAs": [
      "https://www.linkedin.com/in/quincy-muyekwe-794248212/",
      "https://github.com/Chisaina69"
    ],
    "image": selfie
  };

  return (
    <>
      <Helmet>
        <title>Quincy Muyekwe | Software Engineer & Web Developer</title>
        <meta name="description" content="Quincy Muyekwe is a passionate software engineer specializing in web development. Explore my portfolio showcasing full-stack development projects and technical expertise." />
        <meta name="keywords" content="Quincy Muyekwe, Software Engineer, Web Developer, Full Stack Developer, React Developer, Portfolio" />
        <meta property="og:title" content="Quincy Muyekwe | Software Engineer & Web Developer" />
        <meta property="og:description" content="Passionate software engineer with expertise in web development and full-stack solutions." />
        <meta property="og:image" content={selfie} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quincy Muyekwe | Software Engineer & Web Developer" />
        <meta name="twitter:description" content="Passionate software engineer with expertise in web development and full-stack solutions." />
        <meta name="twitter:image" content={selfie} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className='relative h-[88vh] mt-[10vh] bg-cover bg-center'>
        <div className='absolute inset-0'>
          <Particle />
        </div>
        <div className='relative z-10 w-[80%] mx-auto grid-cols-1 grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
          <section aria-label="Introduction">
            <h1 className='text-[35px] md:text-[50px] text-white font-black'>
              HI, I'M <span className='text-yellow-400'>QUINCY</span>
            </h1>
            <Textstyle /> 
            <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
              Passionate software engineer with a strong focus on web development. Dedicated to coding, problem-solving, and expanding expertise in software development.
            </p>
            <nav className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6' aria-label="Social Media Links">
              <a 
                href="https://www.linkedin.com/in/quincy-muyekwe-794248212/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-blue-700 text-3xl'
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/Chisaina69" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-white hover:text-gray-400 text-3xl'
                aria-label="Visit my GitHub profile"
              >
                <FaGithub />
              </a>
            </nav>
          </section>
          <figure className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
            <img
              src={selfie}
              alt='Quincy Muyekwe - Software Engineer'
              className='object-cover rounded-full w-full h-full'
              loading="eager"
            />
          </figure>
        </div>
      </main>
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
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
