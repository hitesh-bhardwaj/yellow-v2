import React from "react";
import Image from "next/image";

export default function Pagehero() {
  return (
    <>
      <section id="hero" className="w-full h-[140vh] flex items-center">
        <div className="container">
          <div className=" flex justify-between">
            <div className="w-[50%]">
              <h1 className="text-[5.7vw] uppercase font-display mb-[1vw]">Work With Us</h1>
              <p className="w-[70%] text-[1.6vw] font-medium">
              As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.
              </p>
            </div>
            <div className="w-[30vw] h-[40vw] relative drop-shadow-2xl shadow-xl">
                <Image src="/assets/images/career/career-hero.png" alt="career-hero" fill/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
