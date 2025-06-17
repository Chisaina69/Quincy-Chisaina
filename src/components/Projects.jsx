import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';

const Project = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      src: "/Skillcode-web.png",
      alt: "School based Full-stack Webpage",
      link: "https://skill-code-9pv0.onrender.com/",
      description: "This is a full-stack webpage designed for schools. It includes various features for managing school exams and resources.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React", "(Flask)Python"],
      aos: "fade-up",
      aosDelay: "0",
    },
    {
      src: "/Zealtech-web.png",
      alt: "Business Intelligence company made by React",
      link: "https://www.zealtechdata.co.ke/",
      description: "Zealtech is a Kenyan business intelligence platform built using React. It provides analytics and insights for businesses.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React"],
      aos: "fade-up",
      aosDelay: "300",
    },
    {
      src: "/Playnation-web.png",
      alt: "Games den made with HTML/CSS",
      link: "https://github.com/Chisaina69/Play-Nation",
      description: "Playnation is a gaming den website created with HTML and CSS, offering a variety of games and gaming news.",
      languages: ["HTML", "CSS", "JavaScript"],
      aos: "fade-up",
      aosDelay: "600",
    },
    {
      src: "/Cocktaily-web.png",
      alt: "Cocktail recipes made with HTML/CSS",
      link: "https://cocktaiily.netlify.app/",
      description: "Cocktaily is a website for cocktail recipes made with HTML and CSS. It provides detailed recipes and mixing instructions.",
      languages: ["HTML", "TailwindCSS", "JavaScript"],
      aos: "fade-up",
      aosDelay: "900",
    },
    {
      src: "/WamalwaSurveyors-web.png",
      alt: "Surveyors site made with HTML/CSS",
      link: "https://wamalwa-surveyors.onrender.com/",
      description: "Wamalwa Surveyors is a professional Kenyan surveying service website built using React, offering surveying solutions.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React"],
      aos: "fade-up",
      aosDelay: "1200",
    },
    {
      src: "/Koshy Travel & Tours - Safaris & Flights - Google Chrome 17_06_2025 11_24_28.png",
      alt: "Travel and Tourism website",
      link: "https://koshy-travel.onrender.com/",
      description: "Koshy Travel is a modern travel and tourism website that showcases travel destinations and services. Built with React and styled with TailwindCSS.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React"],
      aos: "fade-up",
      aosDelay: "1500",
    },
  ];

  const toggleDetails = (index, event) => {
    event.preventDefault();
    setVisibleProject(visibleProject === index ? null : index);
  };

  // Structured data for projects
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebApplication",
        "name": project.alt,
        "description": project.description,
        "url": project.link,
        "applicationCategory": "WebApplication",
        "programmingLanguage": project.languages
      }
    }))
  };

  return (
    <section 
      className='bg-black py-[5rem] md:py-[10rem]'
      aria-label="Projects Portfolio"
    >
      <Helmet>
        <title>My Projects Portfolio | Web Development Projects</title>
        <meta name="description" content="Explore my portfolio of web development projects including full-stack applications, business websites, and interactive web experiences built with modern technologies." />
        <meta name="keywords" content="web development, React projects, full-stack development, portfolio projects, web applications" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <header>
        <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase mb-[4rem]'>
          Pro<span className='text-yellow-400'>Jects</span>
        </h1>
      </header>

      <div 
        className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'
        role="list"
        aria-label="Project list"
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className='relative group'
            data-aos={project.aos}
            data-aos-delay={project.aosDelay}
            role="listitem"
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.alt} project`}
            >
              <div className='transform group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10 transition-all duration-300 relative w-full h-[200px] md:h-[300px]'>
                <img
                  src={project.src}
                  alt={project.alt}
                  className='object-contain rounded-md shadow-lg w-full h-full'
                  loading="lazy"
                />
              </div>
            </a>
            <div className='mt-4'>
              <button
                className='bg-teal-400 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-teal-500'
                onClick={(event) => toggleDetails(index, event)}
                aria-expanded={visibleProject === index}
                aria-controls={`project-details-${index}`}
              >
                Learn More
              </button>
              {visibleProject === index && (
                <div 
                  id={`project-details-${index}`}
                  className='mt-4 text-white bg-gray-800 p-4 rounded-md shadow-md transition-all duration-300'
                  role="region"
                  aria-label={`Details for ${project.alt}`}
                >
                  <p className='text-sm'>{project.description}</p>
                  <p className='mt-2 text-sm'>
                    <strong>Languages Used:</strong> {project.languages.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
