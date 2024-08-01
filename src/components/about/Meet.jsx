/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Section from "../Section";
import { useLenis } from "lenis/react";
import TeamDetail from "./TeamDetail";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    name: "Wael Bittar",
    slug: "wael-bittar",
    role: "Communication Director",
    image: "/assets/images/about/Wael-Bittar.webp",
    imagebw: "/assets/images/about/Wael-Bittar-bw.webp",
  },
  {
    id: 2,
    name: "Mamta Varekar",
    slug: "mamta-varekar",
    role: "General Manager",
    image: "/assets/images/about/Mamta-Varekar.webp",
    imagebw: "/assets/images/about/Mamta-Varekar-bw.webp",
  },
  {
    id: 3,
    name: "Stuart Harris",
    slug: "stuart-harris",
    role: "Creative Director",
    image: "/assets/images/about/stuart-harris.webp",
    imagebw: "/assets/images/about/stuart-harris-bw.webp",
  },
  {
    id: 4,
    name: "Sarah Azmi",
    slug: "sarah-azmi",
    role: "Co-Founder & Head of Strategy",
    image: "/assets/images/about/Sarah-Azmi.webp",
    imagebw: "/assets/images/about/Sarah-Azmi-bw.webp",
  },
  {
    id: 5,
    name: "Aishwarya Carriappa",
    slug: "aishwarya-carriappa",
    role: "Designer",
    image: "/assets/images/about/Aishwarya-Carriappa.webp",
    imagebw: "/assets/images/about/Aishwarya-Carriappa-bw.webp",
  },
  {
    id: 6,
    name: "Danielle Haddad",
    slug: "danielle-haddad",
    role: "Senior Account Manager",
    image: "/assets/images/about/Danielle-Haddad.webp",
    imagebw: "/assets/images/about/Danielle-Haddad-bw.webp",
  },
  {
    id: 7,
    name: "Gunjan Mathur",
    role: "Designer",
    slug: "gunjan-mathur",
    image: "/assets/images/about/Gunjan-Mathur.webp",
    imagebw: "/assets/images/about/Gunjan-Mathur-bw.webp",
  },
  {
    id: 8,
    name: "Youmna Kanaan",
    slug: "youmna-kanaan",
    role: "Designer",
    image: "/assets/images/about/Youmna-Kanaan.webp",
    imagebw: "/assets/images/about/Youmna-Kanaan-bw.webp",
  },
  {
    id: 9,
    name: "Maritony Flores",
    slug: "maritony-flores",
    role: "Admin",
    image: "/assets/images/about/Maritony-Flores.webp",
    imagebw: "/assets/images/about/Maritony-Flores-bw.webp",
  },
  {
    id: 10,
    name: "Sweatha",
    slug: "swetha",
    role: "Account Manager",
    image: "/assets/images/about/Sweatha.webp",
    imagebw: "/assets/images/about/Sweatha-bw.webp",
  },
];

export default function Meet() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [id, setId] = useState(1);
  const lenis = useLenis();
  const cardContainer = useRef(null);

  const handleDetail = (index) => {
    setId(index);
    const selectedMember = teamMembers.find((member) => member.id === index);
    if (selectedMember) {
      const newPath = `/teams/${selectedMember.slug}`;
      window.history.pushState({}, "", newPath);
      setDetailOpen(true);
      lenis.stop();
    }
  };
  const handleClose = () => {
    const originalPath = `/about-us`;
    window.history.pushState({}, "", originalPath);
    setDetailOpen(false);
    lenis.start();
  };

  if (globalThis.innerWidth > 541) {
    useGSAP(() => {
      const cards = cardContainer.current.querySelectorAll(".cardfade");
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardContainer.current,
          start: "top 90%",
          end: "bottom 60%",
        },
        opacity: 0,
        yPercent: 20,
        ease: "power4.Out",
        duration: 1,
        stagger: 0.3,
      });
    });
  }

  return (
    <>
      <Section
        className="w-full h-full pb-[10%] mobile:py-[20%] relative"
        id="meet"
      >
        <div
          className={`container overflow-hidden ${detailOpen == true ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <SectionTitle text={"Meet the people"} className={"mb-[3vw]"} />
          <p className="text-[1.9vw] w-[30%] font-medium leading-[1.2] mobile:w-[90%] mobile:text-[5vw] tablet:w-[60%] tablet:text-[2.5vw]">
            We grow amazing companies through exceptional branding and
            communications.
          </p>
          <div className="w-full mobile:overflow-scroll mobile:mt-[5vw]">
            <div
              ref={cardContainer}
              className="grid grid-cols-3 gap-[3vw] mt-[8vw] justify-between gap-y-[3vw] mobile:flex mobile:flex-nowrap mobile:w-fit mobile:overflow-scroll mobile:gap-[5vw] mobile:h-fit tablet:gap-y-[3.5vw]"
            >
              {teamMembers.map((member) => (
                <div key={member.id}>
                  <div
                    className="w-fit overflow-hidden"
                    onClick={() => handleDetail(member.id)}
                  >
                    <div
                      className={`w-full h-[36vw] group cursor-pointer relative overflow-hidden border-[1px] border-black border-opacity-40 cardfade mobile:w-[75vw] mobile:h-[100vw] tablet:w-[41vw] tablet:h-full`}
                    >
                      <img
                        loading="lazy"
                        src={member.image}
                        alt={`${member.name} Image`}
                        className="object-cover h-full w-full group-hover:opacity-0 transition-all ease"
                      />
                      <img
                        loading="lazy"
                        src={member.imagebw}
                        alt={`${member.name} B/W Image`}
                        className="absolute object-cover h-full w-full group-hover:opacity-100 opacity-0 transition-all ease top-0 left-0"
                      />
                      <div className="absolute w-full px-[2vw] py-[1.5vw] z-[2] bottom-0 backdrop-blur-lg bg-black bg-opacity-40 mobile:py-[3vw] mobile:px-[3vw] tablet:py-[3vw]">
                        <div className="text-white flex w-full justify-between h-full">
                          <div className="flex flex-col tablet:w-[100%]">
                            <h4 className="text-[1.8vw] font-display leading-[1.2] uppercase  mobile:text-[6vw] tablet:text-[2.4vw]">
                              {member.name}
                            </h4>
                            <p className="mobile:w-full mobile:leading-[1.2] mobile:text-[3vw]">
                              {member.role}
                            </p>
                          </div>
                          <div className="mobile:flex mobile:items-center">
                            <svg
                              className="relative -rotate-[135deg] w-[2.3vw] h-[2.3vw] overflow-hidden mobile:w-[7vw] mobile:h-[7vw] tablet:w-[4vw] tablet:h-[4vw]"
                              width="19"
                              height="23"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                fill="#ffffff"
                              />
                              <path
                                className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                                d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TeamDetail
          index={id}
          handleClose={handleClose}
          detailOpen={detailOpen}
        />
      </Section>
    </>
  );
}
