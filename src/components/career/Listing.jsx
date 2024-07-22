
import React from 'react';
import BlackButton from '../Button/BlackButton';

export default function Listing() {
  // Array of job listings data
  const jobListings = [
    { title: 'Designer', location: 'Dubai', link: '/' },
    { title: 'Web Designer', location: 'Dubai', link: '/' },
    { title: 'Account Executive', location: 'Dubai', link: '/' },
    { title: 'Account manager', location: 'Dubai', link: '/' }
  ];

  return (
    <>
      <section id='essentials' className='bg-[#111111] text-white py-[7%] mobile:py-[15%] tablet:py-[10%] dark'>
        <div className='container'>
          <h2 data-title-anim className='text-[4.2vw] font-display mb-[2vw] mobile:text-[10vw] mobile:mb-[5vw] tablet:text-[6vw] '>
            Open positions
          </h2>
          <p data-para-anim className='text-[1.4vw] font-medium w-[30%] mb-[5vw] mobile:w-full mobile:text-[4.5vw] mobile:mb-[12vw] tablet:text-[2vw] tablet:w-[70%]'>
            As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.
          </p>
          <div className='w-full h-full flex flex-col gap-y-[2vw] mobile:gap-y-[4vw] tablet:gap-y-[3vw]'>
            {jobListings.map((job, index) => (
              <div key={index} className='fadeup'>
                <div className='w-full grid grid-cols-3 h-[10vw] bg-transparent border-[1px] border-white text-white rounded-[15px] py-[2vw] px-[3vw] justify-between items-center text-[1.8vw] hover:bg-white hover:text-black hover:drop-shadow-2xl hover:shadow-xl transition-all ease duration-700 mobile:h-[20vw] mobile:flex tablet:h-[15vw] '>
                  <p data-para-anim className='col-start-1 mobile:text-[4.5vw] tablet:text-[2.5vw] '>{job.title}</p>
                  <p data-para-anim className='col-start-2 text-center mobile:hidden tablet:text-[2.5vw]'>{job.location}</p>
                  <div className='col-start-3 flex justify-end'>
                    
                  <BlackButton btnLink={job.link} btnText={"Apply Now"} className='border-white bg-white mobile:text-[3vw] mobile:bg-[#111111] mobile:text-white tablet:text-[2vw] tablet:py-[1.5vw] ' />


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
