import Filters from "../Button/Filters";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Projects() {
  const btnContainer = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const filters = [
    "Show All",
    "Brand Strategy",
    "Content Marketing",
    "Branding",
    "Campaigning",
    "Packaging",
  ];

  return (
    <>
      <section className="w-full h-full  ">
        <div className="container bg-white pb-[15%]">
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
              onClick={() => setActiveCategory(category)}
            >
              <span className="text-[1.2vw] space-grotesk relative z-[1]">{category}</span>
              <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-black scale-y-0">

          </span>

            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 w-full h-full gap-x-[2.5vw] gap-y-[3vw]">
          
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img
              src="/assets/images/portfolio/maveroc.png"
              alt="maveroc-img"
              className="object-cover"
            />
            <div className="absolute bottom-[10%] left-[3%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Maveroc</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
                Rebellion was a major theme throughout everything – from the
                playful, unexpectedness of the pieces created to it being a
                purely DTC brand to the personality of the founders.
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            <img
              src="/assets/images/portfolio/olioli.png"
              alt="olioli-img"
              className="object-cover"
            />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">OliOli</h3>
              <p className="w-[70%] text-[1.1vw] leading-[1.4]">
                OliOli is the brainchild of parents who are passionate about
                positive play and the power of imagination.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
            <Link href={"/"}>
            
            <img
              src="/assets/images/portfolio/beema.png"
              alt="beema-img"
              className="object-cover"
            />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Beema</h3>
              <p className="w-[70%] text-[1.1vw] leading-[1.4]">
              Beema is the region’s first online, pay-per-km insurance provider.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link> 
          </div>
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/clement.png" alt="clement-img" />
            <div className="absolute bottom-[10%] left-[3%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Clement Lombelle</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
              Rebellion was a major theme throughout everything – from the playful, unexpectedness of the pieces created to it being a purely DTC brand to the personality of the founders..
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/cafu.png" alt="cafu-img" />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Cafu</h3>
              <p className="w-full text-[1.1vw] leading-[1.4]">
              Cafu is the region’s first fuel delivery service.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/mare.png" alt="mare-img" />
            <div className="absolute bottom-[10%] left-[7%] text-black">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Mare Mare</h3>
              <p className="w-[70%] text-[1.1vw] leading-[1.4]">
              We were tasked with creating brands for all of the venue’s restaurants and bars.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/luma.png" alt="luma-img" />
            <div className="absolute bottom-[10%] left-[3%] text-black">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Luma</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
              Luma, in Abu Dhabi is a carefully considered children’s play and education destination brand.
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/misk.png" alt="misk-img" />
             <div className="absolute bottom-[10%] left-[7%] text-black">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Misk</h3>
              <p className="w-[80%] text-[1.1vw] leading-[1.4]">
              Misk is a home-grown, local high-end jewellery brand. It is a celebration of Emirati culture, with particular attention to detail and craftsmenship.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/tean.png" alt="tean-img" />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Tean</h3>
              <p className="w-[80%] text-[1.1vw] leading-[1.4]">
              Tean is Saadiyat Island Resort’s upscale, Arabic dining option. Along with four other venues, it forms a suite of restaurant brands.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/sufra.png" alt="sufra-img" />
           <div className="absolute bottom-[10%] left-[3%] text-black">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Sufra Rewards</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
              We worked across different touchpoints and brought Sufra Rewards to life. We also created unique tier names for the loyalty programme.
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/barakat.png" alt="barakat-img" />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Barakat</h3>
              <p className="w-full text-[1.1vw] leading-[1.4]">
              Rebranding the UAE’s most-loved fruit juices.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
            <Link href={"/"}>
            
            <img
              src="/assets/images/portfolio/ideafarm.png"
              alt="ideafarm-img"
            />
             <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">IdeaFarm Ventures</h3>
              <p className="w-full text-[1.1vw] leading-[1.4]">
              As a business looking to raise capital in order to help launch millennial-focused products into the market.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img
              src="/assets/images/portfolio/finearts.png"
              alt="finearts-img"
            />
            <div className="absolute bottom-[10%] left-[3%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Fine Arts</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
             We worked across different touchpoints, from the image style to packaging, all the way to social media look & feel.
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/goat.png" alt="goat-img" />
            <div className="absolute bottom-[10%] left-[7%] text-black">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Goat</h3>
              <p className="w-[70%] text-[1.1vw] leading-[1.4]">
              GOAT prides itself on making the greatest burger of all time.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
          <Link href={"/"}>
          


            <img src="/assets/images/portfolio/nao.png" alt="nao-img" />
             <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Nao</h3>
              <p className="w-[80%] text-[1.1vw] leading-[1.4]">
              Nao is a property investment firm focused on creating and developing co-working and co-living spaces in the UK and Asia.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-span-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/clerk.png" alt="clerk-img" />
            <div className="absolute bottom-[10%] left-[3%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Clerk</h3>
              <p className="w-[55%] text-[1.1vw] leading-[1.4]">
              Clerk is home to the UAE’s most-wanted talent. A place that connects businesses with talent spanning all disciplines.
              </p>
            </div>

            <div className="absolute bottom-[10%] right-[3%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="relative">
            <Link href={"/"}>
            
            <img
              src="/assets/images/portfolio/number-five.png"
              alt="number-five-img"
            />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Number Five</h3>
              <p className="w-[80%] text-[1.1vw] leading-[1.4]">
              A Jumeirah based, artisanal coffee shop and café, Number Five is a celebration of good taste, good coffee and good design.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
          <div className="col-start-2 relative">
            <Link href={"/"}>
            
            <img src="/assets/images/portfolio/roxy.png" alt="roxy-img" />
            <div className="absolute bottom-[10%] left-[7%] text-white">
              <h3 className="text-[2.5vw] mb-[1.5vw]">Roxy Plus</h3>
              <p className="w-[80%] text-[1.1vw] leading-[1.4]">
              For Roxy Cinemas loyalty program, our aim was to connect with an audience of cinema.
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.5vw] py-[0.6vw] text-[1.2vw]">
                Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2vw] py-[0.6vw] text-[1.2vw]">
                Brand Name
              </button>
            </div>
            </Link>
          </div>
        </div>
        
        <div className="text-black  text-[1.5vw] w-full flex justify-center my-[5vw]"><Link href={"/"}><span className="relative after:absolute after:bg-current after:w-full after:h-[2px] after:block after:scale-x-100 cursor-pointer hover:after:scale-x-0 after:duration-300 after:ease-out">View More+</span></Link></div>
        </div>
        
      </section>
    </>
  );
}
