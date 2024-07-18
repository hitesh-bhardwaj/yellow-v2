import React from "react";

function PageHero() {
  return (
    <>
      <section className="w-screen h-full mobile:h-[70vh] bg-white tablet:h-full tablet:w-full" id="hero">
        <div className=" h-full flex flex-col justify-center container tablet:py-[15%] pt-[12%]">
          <h1 data-title-anim className="text-[5.7vw] w-fit font-display leading-[1.1] mb-[2vw] mobile:text-[12vw] mobile:mb-[7vw] tablet:text-[7vw] ">OUR WORK</h1>
          <p  className="text-[1.5vw] text-black  w-full font-medium leading-[1.4] flex justify-between mobile:flex-col mobile:text-[4vw] tablet:text-[2.2vw]">
            <span data-para-anim className="w-[55%] block mobile:w-full tablet:w-[50%] ">
            As a digital branding agency, we help businesses connect with their
            customers by using a variety of tools and services. We have worked
            with a range of clients, from budding entrepreneurs, to some of the
            biggest brands in the UAE.

            </span>
            
          
          </p>
          <div className="tablet:hidden mobile:block h-[1px] w-full bg-black mt-[5vw] lineDraw "></div>
        </div>
      </section>
    </>
  );
}

export default PageHero;
