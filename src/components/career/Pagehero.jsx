import React from "react";
import Image from "next/image";
import Section from "../Section";

export default function Pagehero() {
  return (
    <>
      <Section id="hero">
        <div className="container py-[10%] mobile:py-[20%] tablet:py-[15%]">
          <div className=" flex justify-between mobile:flex-col">
            <div className="w-[50%] mobile:w-full mobile:mt-[10%] mobile:mb-[20vw] tablet:w-[60%]">
              <h1 data-title-anim className="text-[5.7vw] uppercase font-display mb-[1vw] mobile:text-[12vw] mobile:mb-[5vw] tablet:text-[6vw]">Work With Us</h1>
              <p data-para-anim className="w-[75%] text-[1.6vw] font-medium mobile:text-[5vw] mobile:w-full tablet:text-[2.2vw] tablet:w-[90%]">
                As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.
              </p>
            </div>
            <div className="w-[30vw] h-[40vw] relative imageanim mobile:w-[85vw] mobile:h-[120vw]">
              <Image src="/assets/images/career/career-hero.png" alt="career-hero" fill priority/>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
