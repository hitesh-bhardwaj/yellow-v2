/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap/dist/gsap";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LinkButton from "../Button/LinkButton";
import { formatDateYear } from "@/lib/datetime";
import RoundButton from "../Button/RoundButton";
import { workPathBySlug } from "@/lib/works";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Portfolio = ({ works }) => {

  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const MediaRenderer = ({ url }) => {
    const isVideo = (url) => {
      const videoExtensions = ['mp4', 'webm', 'ogg'];
      const urlExtension = url.split('.').pop();
      return videoExtensions.includes(urlExtension);
    };
  
    return (
      <div className="h-full w-screen absolute left-0 right-0 top-0 bottom-0 z-[-1] panel-img">
        {isVideo(url) ? (
          <video
            loading="lazy"
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            loading="lazy"
            src={url}
            alt="Media"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    );
  };

  const createTimeline = (triggerClass, countClasses, start, end) => {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerClass,
          start: start,
          end: end,
        },
      });
  
      countClasses.forEach((countClass) => {
        tl.to(countClass.selector, {
          top: countClass.top,
          stagger: 0.25,
          delay: countClass.delay,
          duration: 1.5,
          ease: "power2.inOut",
        });
      });
    });
  };
  
  const counterClasses = [
    { selector: ".counter-3", top: "-1030px", delay: 0.1 },
    { selector: ".counter-2", top: "-1030px", delay: -1.3 },
    { selector: ".counter-1", top: "-215px", delay: -1.3 },
  ];
  
  const countClasses = [
    { selector: ".count-3", top: "-1030px", delay: 0.1 },
    { selector: ".count-2", top: "-420px", delay: -1.3 },
  ];
  
  if (globalThis.innerWidth > 1023) {
    useGSAP(() => {
      const container = containerRef.current;
      const scroll = scrollRef.current;
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "=+3000 top",
        },
      });
  
      tl.fromTo(
        scroll,
        { x: "0" },
        { x: "-200vw", duration: 5 }
      );
    });
  
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  } else {
    createTimeline(".counter", counterClasses, "top 90%", null);
    createTimeline(".count", countClasses, "top 80%", "bottom 80%");
  }
  
  return (
    <Section className="py-[5%] mobile:py-[15%]" id="portfolio">
      <div className="container">
        <SectionTitle text="Our Work" />
        <div className="flex justify-between items-end mt-[4vw] mobile:flex-col mobile:items-start mobile:gap-[10vw] mobile:mt-[10vw]">
          <div className="flex items-center justify-start gap-[5vw]">
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start">
              <div className="font-display">
                <div className="counter">
                  <div className="counter-1 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num text-center">2</div>
                  </div>
                  <div className="counter-2 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="counter-3 digit ">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="counter-4 digit">
                    <div className="num">+</div>
                  </div>
                </div>
              </div>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[10px] mobile:text-[5vw] tablet:text-[2vw]">
                Projects
              </p>
            </div>
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start ">
              <div className="count font-display">
                <div className="count-2 digit">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                </div>
                <div className="count-3 digit ">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                  <div className="num">6</div>
                  <div className="num">7</div>
                  <div className="num">8</div>
                  <div className="num">9</div>
                  <div className="num">0</div>
                </div>
                <div className="count-4 digit">
                  <div className="num">+</div>
                </div>
              </div>
              <p data-para-anim className="font-medium text-[1.2vw] mb-[10px] mobile:text-[5vw] tablet:text-[2vw]">
                Industries
              </p>
            </div>
          </div>
          <div className="w-[35%] mobile:w-full tablet:w-[35%]">
            <p
              data-para-anim
              className="text-[1.9vw] font-medium leading-[1.4] mobile:text-[5vw]"
            >
              Here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered
            </p>
          </div>
          <div className="hidden mobile:block">
            <LinkButton btnLink={"/"} btnText={"See All Work"} className="mobile:text-[6vw]"/>
          </div>
        </div>

      </div>
      <div
        ref={containerRef}
        className="horizontal-scroll w-full h-screen overflow-hidden mt-[5vw] mobile:mt-[12vw] mobile:h-[250vh] tablet:h-[130vh]"
      >
        <div
          ref={scrollRef}
          className="flex h-full w-[300vw] whitespace-nowrap mobile:flex-col mobile:w-full mobile:gap-[10vw] tablet:flex-col tablet:gap-[5vw] tablet:w-full tablet:justify-center tablet:items-center"
        >

          {works.map((work, index)=>(
            <div key={index} className="h-full w-[90vw] relative pannel overflow-hidden p-[5vw] mobile:w-full mobile:h-[100vh] tablet:w-full tablet:h-[150vh] fadeup" data-magnetic-target data-magnetic-strength="200">
              {/* <Link href="#"> */}
                <MediaRenderer 
                  url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2 ">
                  <RoundButton href={workPathBySlug(work.slug)} text="View More" className="magnetic-inner pointer-events-auto tablet:w-[10vw] tablet:h-[10vw] tablet:text-[1.5vw] tablet:px-[2vw]"/>
                </div>
                <div className="relative w-full flex text-white h-full items-end">
                  <div className="flex justify-between mobile:flex-col mobile:h-full">
                    <div className="whitespace-normal flex gap-[2.5vw] flex-col mobile:order-2">
                      <h3 className="text-[2.8vw] font-display leading-[1] mobile:text-[8vw] tablet:text-[5vw]">
                        {work.title}
                      </h3>
                      <div dangerouslySetInnerHTML={{
                        __html: work.excerpt
                      }}
                      className="text-[1.05vw] font-medium w-[55%] mobile:text-[4vw] mobile:leading-[1.3] mobile:w-[90%] mobile:pb-[4vw] tablet:text-[2vw] tablet:w-[90%]"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-end text-[1.2vw] mobile:items-start mobile:text-[4vw] tablet:text-[2vw]">
                      <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg mobile:hidden">
                        {formatDateYear(work.date)}
                      </p>
                      <div className="flex items-center gap-[2vw] mobile:gap-[4vw] mobile:mt-[4vw]">
                        <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg mobile:py-[1.5vw] mobile:px-[4vw]">
                          Digital Marketing
                        </p>
                        <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg mobile:py-[1.5vw] mobile:px-[4vw]">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </Link> */}
            </div>
          ))}
          <div className="h-full w-[30vw] relative flex items-center justify-center flex-col pannel mobile:hidden tablet:h-fit tablet:gap-[3vw]">
            <p className="font-display text-[4vw] tablet:text-[6vw] tablet:hidden">Want More?</p>
            <LinkButton btnText="View Showcase" btnLink="#" className="tablet:text-[3vw]" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
