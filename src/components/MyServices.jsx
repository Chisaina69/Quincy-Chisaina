import React, { useState } from 'react';
import { FaLaptopCode, FaCode, FaMobileAlt, FaAppleAlt, FaSearch, FaProjectDiagram } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly website designs that enhance user experience and engagement.",
    details: "I focus on creating visually stunning and intuitive designs that provide an exceptional user experience. I ensure that your website not only looks great but also functions seamlessly on all devices.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications tailored to your business needs.",
    details: "I offer comprehensive web development services that include frontend and backend development, database integration, and API development. My goal is to build websites and web applications that are fast, secure, and scalable.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Apps Design",
    description: "Designing intuitive and engaging mobile app interfaces for a seamless user experience.",
    details: "I focus on creating user-centric designs for mobile applications. I ensure that the apps are easy to use, visually appealing, and provide a seamless user experience across different devices and platforms.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Apps Development",
    description: "Developing high-quality mobile applications for iOS and Android platforms.",
    details: "I specialize in developing mobile applications for both iOS and Android platforms. I ensure that the apps are built to the highest standards, offering excellent performance, security, and usability.",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    description: "Optimizing your website to improve its visibility on search engines and attract more organic traffic.",
    details: "My SEO services include keyword research, on-page optimization, link building, and content creation. I aim to improve your website's search engine rankings, drive more organic traffic, and increase your online visibility.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Management",
    description: "Providing expert project management services to ensure your projects are completed on time and within budget.",
    details: "My project management services cover planning, execution, monitoring, and closing of projects. I use proven methodologies to ensure that your projects are delivered successfully, meeting all your requirements and expectations.",
  },
];

const Service = () => {
  const [visibleService, setVisibleService] = useState(null);

  const toggleDetails = (index) => {
    setVisibleService(visibleService === index ? null : index);
  };

  return (
    <div className='bg-black py-[5rem] md:py-[10rem]'>
      <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase mb-[4rem]'>
        My <span className='text-teal-400'>Services</span>
      </h1>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        {services.map((service, index) => (
          <div key={index} className='text-center bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
            <div className='flex justify-center items-center mb-4'>
              <div className='text-teal-400 text-[50px]'>
                {service.icon}
              </div>
            </div>
            <h2 className='text-white text-xl font-bold mb-2'>{service.title}</h2>
            <p className='text-gray-400 mb-4'>{service.description}</p>
            <button
              className='bg-teal-400 text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-teal-500'
              onClick={() => toggleDetails(index)}
            >
              Read More
            </button>
            {visibleService === index && (
              <div className='mt-4 text-white bg-gray-800 p-4 rounded-md shadow-md'>
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
