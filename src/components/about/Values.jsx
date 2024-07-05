import React from 'react'
import Image from 'next/image'

export default function values() {
  return (
    <>
    <section className=' h-full w-full py-[10%]' id='values'>
        <div className='container'>
        <h2 className='text-[5.7vw] font-display uppercase mb-[3vw]'>Our Values</h2>
        <p className='text-[2vw] w-[30%] font-medium leading-[1.2]'>
        We grow amazing companies through exceptional branding and communications.
        </p>
        <div className='flex w-full gap-[1.5vw] mt-[8vw]'>
            <div className='w-[30vw] h-[25vw] rounded-[15px] bg-[#FBDF57] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 drop-shadow-2xl shadow-2xl'>
                <div >
                    <div className='w-[4.5vw] h-[5vw] relative'><Image src='/assets/images/about/icon-1.png' alt='icon-1' fill/></div>
                    <h4 className='text-[2.4vw] font-display mt-[3vw] mb-[2vw]'>
                    Trust


                    </h4>
                    <p className='text-[1.2vw] w-[90%] font-medium leading-[1.4]'>
                    Here are many variations of passages of Lorem Ipsum available, but the majority have suffered.

                    </p>
                </div>

            </div>
            <div className='w-[30vw] h-[25vw] rounded-[15px] bg-[#FB8464] translate-y-[20%] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 drop-shadow-2xl shadow-2xl relative'>
                <div className='text-white'>
                <div className='w-[5vw] h-[5vw] relative'><Image src='/assets/images/about/icon-2.svg' alt='icon-2' fill/></div>
                    <h4 className='text-[2.4vw] font-display mt-[3vw] mb-[2vw]'>
                    Responsibility


                    </h4>
                    <p className='text-[1.2vw] w-[90%] font-medium leading-[1.4]'>
                    Here are many variations of passages of Lorem Ipsum available, but the majority have suffered.

                    </p>
                </div>

            </div>
            <div className='w-[30vw] h-[25vw] rounded-[15px] bg-[#B48BEF] translate-y-[40%] py-[2vw] px-[2vw] border-[0.5px] border-white border-opacity-50 drop-shadow-2xl shadow-2xl relative '>
                <div className='text-white' >
                <div className='w-[5vw] h-[5vw] relative'><Image src='/assets/images/about/icon-3.svg' alt='icon-3' fill/></div>
                    <h4 className='text-[2.4vw] font-display mt-[3vw] mb-[2vw]'>
                    Team Work


                    </h4>
                    <p className='text-[1.2vw] w-[90%] font-medium leading-[1.4]'>
                    Here are many variations of passages of Lorem Ipsum available, but the majority have suffered.

                    </p>
                </div>

            </div>
        </div>

        </div>
        

    </section>
      
    </>
  )
}


