import React from "react";

function PageHero() {
  return (
    <>
      <section className="w-screen h-[80vh] bg-white" id="hero">
        <div className=" h-full flex flex-col justify-center container">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] ">OUR WORK</h1>
          <p  className="text-[1.5vw] text-black  w-full font-medium leading-[1.4] flex justify-between">
            <span data-para-anim className="w-[40%] block ">
            As a digital branding agency, we help businesses connect with their
            customers by using a variety of tools and services. We have worked
            with a range of clients, from budding entrepreneurs, to some of the
            biggest brands in the UAE.

            </span>
            <span data-para-anim className="w-[30%] block ">
            Browse through our work to get a better understanding of what we can do for you.
            </span>
          
          </p>
        </div>
      </section>
    </>
  );
}

export default PageHero;
