import React, { useEffect, useRef, useState } from 'react';

const Skill = () => {
  const skills = [
    { title: 'HTML', percentage: 85, color: 'bg-rose-700' },
    { title: 'CSS', percentage: 85, color: 'bg-teal-400' },
    { title: 'React JS', percentage: 95, color: 'bg-orange-500' },
    { title: 'Javascript', percentage: 90, color: 'bg-sky-400' },
    { title: 'Next JS', percentage: 55, color: 'bg-cyan-400' },
    { title: 'Python', percentage: 75, color: 'bg-lime-400' },
  ];

  const [visible, setVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid py-5 flex justify-center items-center" id="skill" ref={skillRef}>
      <div className="container">
        <div className="relative flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 uppercase">Skills</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {skills.map(skill => (
            <SkillItem
              key={skill.title}
              title={skill.title}
              percentage={skill.percentage}
              color={skill.color}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage, color, visible }) => {
  return (
    <div className="skill mb-4">
      <div className="flex justify-between">
        <h6 className="font-black text-white">{title}</h6>
        <h6 className="font-bold text-white">{percentage}%</h6>
      </div>
      <div className="h-3 relative bg-gray-200 rounded-full">
        <div
          className={`absolute top-0 left-0 h-full ${color}`}
          style={{
            width: visible ? `${percentage}%` : '0%',
            transition: 'width 1s ease-in-out',
            borderRadius: 'inherit'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
