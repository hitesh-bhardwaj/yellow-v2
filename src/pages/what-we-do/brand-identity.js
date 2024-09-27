/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { titleAnim, paraAnim, lineAnim, fadeUp, imageAnimationDown } from '@/components/gsapAnimations';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import Work from '@/components/services-detail/Work';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import Image from 'next/image';
import Line from '@/components/Line';
import LinkButton from '@/components/Button/LinkButton';
import React from 'react';

export default function servicesdetail({ recentWorks }) {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();
  imageAnimationDown();

  const metadata = {
    title: "Brand Identity Creation Dubai - Yellow Agency",
    description: "We use brand identity, logo design, and graphic design to build compelling brands that exist across traditional, retail, digital, and social media channels.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/brand-identity"
  }

  const services = [
    {
      title: "Visual identity design",
      paragraphs: [
        "Putting together a visual identity system for your brand is about creating a visual system that works to shape and create a brand that is distinctive and recognizable. Starting with your logo, it is a collection of carefully considered marks, colours, typographic choices and photographic or illustrative styles that work together both on and offline.",
        "Here we put your visual system to the test. We look at how it all comes together across every touchpoint your audiences will interact with – be it web based applications, traditional print advertising or even retail spaces and signgae systems.",
        "Perhaps you have a brand that could do with a facelift? Or you’re looking to create a new visual identity? Whatever the case, get in touch so we can start building a visual system refelctive of your brand’s personaltiy.",
      ],
      image: "/assets/images/service/brand-identity/Visual-Identity.png",
    },
    {
      title: "Brand messaging and tone of voice",
      paragraphs: [
        "How your brand speaks is driven by a carefully considered personality. Is the brand authoritative? Perhaps it’s a retail brand and should take a slightly less serious tone with its audiences? Whatever the case, it’s important that your brand speaks with a voice that is congruent with the how it looks, appears and acts.",
      ],
      image: "/assets/images/service/brand-identity/Brand-Messaging.png",
    },
    {
      title: "Brand guideliness",
      paragraphs: [
        "Developing a set of guidelines for a brand is to provide our clients with the tools they need to ensure their brand continues to exist as it was always meant to. We make sure to include everything anyone will ever need to fully understand, replicate, build on and even improve the overall brand experience. These manuals are much more than a simple set of rules and regulations – they aim to introduce newcomers to the brand, give them insight into the brand’s personality and the tone it should be taking with its customers.",
      ],
      image: "/assets/images/service/brand-strategy/Staff-Engagement.png",
    },
  ];

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>

        {/* Hero Section  */}
        <section className='w-full h-full  pt-[10%] tablet:pt-[15%] mobile:pt-[30%]  flex items-center bg-white' id='hero'>
          <div className='container '>
            <h1 data-para-anim className='text-[5.8vw] w-[80%] uppercase font-display mb-[7vw] leading-[1.3] mobile:text-[12vw] tablet:w-[90%]  mobile:w-full tablet:text-[7vw] mobile:mb-[15vw]'>
              Corporate Brand Identity
            </h1>
            <div className="w-[90vw] h-[45vw] rounded-[15px] overflow-hidden relative fadeup mobile:w-[85vw] mobile:h-[140vw] tablet:w-[85vw]">
              <Image
                src="/assets/images/service/service-detail/service-detail-hero.png"
                alt="service-detail-hero"
                className='object-cover w-full h-full'
                fill
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="" id='about'>
          <div className='container pb-[2%] mobile:pt-[5%]'>
            <div className="w-full flex justify-between mt-[5vw] mb-[12vw] mobile:flex-col">
              <p data-para-anim className="text-[1.75vw] font-medium text-[#333333] w-[45%] leading-[1.4] mobile:text-[5vw]  mobile:w-full mobile:mb-[7vw] tablet:text-[2.5vw] tablet:w-[50%]">
                Our approach to branding and design transcends simple aesthetics to
                forge meaningful brands. We believe that a successful brand identity
                requires alignment with core beliefs and an impactful purpose.
              </p>
              <p data-para-anim className="text-[1.3vw] font-medium text-[#111111] w-[40%] mobile:font-normal mobile:text-[4vw]  mobile:w-full tablet:text-[2vw] tablet:w-[40%]">
                Our approach to branding and design transcends simple aesthetics to
                forge meaningful brands. We believe that a successful brand identity
                requires alignment with core beliefs and an impactful purpose.
              </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] mobile:flex mobile:flex-col mobile:gap-[10vw] tablet:flex tablet:flex-col tablet:gap-[5vw]">
              <div className="col-span-1">
                <h3 data-para-anim className="text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  Brand workshop, audit and research
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                  Relevance. Differentiation. Connections. Conversions. Stay true to
                  your brand promise and make a meaningful impact with a clear
                  mission and plan of action when you work with our brand strategy
                  agency in Dubai
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:flex mobile:flex-col ">
                <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  Why work with us
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                  Brand strategy development is inevitably complex and complicated.
                  The beauty of working with Yellow is you get to move forward with
                  brand building without disrupting your operations. More than
                  planning, we’ll help you design a clear, compelling vision and a
                  plan to make it happen.
                </p>
              </div>
              <div className="col-span-1 col-start-3 flex mobile:flex-col tablet:flex-col">
                <h3 data-para-anim className=" text-[2vw] font-display mobile:text-[8vw] tablet:font-medium tablet:text-[4vw] capitalize leading-[1.4]">
                  What to expect: Brand strategy consulting
                </h3>
                <div className="h-[1px] w-full bg-black mobile:block hidden lineDraw my-[6vw] tablet:block tablet:my-[3vw]"></div>
                <p data-para-anim className='hidden mobile:block text-[4.5vw] tablet:block tablet:text-[2.5vw]'>
                  Before we begin defining your brand strategy, it is important for
                  us to understand as much about your business, your sector and your
                  customers as we can. During our client-agency brand workshop,
                  we’ll spend time with you and other key stakeholders in the
                  business learning about your aspirations for the brand and your
                  market. Together, we’ll begin the process of mapping out the best
                  path to elevate your brand to its full potential.
                </p>
              </div>
              <div className='col-span-3 tablet:hidden'>
                <Line className="my-[1.8vw] " />
              </div>

              <div className="col-span-1 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Relevance. Differentiation. Connections. Conversions. Stay true to
                  your brand promise and make a meaningful impact with a clear
                  mission and plan of action when you work with our brand strategy
                  agency in Dubai.
                </p>
              </div>
              <div className="col-span-1 col-start-2 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Brand strategy development is inevitably complex and complicated.
                  The beauty of working with Yellow is you get to move forward with
                  brand building without disrupting your operations. More than
                  planning, we’ll help you design a clear, compelling vision and a
                  plan to make it happen.
                </p>
              </div>
              <div className="col-span-1 col-start-3 mobile:hidden tablet:hidden">
                <p data-para-anim className="text-[1.2vw] font-medium ">
                  Before we begin defining your brand strategy, it is important for
                  us to understand as much about your business, your sector and your
                  customers as we can. During our client-agency brand workshop,
                  we’ll spend time with you and other key stakeholders in the
                  business learning about your aspirations for the brand and your
                  market. Together, we’ll begin the process of mapping out the best
                  path to elevate your brand to its full potential.
                </p>
              </div>
              <div className="h-[1px] col-span-3 bg-black my-[4vw] lineDraw hidden mobile:block tablet:block"></div>
              <div className="my-[3vw] col-span-3 tablet:hidden mobile:hidden">
                <Line />
              </div>
            </div>
          </div>
        </section>

        {/* Detail Section */}
        <section className="w-full h-full bg-black " id="detail">
          <div className=" container mobile:flex mobile:flex-col tablet:flex-col tablet:flex pb-[5%] bg-white">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <div className="tablet:flex mobile:flex mobile:flex-col tablet:gap-[2vw] flex mobile:gap-0 gap-[15vw]">
                  <div className="col-start-3 flex justify-end mobile:justify-center tablet:order-1 order-1 mobile:order-none">
                    <div className="w-[22.5vw] h-[28vw] rounded-[10px] overflow-hidden relative image-animation-down-wrapper mobile:w-[86vw] mobile:h-[85vw] mobile:mt-[5vw] tablet:w-[30vw] tablet:h-[30vw]">
                      <div>
                        <Image
                          loading='lazy'
                          src={service.image}
                          alt={`${service.title} Image`}
                          className="absolute h-full w-full object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col w-[60%] gap-[1.5vw] mobile:w-full mobile:my-[10vw] mobile:gap-[5vw]">
                    <h2 data-para-anim className="text-[2.5vw] font-display mobile:text-[8vw] tablet:text-[4vw]">
                      {service.title}
                    </h2>
                    {service.paragraphs.map((para, paraIndex) => (
                      <p
                        key={paraIndex}
                        data-para-anim
                        className="text-[1.1vw] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]"
                      >
                        {para}
                      </p>
                    ))}
                    <div className="fadeup mt-[1vw]">
                      <LinkButton
                        btnLink={"/contact-us"}
                        btnText={"Connect With Yellow"}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[1px] col-span-3 bg-black my-[2vw] tablet:my-[6vw] lineDraw hidden tablet:block mobile:block"></div>
                <div className="my-[3vw] tablet:h-[2px] tablet:my-[6vw] tablet:hidden">
                  <Line />
                </div>
              </React.Fragment>
            ))}
            <div className="flex flex-col gap-[1.5vw] mobile:order-8 mobile:my-[5vw]">
              <h3 data-para-anim className="text-[2.2vw] font-display mobile:text-[7.5vw] tablet:text-[3vw]">Brand Identity</h3>
              <ul className="list-disc pl-[1.5vw] mobile:pl-[4vw]">
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Logo Design
                </li>
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Brand Imagery
                </li>
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Colour Systems
                </li>
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Brand Guidelines
                </li>
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Illustration Style
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Works Section */}
        <Work works={recentWorks} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getRelatedPortfolioForPages("brand-strategy");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}