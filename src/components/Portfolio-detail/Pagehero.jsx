import React from 'react'

export default function Pagehero() {
  return (
    <>
    <section className='w-screen h-screen relative flex items-center '>
       
            <video src='/assets/images/portfolio/videos/Maveroc-bg.mp4' autoPlay={true} loop muted className='w-screen h-[100vh] absolute top-0 left-0 object-cover z-[-1]'></video>
            <h1 className='text-[5.4vw] text-white ps-[5%] uppercase font-display'>
                Maveroc

            </h1>
            <div className="absolute bottom-[7%] right-[7%] flex gap-[1.5vw] text-white">
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.5vw] text-[1.2vw]">
                Digital Marketing
              </p>
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw]">
                Branding
              </p>
              <p className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[2.5vw] py-[0.5vw] text-[1.2vw]">
                2024
              </p>
              
            </div>

        

    </section>
      
    </>
  )
}


