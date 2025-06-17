import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { FaGear } from 'react-icons/fa6'
import { Helmet } from 'react-helmet'

const Services = () => {
  // Structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Person",
      "name": "Quincy Muyekwe"
    },
    "serviceType": ["Web Development", "Software Development"],
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "Specializing in front-end development, creating captivating and user-friendly websites with responsive design, modern UI/UX, and accessibility compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backend Development",
          "description": "Expertise in backend development, crafting robust and scalable solutions with RESTful APIs, database management, and server-side logic implementation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Project Management",
          "description": "Specializing in orchestrating seamless workflows, ensuring projects are delivered on time and within budget with effective communication and proactive problem-solving."
        }
      }
    ]
  };

  return (
    <section className='bg-black pt-[4rem] md:pt-[4rem] pb-[5rem]' aria-label="Services">
      <Helmet>
        <title>Services | Quincy Muyekwe - Web Development & Software Solutions</title>
        <meta name="description" content="Professional web development services including frontend development, backend development, and project management. Expert solutions for your digital needs." />
        <meta name="keywords" content="web development, frontend development, backend development, project management, software solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <header>
        <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase'>My <span className='text-yellow-400'>Services</span></h1>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <article data-aos="fade-right" className="service-card">
          <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-2 uppercase font-semibold text-center p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' aria-hidden="true"/>
            <h2 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend Development</h2>
            <p className='text-[15px] text-[#d3fae8]'>I specialize in front-end development, creating captivating and user-friendly websites. With expertise in responsive design, modern UI/UX, interactive elements, cross-browser compatibility, performance optimization, and accessibility compliance, I ensure websites look great, perform well, and engage users effectively. Let's collaborate to build a website that captivates your audience and achieves your goals!</p>
          </div>
        </article>

        <article data-aos="zoom-in" data-aos-delay="300" className="service-card">
          <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
            <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' aria-hidden="true"/>
            <h2 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend Development</h2>
            <p className='text-[15px] text-[#d3fae8]'>I excel in backend development, crafting robust and scalable solutions to power dynamic web applications. My expertise includes building RESTful APIs, database management, server-side logic implementation, authentication, authorization, and data security. By leveraging technologies like Node.js, Express, MongoDB, and Django, I ensure efficient data handling, smooth functionality, and seamless integration with frontend systems. Let's collaborate to build a powerful backend foundation for your web application!</p>
          </div>
        </article>

        <article data-aos="fade-left" data-aos-delay="500" className="service-card">
          <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-2 uppercase font-semibold text-center p-[2rem]'>
            <FaGear className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' aria-hidden="true"/>
            <h2 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Project Management</h2>
            <p className='text-[15px] text-[#d3fae8]'>I specialize in orchestrating seamless workflows, ensuring projects are delivered on time and within budget. My approach involves meticulous planning, effective communication, and proactive problem-solving to overcome challenges and keep projects on track. I excel in coordinating diverse teams, fostering collaboration, and prioritizing tasks to meet project milestones efficiently. With a keen eye for detail and a strategic mindset, I drive projects forward, delivering high-quality results that exceed expectations. Let's work together to streamline project management and achieve your goals effectively!</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
