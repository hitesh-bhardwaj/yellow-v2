import React from 'react'

export default function Pagehero() {
  return (
    <>
    <section className='w-screen h-screen relative flex items-center  mobile:py-[15%] mobile:flex-col mobile:items-start mobile:justify-end mobile:h-[80vh] tablet:w-full tablet:h-[50vh]' id='hero'>
      
       
            <video src='/assets/images/portfolio/videos/Maveroc-bg.mp4' autoPlay={true} loop muted className='w-screen h-[100vh] mobile:h-[80vh] absolute top-0 left-0 object-cover z-[-1] tablet:w-full tablet:h-[50vh]'></video>
            <div className='container'>
            <h1 data-title-anim className='text-[5.4vw] text-white ps-[5%] uppercase font-display mobile:text-[10vw] mobile:ps-0 mobile:mb-[10vw] tablet:ps-[2%] tablet:text-[7vw] '>
                Maveroc

            </h1>
            <div className="absolute bottom-[7%] right-[7%] flex gap-[1.5vw] text-white mobile:static mobile:gap-[3vw]">
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.5vw] text-[1.2vw] fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw] bg-white bg-opacity-15 tablet:text-[2vw]">
                Digital Marketing
              </p>
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw] fadeup mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw] bg-white bg-opacity-15 tablet:text-[2vw]">
                Brand name
              </p>
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw] fadeup mobile:text-[4vw] mobile:hidden tablet:text-[2vw]">
                2024
              </p>
              
            </div>

            </div>
           

        

    </section>
      
    </>
  )
}


