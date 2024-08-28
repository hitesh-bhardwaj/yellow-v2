import React from "react";
import Image from "next/image";
import Section from "../Section";
import { imageAnimationLeft } from "../gsapAnimations";

export default function Pagehero() {

  imageAnimationLeft();

  return (
    <>
      <Section id="hero">
        <div className="container">
          <div className="w-full h-full pt-[10%] flex items-center mb-[7vw] mobile:pt-[30%] ">
            <h1 data-title-anim className="text-[5.7vw] font-display uppercase heading-anim mobile:text-[12vw] tablet:text-[7vw]">Who We Are</h1>
          </div>
          <div className="flex gap-[5vw] w-full mobile:flex-col mobile:gap-[10vw] tablet:flex-col tablet:gap-[7vw]">
            <div className="flex flex-col gap-[4vw] w-[65%] mobile:order-2 mobile:w-full mobile:gap-[10vw] tablet:order-2 tablet:w-full">
              <div className="flex gap-[1vw] mobile:flex-col mobile:mt-[4vw] ">
                <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Are
                </h3>
                <p data-para-anim className="text-[1.3vw] w-full mobile:text-[4vw] tablet:text-[2.5vw]">
                   The outside perspective you need. Insightful, effective and nice (an underrated but very important quality). The perfect blend of strategy, art, imagination, impeccable taste and a sprinkle of magic Great thinkers and even better doers Huge fans of work/life balance Namers, strategists, designers, researchers, artists, partners, terrible but enthusiastic singers.
                </p>
              </div>
              <div className="flex gap-[1vw] mobile:flex-col">
                <h3 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Aren’t
                </h3>
                <p data-para-anim className="text-[1.3vw] w-full mobile:text-[4vw] tablet:text-[2.5vw]">
                  Able to work for free - got bills to pay, y&apos;all! Complicated, stuffy and full of unhelpful jargon Specialised in PR / Events / Media / Web Developers - but we can always connect you with them Know-it-alls The kind of consultants that prepare a 100 slide deck with no substance Your &apos;suppliers&apos;, we are your partners Bureaucratic and slow to move and react.
                </p>
              </div>
            </div>
            <div className=" h-[40vw] w-[40vw] relative mobile:w-[85vw] mobile:h-[105vw] tablet:w-[85vw] tablet:h-[80vw] image-animation-left-wrapper">
              <div>
                <Image src="/assets/images/about/about-hero.png" alt="about-hero" fill className="object-cover h-full w-full" priority={true} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
