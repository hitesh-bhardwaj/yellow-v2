import React from "react";
import Image from "next/image";

export default function Pagehero() {
  return (
    <>
      <section className="w-full h-[140vh] flex items-center" id="hero">
        <div className="flex justify-between container">
          <div className="w-full">
            <h1 className="text-[5.8vw] font-display uppercase w-[70%] leading-[1.1] mb-[3vw]">Hey There ! Good to See you !</h1>
            <p className="w-[70%] font-medium text-[1.4vw]">
              As a digital branding agency, we help businesses connect with
              their customers by using a variety of tools and services. This
              includes creating logos for our clients, website design and
              development, content creation, and social media management, among
              others.
            </p>
          </div>
          <div className="w-[50vw] h-[45vw] relative drop-shadow-2xl shadow-xl">
            <Image src="/assets/images/contact/contact-head.png" alt="contac-head-img" className="object-cover h-full w-full " fill/>
          </div>
        </div>
      </section>
    </>
  );
}
