/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { titleAnim, paraAnim, lineAnim, fadeUp, imageAnimationDown } from '@/components/gsapAnimations';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import Image from 'next/image';
import Line from '@/components/Line';
import LinkButton from '@/components/Button/LinkButton';
import React from 'react';
import RelatedWork from '@/components/RelatedWork';

export default function servicesdetail({ recentWorks }) {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();
  imageAnimationDown();

  const metadata = {
    title: "Brand Strategy Services In Dubai, UAE - Yellow Agency",
    description: "Our full-service brand strategy services include brand workshop, audit & research, positioning, architecture & staff engagement. Contact us today for brand strategy expertise in Dubai & UAE.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/brand-strategy"
  }

  const services = [
    {
      title: "Brand positioning",
      paragraphs: [
        "Knowing where your brand stands right now is key to making more empowered choices that will serve your goals in the future. Through brand workshop, audit and research, make the smart decisions for your brand through a data-based, results-driven brand workshop, audit and research.",
        "Building a brand strategy in Dubai and similarly high-stake markets requires a discovery process that uses a big-thinking, growth-driven approach. The brand audit is an opportunity to not just take an honest look at your brand’s direction, but more importantly to challenge it. Yellow has the framework to allow you to accomplish this delicate process with precision and expertise.",
        "Schedule a brand workshop here.",
      ],
      image: "/assets/images/service/brand-strategy/Brand-Positioning.png",
    },
    {
      title: "Brand architecture",
      paragraphs: [
        "From holding companies spanning multiple sectors to product ranges and sub-brands, defining your brand architecture brings order to your organization. This process allows you to transfer equity between business units, thereby allowing a newer, less established service to capitalize on the recognition of a more well-known one.",
        "Through brand architecture shown in visual format such as diagrams and illustrations, we create association between business units where you need it and distance where you don’t. A well-defined, thoughtfully designed brand architecture diagram allows you to define the brand accurately, in a way that the target audience can understand and truly resonate with.",
        "Define brand perception and brand reputation with a smartly designed brand architecture.",
      ],
      image: "/assets/images/service/brand-strategy/Brand-Architecture.png",
    },
    {
      title: "Staff engagement",
      paragraphs: [
        "When your team fully understands and embraces your brand, they become your greatest champions. Through structured workshops and seminars, we make sure your staff grasps your brand positioning, what makes it different from your competitors and how it looks, sounds and acts when interacting with the market it serves.",
        "We believe that a brand’s own people are its greatest ambassadors. Combining data analytics, talent insights and company culture exercises, we’ll work directly with you to make sure that your staff are your brand’s most passionate voice.",
        "Engage your brand’s very own champions.",
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
              Corporate Branding Strategy
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
              <h3 data-para-anim className="text-[2.2vw] font-display mobile:text-[7.5vw] tablet:text-[3vw]">Brand Strategy</h3>
              <ul className="list-disc pl-[1.5vw] mobile:pl-[4vw]">
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Brand Guidelines
                </li>
                <li data-para-anim className="text-[1.2vw] font-medium mobile:text-[4vw] mobile:font-normal tablet:text-[2vw]">
                  Brand Imagery
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Works Section */}
        <RelatedWork
          works={recentWorks}
          heading={"Our Work"}  
          subheading={"We grow amazing companies through exceptional branding and communications."}
        />
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


