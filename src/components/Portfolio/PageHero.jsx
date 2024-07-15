import React from "react";

function PageHero() {
  return (
    <>
      <section className="w-screen h-[80vh] mobile:h-[70vh] bg-white" id="hero">
        <div className=" h-full flex flex-col justify-center container">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] mobile:text-[12vw] mobile:mb-[7vw] ">OUR WORK</h1>
          <p  className="text-[1.5vw] text-black  w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[4vw]">
            <span data-para-anim className="w-[40%] block mobile:w-full ">
            As a digital branding agency, we help businesses connect with their
            customers by using a variety of tools and services. We have worked
            with a range of clients, from budding entrepreneurs, to some of the
            biggest brands in the UAE.

            </span>
            <span data-para-anim className="w-[30%] block mobile:w-full ">
            Browse through our work to get a better understanding of what we can do for you.
            </span>
          
          </p>
          <div className="hidden mobile:block h-[1px] w-full bg-black mt-[20vw]"></div>
        </div>
      </section>
    </>
  );
}

export default PageHero;
