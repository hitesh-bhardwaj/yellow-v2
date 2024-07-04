import React from "react";

export default function Pagehero() {
  return (
    <>
      <section className="w-full h-[120vh] px-[5vw] flex items-center">
        <div className="flex justify-between w-full">
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
          <div className="w-[50%] h-[90%]">
            <img src="/assets/images/contact/contact-head.png" alt="contac-head-img" className="object-cover drop-shadow-2xl shadow-xl"/>
          </div>
        </div>
      </section>
    </>
  );
}
