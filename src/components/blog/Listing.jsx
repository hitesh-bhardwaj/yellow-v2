import React, { useRef, useState } from 'react';
import Image from 'next/image';
import LinkButton from '../Button/LinkButton';

export default function Listing() {
  const btnContainer = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All"); // Initialize with "All"
  const filters = [
    "All",
    "Branding",
    "Communication",
    "Digital",
    "Insight",
    "Strategy",
  ];

  // Simulated projects data
  const projectsData = [
    {
      id: 0,
      title: "Logo Design: The Art of Creating a Memorable Brand Symbol",
      date: "June 6, 2024",
      tags: ["Branding", "Digital", "Strategy"],
      imageSrc: "/assets/images/blog/bloglist-1.png",
    },
    {
        id: 1,
        title: "4 Marketing Mistakes to Avoid During and After the Coronavirus Crisis",
        date: "June 6, 2024",
        tags: ["Branding", "Digital", "Communication"],
        imageSrc: "/assets/images/blog/bloglist-3.png",
      },
      {
        id: 2,
        title: "Packaging Design: Elevating Your Product’s Visual Appeal and Brand Identity",
        date: "June 6, 2024",
        tags: ["Branding", "Digital", "Strategy"],
        imageSrc: "/assets/images/blog/bloglist-2.png",
      },
      {
        id: 3,
        title: "Packaging Design: Elevating Your Product’s Visual Appeal and Brand Identity",
        date: "June 6, 2024",
        tags: ["Branding", "Digital", "Strategy"],
        imageSrc: "/assets/images/blog/bloglist-2.png",
      },
      {
        id: 4,
        title: "Packaging Design: Elevating Your Product’s Visual Appeal and Brand Identity",
        date: "June 6, 2024",
        tags: ["Branding", "Digital", "Strategy"],
        imageSrc: "/assets/images/blog/bloglist-2.png",
      },
      {
        id: 5,
        title: "Packaging Design: Elevating Your Product’s Visual Appeal and Brand Identity",
        date: "June 6, 2024",
        tags: ["Branding", "Digital", "Strategy"],
        imageSrc: "/assets/images/blog/bloglist-2.png",
      },
    // Add more project objects as needed
  ];

  // Function to filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeCategory));

  // Function to handle category filter
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <section className='py-[5%]' id='listing'>
        <div className='container'>
          <div
            ref={btnContainer}
            className="flex justify-start items-start gap-[1vw] mb-[3vw] mobile:flex-wrap mobile:mb-[10vw] mobile:hidden"
          >
            {filters.map((category, index) => (
              <button
                key={index}
                className={`cat-button text-black hover:text-white overflow-hidden border-[2px] hover:animate-scale-up border-black border-opacity-70 px-[1.5vw] py-[0.6vw] min-w-[7vw] rounded-full transition-all duration-500 ease-out relative group ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="text-[1.2vw] space-grotesk relative z-[1] tablet:text-[2.2vw]">{category}</span>
                <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-black scale-y-0"></span>
              </button>
            ))}
          </div>
          <div className='w-[100vw] ml-[-5vw] h-[1px] bg-black mb-[3vw] mobile:my-[12vw] mobile:ml-[-7vw]'></div>
          <div className='w-full h-full flex flex-wrap gap-[2vw] mb-[3vw] mobile:flex-col mobile:gap-[12vw]'>
            {filteredProjects.map((project) => (
              <div key={project.id} className={`w-[28vw] h-[35vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden mobile:w-[85vw] mobile:h-full mobile:pb-[4vw] tablet:w-[41vw] tablet:h-full ${project.id>5?"mobile:hidden block":"block"}`}>
                <div className='w-[28vw] h-[15vw] relative mobile:w-[85vw] mobile:h-[55vw] tablet:w-[41vw] tablet:h-[25vw]'>
                  <Image src={project.imageSrc} alt='blog-listing' fill />
                </div>
                <div className='w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw] mobile:gap-[4vw] mobile:px-[3vw] tablet:pb-[2vw]'>
                  <h3 className='text-[1.5vw] font-display leading-[1.2] mobile:text-[6.5vw] tablet:text-[3vw]'>{project.title}</h3>
                  <p className='text-[1vw] font-medium mobile:text-[3vw] tablet:text-[2vw]'>{project.date}</p>
                  <div className='text-[1vw] flex gap-[0.5vw] mobile:text-[4vw] mobile:gap-[2vw] tablet:text-[2vw] tablet:gap-[1vw]'>
                    {project.tags.map((tag, index) => (
                      <span key={index} className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[3vw] mobile:py-[0.5vw]'>{tag}</span>
                    ))}
                  </div>
                  <LinkButton btnLink={"/"} btnText={"Read Article"} className='text-[1.5vw]' />
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center mobile:my-[10vw]'>
            <LinkButton btnLink={"/"} btnText={"Load More"} className='text-[1.4vw] font-medium'/>

          </div>
        </div>
      </section>
    </>
  );
}
