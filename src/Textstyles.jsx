import { TypeAnimation } from 'react-type-animation';

const Textstyle = () => {
  return (
    <TypeAnimation
      sequence={[
        'Front End Developer',
        1500,
        'Web Designer',
        1500,
        'Project Manager',
        1500,
        'Back End Developer',
        1500
      ]}
      speed={50}
      className='text-[2rem] md:text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default Textstyle;