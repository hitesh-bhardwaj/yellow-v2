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
          <div className="flex justify-between w-full mobile:flex-col mobile:gap-[10vw] tablet:flex-col tablet:gap-[7vw]">
            <div className="flex flex-col gap-[4vw] w-[60%] mobile:order-2 mobile:w-full mobile:gap-[10vw] tablet:order-2 tablet:w-full">
              <div className="flex gap-[1vw] mobile:flex-col mobile:mt-[4vw] ">
                <h2 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Are
                </h2>
                <ul className="text-[1.3vw] w-full mobile:text-[4vw] tablet:text-[2.5vw] list-disc">
                  <li className="fadeup">An extension of your team</li>
                  <li className="fadeup">The outside perspective you need</li>
                  <li className="fadeup">Insightful, effective and nice (an underrated but very important quality)</li>
                  <li className="fadeup">The perfect blend of strategy, art, imagination, impeccable taste and a sprinkle of magic</li>
                  <li className="fadeup">Great thinkers and even better doers</li>
                  <li className="fadeup">Huge fans of work/life balance</li>
                  <li className="fadeup">Namers, strategists, designers, researchers, artists, partners, terrible but enthusiastic singers</li>
                </ul>
              </div>
              <div className="flex gap-[1vw] mobile:flex-col">
                <h2 data-title-anim className="text-[1.6vw] w-[30%] font-display uppercase heading-anim mobile:text-[7vw] mobile:w-full tablet:text-[3vw] tablet:w-[40%]">
                  We Aren’t
                </h2>
                <ul className="text-[1.3vw] w-full mobile:text-[4vw] tablet:text-[2.5vw] list-disc">
                  <li className="fadeup">Able to work for free - got bills to pay, y&apos;all!</li>
                  <li className="fadeup">Complicated, stuffy and full of unhelpful jargon</li>
                  <li className="fadeup">Specialised in PR / Events / Media / Web Developers - but we can always connect you with them</li>
                  <li className="fadeup">Know-it-alls</li>
                  <li className="fadeup">The kind of consultants that prepare a 100 slide deck with no substance</li>
                  <li className="fadeup">Your &apos;suppliers&apos;, we are your partners</li>
                  <li className="fadeup">Bureaucratic and slow to move and react</li>
                </ul>
              </div>
            </div>
            <div className="h-[41vw] w-[30vw] relative mobile:w-[85vw] mobile:h-[105vw] tablet:w-[85vw] tablet:h-[80vw] image-animation-left-wrapper">
              <div className="h-full w-full">
                <Image src="/assets/images/about/partners-image.webp" alt="about-hero" fill className="object-cover h-full w-full" priority={true} quality={100} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
