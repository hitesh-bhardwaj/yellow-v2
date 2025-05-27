/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import Link from "next/link";

const Awards = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const cardData = [
    {
      title: 'Best Visual Identity',
      subtitle: 'Gold - Healthcare & Pharmaceutical',
      bgColor: '#A1A1FF',
      logo: "/assets/images/homepage/ovasave.png",
      link: "https://welcometoyellow.com/our-work/branding-for-an-innovative-fem-tech-platform"

    },
    {
      title: 'Best Visual Identity',
      subtitle: 'Gold - Education',
      bgColor: '#93A374',
      logo: "/assets/images/homepage/numu.png",
      link: "https://welcometoyellow.com/our-work/numu-early-childhood-centre-brand-case-study"
    },
  ];

  return (
    <Section className="py-[5%] mobile:pb-[15%]" id="services">
      <div ref={containerRef} className="container">
        <div className="space-y-[2.5vw] mt-[5vw] mobile:space-y-[7vw]">
          <SectionTitle data-title-anim text="AWARDS" />
          <p data-para-anim className="text-[1.9vw] font-medium w-[50%] mobile:text-[4vw] mobile:w-[95%] tablet:text-[3vw] tablet:w-[80%] ">
            We grow amazing companies through exceptional branding and communications.
          </p>
        </div>
        <div className="flex items-start justify-between pt-[5vw] mobile:flex-col mobile:gap-[5vw] mobile:pt-[10%] tablet:flex-col tablet:pt-[10%] tablet:gap-[7vw] overflow-hidden h-[35vw] mobile:h-full tablet:h-full">
          {cardData.map((card, index) => {
            const isActive = activeCard === index;
            return (
                <Link href={card.link}
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`transition-all duration-500 ease origin-top px-[1.5vw] py-[1.5vw] rounded-[1vw] text-white  flex items-start  justify-between mobile:w-full mobile:h-[50vw] mobile:px-[3vw] mobile:py-[3vw] mobile:rounded-[3vw] tablet:w-full tablet:rounded-[2vw] tablet:h-[45vw] tablet:py-[2vw] tablet:px-[3vw] overflow-hidden
              ${isActive ? 'w-[56%] h-[28vw]' : 'w-[42.5%] h-[20vw]'}
              `}
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div className="flex flex-col items-start justify-between h-full ">
                    <div className="w-[35vw] tablet:w-full mobile:w-full">
                      <h2 className="text-[3.5vw] leading-[1.2] font-display font-normal group-hover:font-medium mobile:text-[7vw] tablet:text-[5vw]">{card.title}</h2>
                      {/* <p className="text-[2vw] font-medium  mobile:text-[3.5vw] mobile:w-full tablet:text-[3vw] tablet:w-full">{card.subtitle}</p> */}
                    </div>

                    <div
                      className={`transition-all duration-300 ease text-[1.8vw] font-medium mobile:opacity-100 mobile:text-[3vw] tablet:opacity-100 tablet:text-[3vw] ${isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      Transform Awards 2025
                    </div>

                    <div
                      className={` transition-all duration-300 ease  h-[5vw] w-[10vw] mobile:opacity-100 mobile:h-[10vw] mobile:w-[20vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[12vw]  ${isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <Image
                        src={card.logo}
                        height={156}
                        width={277}
                        alt="vasave"
                        className=" h-full w-full object-contain brightness-[5]"
                      />
                    </div>


                  </div>

                  <div
                    className={`flex flex-col items-end justify-start gap-[3vw] transition-all duration-300 ease tablet:gap-[7vw] tablet:pt-[2vw]`}
                  >
                    <div className={`bg-[#111111] h-[4vw] w-[4vw] mr-12 rounded-full flex items-center justify-center transition-all duration-300 ease mobile:opacity-100 mobile:h-[10vw] mobile:w-[10vw] mobile:mr-2 mobile:!p-[2vw] tablet:opacity-100 tablet:h-[8vw] tablet:w-[8vw] ${isActive ? 'opacity-100' : 'opacity-0'
                      }`}>
                      <Image
                        src="/assets/icons/arrow.svg"
                        height={20}
                        width={20}
                        alt="arrow"
                        className={`transition-all duration-300 ease -rotate-[140deg]`}
                      />
                    </div>

                    <div className={`h-[15vw] w-[15vw] overflow-hidden transition-all duration-300 ease mobile:opacity-100  mobile:h-[30vw] mobile:w-[20vw] tablet:opacity-100 tablet:h-[25vw] tablet:w-[17vw] ${isActive ? 'opacity-100' : 'opacity-0'
                      }`}>
                      <Image
                        src="/assets/images/homepage/transform-awards.png"
                        width={375}
                        height={375}
                        alt="transform-awards"
                        className="h-full w-full object-cover scale-[1.2]"
                      />
                    </div>
                  </div>
                </Link>
            );
          })}
        </div>

      </div>
    </Section>
  )
}

export default Awards;