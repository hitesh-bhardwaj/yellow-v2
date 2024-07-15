import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'

export default function Work() {
  return (
    <>
    <section className='w-full h-full py-[8%] mobile:py-[15%]' id='work'>
      <div className='container'>
      <div className='w-full flex justify-between mb-[5vw] mobile:flex-col mobile:mb-[10vw]'>
        <div>
        <SectionTitle text={"Our work"} className={"mb-[3vw]"}/>
        <p data-para-anim className="text-[1.9vw] w-[60%] font-medium leading-[1.2] mobile:w-[90%] mobile:text-[5vw] mobile:mb-[7vw]">
        We grow amazing companies through exceptional branding and communications.
        </p>

        </div>
        
            <Link
                className={`cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium group mobile:text-[5vw] mobile:gap-[2vw] `}
                href="#"
              >
                <span className="relative after:absolute leading-[1.3] after:block after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-body after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0 ">
                See All work
                </span>
                <svg
                  className="relative -rotate-[135deg] w-[2vw] h-[2vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw]"
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                    fill="currentColor"
                  />
                  <path
                    className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                    d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
        </div>
        <div className='w-full flex justify-between gap-[3vw] mobile:flex-col mobile:gap-[7vw]'>
            <div className='w-[45vw] h-[45vw] relative bg-[#93A374] rounded-[15px] overflow-hidden fadein mobile:w-[85vw] mobile:h-[90vw] mobile:rounded-none'>
                <Link href={"/"}>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><img src='/assets/images/about/work-1.png' alt='work-1'/></div>
                <div className="absolute bottom-[7%] left-[7%] text-white">
              <h3 data-title-anim className="text-[2.5vw] mb-[1vw] font-display mobile:text-[7vw] ">Numu</h3>
              <p data-para-anim className="w-full text-[1.1vw] leading-[1.4] font-medium  mobile:text-[4vw]">
              Brand identity for a premium early childhood centre
              </p>
            </div>
            <div className="absolute top-[5%] left-[7%] flex gap-[1.5vw] text-white mobile:gap-[3vw]">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-lg px-[1.4vw] py-[0.4vw] text-[1.4vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw]">
              Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-lg px-[1.4vw] py-[0.4vw] text-[1.4vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw]">
                Brand Name
              </button>
            </div>

                </Link>
            </div>
            <div className='w-[45vw] h-[45vw] relative bg-[#FB8464] rounded-[15px] overflow-hidden fadein mobile:w-[85vw] mobile:h-[90vw] mobile:rounded-none'>
                <Link href={"/"}>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30vw] h-[7vw]'><img src='/assets/images/about/work-2.png' alt='work-2' className='object-cover h-full w-full'/></div>
                <div className="absolute bottom-[7%] left-[7%] text-white">
              <h3 data-title-anim className="text-[2.5vw] mb-[1vw] font-display mobile:text-[7vw] ">Beema</h3>
              <p data-para-anim className="w-full text-[1.1vw] leading-[1.4] font-medium mobile:text-[4vw] ">
              A brand refresh for the region’s first pay-per-mile provider
              </p>
            </div>
            <div className="absolute top-[5%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-lg px-[1.4vw] py-[0.4vw] text-[1.4vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw]">
              Digital Marketing
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-lg px-[1.4vw] py-[0.4vw] text-[1.4vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[1vw]">
                Brand Name
              </button>
            </div>

                </Link>
            </div>
            
        </div>

      </div>
       

    </section>
      
    </>
  )
}

 
