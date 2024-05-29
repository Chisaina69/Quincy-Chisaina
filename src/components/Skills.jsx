import React from 'react';

const Skill = () => {
  return (
    <div className="container-fluid py-5 flex justify-center items-center" id="skill">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-yellow-400 uppercase">Skills</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <SkillItem title="HTML" percentage={95} color="bg-blue-500" />
          <SkillItem title="CSS" percentage={85} color="bg-yellow-400" />
          <SkillItem title="React JS" percentage={90} color="bg-red-500" />
          <SkillItem title="Javascript" percentage={90} color="bg-red-500" />
          <SkillItem title="Next JS" percentage={95} color="bg-gray-800" />
          <SkillItem title="Python" percentage={75} color="bg-blue-400" />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage, color }) => {
  return (
    <div className="skill mb-4">
      <div className="flex justify-between">
        <h6 className="font-bold text-white">{title}</h6>
        <h6 className="font-bold text-white">{percentage}%</h6>
      </div>
      <div className="h-3 relative bg-gray-200 rounded-full">
        <div className={`absolute top-0 left-0 ${color}`} style={{ width: `${percentage}%`, borderRadius: 'inherit' }}></div>
      </div>
    </div>
  );
};

export default Skill;
