import React from "react";
import LinkButton from "../Button/LinkButton";
import Image from "next/image";

export default function Pagehero() {
  return (
    <>
      <section id="hero">
        <div className="container pt-[10%]">
          <div className="w-full h-full">
            <div className="mb-[5vw] mobile:mt-[25vw] mobile:mb-[15vw]">
              <h1 data-para-anim className="text-[5.7vw] font-display leading-[1.2] mb-[4vw] mobile:text-[10vw] mobile:mb-[7vw] ">
                Color Psychology in Branding: Understanding the Emotional Impact
                of Colors
              </h1>
              <LinkButton btnLink={"/"} btnText={"Read Article"} className="text-[1.4vw]" />
            </div>
          </div>
          <div className="relative h-[45vw] w-[90vw] rounded-[10px] overflow-hidden fadeup mobile:w-[85vw] mobile:h-[120vw]">
            <Image src="/assets/images/blog/blog-hero.png" alt="blog-hero" fill className="object-cover"/>
          </div>
        </div>
      </section>
    </>
  );
}
