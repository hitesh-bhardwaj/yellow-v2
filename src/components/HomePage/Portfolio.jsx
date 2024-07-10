/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LinkButton from "../Button/LinkButton";
import { formatDateYear } from "@/lib/datetime";
import Link from "next/link";

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

  // useEffect(() => {
  //   initMagneticButton();
  // })

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
      {
        x: "0",
      },
      {
        x: "-200vw",
        duration: 5,
        ease: "none",
      }
    );
  });
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".counter",
        // markers:true,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    tl.to(".counter-3", {
      top: "-1030px",
      stagger: {
        amount: 0.25,
      },
      delay: 0.1,
      duration: 1.5,
      ease: "power4.inOut",
    });
    tl.to(".counter-2", {
      top: "-1030px",
      stagger: {
        amount: 0.25,
      },
      delay: -1.3,
      duration: 1.5,
      ease: "power4.inOut",
    });

    tl.to(".counter-1", {
      top: "-215px",
      stagger: {
        amount: 0.25,
      },
      delay: -1.3,
      duration: 1.5,
      ease: "power4.inOut",
    });
  });
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".count",
        // markers:true,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    tl.to(".count-3", {
      top: "-1030px",
      stagger: {
        amount: 0.25,
      },
      delay: 0.1,
      duration: 1.5,
      ease: "power4.inOut",
    });
    tl.to(".count-2", {
      top: "-420px",
      stagger: {
        amount: 0.25,
      },
      delay: -1.3,
      duration: 1.5,
      ease: "power4.inOut",
    });
  });

  return (
    <Section className="py-[5%]" id="portfolio">
      <div className="container">
        <SectionTitle text="Our Work" />
        <div className="flex justify-between items-end mt-[4vw]">
          <div className="flex items-center justify-start gap-[5vw]">
            <div className="flex items-end gap-[8px]">
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
              <p data-para-anim className="font-medium text-[1.2vw] mb-[10px]">
                Projects
              </p>
            </div>
            <div className="flex items-end gap-[8px]">
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
              <p data-para-anim className="font-medium text-[1.2vw] mb-[10px]">
                Industries
              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <p
              data-para-anim
              className="text-[1.9vw] font-medium leading-[1.4]"
            >
              Here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered
            </p>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="horizontal-scroll w-screen h-screen overflow-hidden mt-[5vw]"
      >
        <div
          ref={scrollRef}
          className="flex h-full w-[300vw] whitespace-nowrap"
        >

          {works.map((work, index)=>(
            <div key={index} className="h-full w-[90vw] relative pannel overflow-hidden p-[5vw]" data-magnetic-target data-magnetic-strength="200">
              <Link href="#">
                <MediaRenderer 
                  url={work.workFields.featuredImagevideo.node.mediaItemUrl}
                />
                <p className="font-display absolute text-[1.4vw] text-white mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 magnetic-inner">View More</p>
                <div className="relative w-full flex text-white h-full items-end">
                  <div className="flex justify-between">
                    <div className="whitespace-normal flex gap-[2.5vw] flex-col">
                      <h3 className="text-[2.8vw] font-display leading-[1]">
                        {work.title}
                      </h3>
                      <div dangerouslySetInnerHTML={{
                        __html: work.excerpt
                      }}
                      className="text-[1.05vw] font-medium w-[55%]"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-end text-[1.2vw]">
                      <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/25 backdrop-blur-lg">
                        {formatDateYear(work.date)}
                      </p>
                      <div className="flex items-center gap-[2vw]">
                        <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">
                          Digital Marketing
                        </p>
                        <p className="py-[0.5vw] px-[2vw] border border-white rounded-full bg-white/10 backdrop-blur-lg">
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="h-full w-[30vw] relative flex items-center justify-center flex-col pannel">
            <p className="font-display text-[4vw]">Want More?</p>
            <LinkButton btnText="View Showcase" btnLink="#" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
