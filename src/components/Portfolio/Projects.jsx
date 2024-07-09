import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

// Define project data
const projectsData = [
  {
    name: "Maveroc",
    image: "/assets/images/portfolio/maveroc.png",
    description: "Rebellion was a major theme throughout everything.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "OliOli",
    image: "/assets/images/portfolio/olioli.png",
    description: "OliOli is the brainchild of parents who are passionate.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Beema",
    image: "/assets/images/portfolio/beema.png",
    description: "Beema is the region’s first online, pay-per-km insurance provider.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Clement Lombelle",
    image: "/assets/images/portfolio/clement.png",
    description: "Rebellion was a major theme throughout everything – from the playful, unexpectedness of the pieces created to it being a purely DTC brand to the personality of the founders.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Cafu",
    image: "/assets/images/portfolio/cafu.png",
    description: "Cafu is the region’s first fuel delivery service.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Mare Mare",
    image: "/assets/images/portfolio/mare.png",
    description: "We were tasked with creating brands for all of the venue’s restaurants and bars.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Luma",
    image: "/assets/images/portfolio/luma.png",
    description: "Luma, in Abu Dhabi is a carefully considered children’s play and education destination brand.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Misk",
    image: "/assets/images/portfolio/misk.png",
    description: "Misk is a home-grown, local high-end jewellery brand. It is a celebration of Emirati culture, with particular attention to detail and craftsmenship.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Tean",
    image: "/assets/images/portfolio/tean.png",
    description: "Tean is Saadiyat Island Resort’s upscale, Arabic dining option. Along with four other venues, it forms a suite of restaurant brands.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Sufra Rewards",
    image: "/assets/images/portfolio/sufra.png",
    description: "We worked across different touchpoints and brought Sufra Rewards to life. We also created unique tier names for the loyalty programme.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Barakat",
    image: "/assets/images/portfolio/barakat.png",
    description: "Rebranding the UAE’s most-loved fruit juices.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "IdeaFarm Ventures",
    image: "/assets/images/portfolio/ideafarm.png",
    description: "As a business looking to raise capital in order to help launch millennial-focused products into the market.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Fine Arts",
    image: "/assets/images/portfolio/finearts.png",
    description: "We worked across different touchpoints, from the image style to packaging, all the way to social media look & feel.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Goat",
    image: "/assets/images/portfolio/goat.png",
    description: "GOAT prides itself on making the greatest burger of all time.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Nao",
    image: "/assets/images/portfolio/nao.png",
    description: "Nao is a property investment firm focused on creating and developing co-working and co-living spaces in the UK and Asia.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Clerk",
    image: "/assets/images/portfolio/clerk.png",
    description: "Clerk is home to the UAE’s most-wanted talent. A place that connects businesses with talent spanning all disciplines.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Number Five",
    image: "/assets/images/portfolio/number-five.png",
    description: " A Jumeirah based, artisanal coffee shop and café, Number Five is a celebration of good taste, good coffee and good design.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  {
    name: "Roxy Plus",
    image: "/assets/images/portfolio/roxy.png",
    description: "For Roxy Cinemas loyalty program, our aim was to connect with an audience of cinema.",
    tags: ["Digital Marketing", "Brand Name"],
  },
  // Add more projects as needed
];

export default function ProjectsCopy() {
  const btnContainer = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Show All");
  const filters = [
    "Show All",
    "Brand Strategy",
    "Content Marketing",
    "Branding",
    "Campaigning",
    "Packaging",
  ];

  // Function to filter projects based on active category
  const filteredProjects = activeCategory === "Show All"
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeCategory));

  // Function to handle category filter
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  useGSAP(() => {
    const images = document.querySelectorAll(".imageanim");

    images.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          
          // markers:true
        },
        '--beforeHeight': '0%',
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      });
    });
  });

  return (
    <>
      <section className="w-full h-full" id="projects">
        <div className="container bg-white pb-[15%]">
          {/* Filter buttons */}
          <div
            ref={btnContainer}
            className="flex justify-start items-start gap-[1vw] mb-[5vw] mobile:flex-wrap mobile:mb-[10vw]"
          >
            {filters.map((category, index) => (
              <button
                key={index}
                className={`cat-button text-black hover:text-white overflow-hidden border-[2px] hover:animate-scale-up border-black border-opacity-70 px-[1.5vw] py-[0.6vw] min-w-[7vw] rounded-full transition-all duration-500 ease-out relative group ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="text-[1.2vw] space-grotesk relative z-[1]">{category}</span>
                <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-black scale-y-0"></span>
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw]">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`col-span-${index % 3 === 0 ? "2" : "1"} relative`}>
                <Link href={"/"}>
                <div className={`relative overflow-hidden rounded-[10px] ${index % 3 === 0 ? "w-[90vw] h-[45vw]" : "w-[44vw] h-[45vw]"} imageanim`}>
                <Image
                    src={project.image}
                    alt={`${project.name}-img`}
                    className="object-cover"
                    fill
                  />
                 

                </div>
                  
                  <div className={`absolute bottom-[10%] left-[3%] text-white ${index % 3 === 0 ? "bottom-[10%] left-[3%]" : "bottom-[10%] left-[7%]"}`}>
                    <h3 className="text-[2.5vw] mb-[1.5vw] heading-anim">{project.name}</h3>
                    <p className={` text-[1.1vw] leading-[1.4] w-[100%] para-anim`}>{project.description}</p>
                  </div>
                  <div className={`absolute  flex gap-[1.5vw] text-white ${index % 3 === 0 ? "bottom-[10%] right-[3%]" : "top-[7%] left-[7%]"}`}>
                    {project.tags.map((tag, tagIndex) => (
                      <button
                        key={tagIndex}
                        className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View More link */}
          <div className="text-black text-[1.5vw] w-full flex justify-center my-[5vw]">
            <Link href={"/"}>
              <span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">View More+</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
