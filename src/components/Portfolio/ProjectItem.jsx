
import React from 'react';

const ProjectItem = ({ imageSrc, title, description }) => {
  return (
    <div className="relative">
      <img src={imageSrc} alt={title} className="object-cover" />
      <div className="absolute bottom-[10%] left-[7%] text-white">
        <h3 className="text-[2.5vw] mb-[1.5vw]">{title}</h3>
        <p className="w-[70%] text-[1.1vw] leading-[1.4]">{description}</p>
      </div>
      <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
        <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
          Digital Marketing
        </button>
        <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
          Brand Name
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
