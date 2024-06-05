import React, { useState } from 'react';

const Project = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const projects = [
    {
      src: "/Skillcode-web.png",
      alt: "School based Full-stack Webpage",
      link: "https://skill-code-9pv0.onrender.com/",
      description: "This is a full-stack webpage designed for schools. It includes various features for managing school exams and resources.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React", "(Flask)Python"],
    },
    {
      src: "/Zealtech-web.png",
      alt: "Business Intelligence company made by React",
      link: "https://www.zealtechdata.co.ke/",
      description: "Zealtech is a Kenyan business intelligence platform built using React. It provides analytics and insights for businesses.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React"],
    },
    {
      src: "/Playnation-web.png",
      alt: "Games den made with HTML/CSS",
      link: "https://github.com/Chisaina69/Play-Nation",
      description: "Playnation is a gaming den website created with HTML and CSS, offering a variety of games and gaming news.",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      src: "/Cocktaily-web.png",
      alt: "Cocktail recipes made with HTML/CSS",
      link: "https://cocktaiily.netlify.app/",
      description: "Cocktaily is a website for cocktail recipes made with HTML and CSS. It provides detailed recipes and mixing instructions.",
      languages: ["HTML", "TailwindCSS", "JavaScript"],
    },
    {
      src: "/WamalwaSurveyors-web.png",
      alt: "Surveyors site made with HTML/CSS",
      link: "https://wamalwa-surveyors.onrender.com/",
      description: "Wamalwa Surveyors is a professional Kenyan surveying service website  built using React, offering surveying solutions.",
      languages: ["HTML", "TailwindCSS", "JavaScript", "React"],
    },
  ];

  const toggleDetails = (index, event) => {
    event.preventDefault();
    setVisibleProject(visibleProject === index ? null : index);
  };

  return (
    <div className='bg-black py-[5rem] md:py-[10rem]'>
      <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase mb-[4rem]'>
        Pro<span className='text-yellow-400'>Jects</span>
      </h1>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        {projects.map((project, index) => (
          <div key={index} className='relative group'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='transform group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10 transition-all duration-300 relative w-full h-[200px] md:h-[300px]'>
                <img
                  src={project.src}
                  alt={project.alt}
                  className='object-contain rounded-md shadow-lg w-full h-full'
                />
              </div>
            </a>
            <div className='mt-4'>
              <button
                className='bg-teal-400 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-teal-500'
                onClick={(event) => toggleDetails(index, event)}
              >
                Learn More
              </button>
              {visibleProject === index && (
                <div className='mt-4 text-white bg-gray-800 p-4 rounded-md shadow-md transition-all duration-300'>
                  <p className='text-sm'>{project.description}</p>
                  <p className='mt-2 text-sm'><strong>Languages Used:</strong> {project.languages.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
