import React from 'react'


const Project = () => {
  return (
    <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase'>
        Pro<span className='text-yellow-400'>Jects</span>
      </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
       <div>
        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <img
            src="/Skillcode-web.png"
            alt="School based Full-stack Webpage"
            className='object-contain rounded-md shadow-lg'
          />
        </div>
       </div>
       <div>
        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <img
            src="/Zealtech-web.png"
            alt="Buisness Intelligence company mabe by React"
            className='object-contain rounded-md shadow-lg'
          />
        </div>
       </div>
       <div>
        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
        <img
            src="/Playnation-web.png"
            alt="Games den made with HTML/CSS"
            className='object-contain rounded-md shadow-lg'
          />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Project;
