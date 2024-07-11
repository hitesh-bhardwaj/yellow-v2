import React from "react";
import LinkButton from "../Button/LinkButton";
import Image from "next/image";

export default function Pagehero() {
  return (
    <>
      <section id="hero">
        <div className="container pt-[10%]">
          <div className="w-full h-full">
            <div className="mb-[5vw]">
              <h1 data-para-anim className="text-[5.7vw] font-display leading-[1.2] mb-[4vw] ">
                Color Psychology in Branding: Understanding the Emotional Impact
                of Colors
              </h1>
              <LinkButton btnLink={"/"} btnText={"Read Article"} className="text-[1.4vw]" />
            </div>
          </div>
          <div className="relative h-[45vw] w-[90vw] rounded-[10px] overflow-hidden fadeup">
            <Image src="/assets/images/blog/blog-hero.png" alt="blog-hero" fill/>
          </div>
        </div>
      </section>
    </>
  );
}
