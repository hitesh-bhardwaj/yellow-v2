import React from "react";
import Image from "next/image";

export default function Pagehero() {
  return (

    <>
      <section className="w-full h-full pt-[10%] flex items-center mobile:h-full tablet:h-full " id="hero">
        <div className="flex justify-between container mobile:flex-col mobile:pt-[30%] mobile:gap-[15vw] tablet:pt-[15%]">
          <div className="w-full">
            <h1 data-title-anim className="text-[5.8vw] font-display uppercase w-[70%] leading-[1.1] mb-[3vw] mobile:text-[12vw] mobile:w-full mobile:mb-[7vw] tablet:text-[7vw] tablet:w-[80%]">Hey There ! Good to See you !</h1>
            <p data-para-anim className="w-[70%] font-medium text-[1.4vw] mobile:text-[5vw] mobile:w-full tablet:text-[2.2vw] tablet:w-[80%] ">
              As a digital branding agency, we help businesses connect with
              their customers by using a variety of tools and services. This
              includes creating logos for our clients, website design and
              development, content creation, and social media management, among
              others.
            </p>
          </div>
          <div className="w-[50vw] h-[45vw] relative imageanim mobile:w-[85vw] mobile:h-[120vw]">
            <Image src="/assets/images/contact/contact-head.png" alt="contac-head-img" className="object-cover h-full w-full " fill/>
          </div>
        </div>
      </section>
    </>
  );
}
