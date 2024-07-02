import React from 'react'
import Link from 'next/link'

export default function Works() {
  return (
    <>
    <section className='w-full h-full py-[8%] px-[5vw]'>
        <div className='w-full flex justify-between mb-[5vw]'>
            <h2 className='text-[5.8vw] font-display uppercase'>Related Works</h2>
            <Link
                className={`cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium group `}
                href="#"
              >
                <span className="relative after:absolute leading-[1.3] after:block after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-body after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">
                See more to our work
                </span>
                <svg
                  className="relative -rotate-[135deg] w-[2vw] h-[2vw] overflow-hidden"
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
        <div className='w-full flex gap-[1.5vw]'>
            <div className='w-full h-full relative'>
                <Link href={"/"}>
                <img src='/assets/images/portfolio/portfolio-detail/work1.png' alt='work1'/>
                <div className="absolute bottom-[7%] left-[7%] text-white">
              <h3 className="text-[2vw] mb-[1vw] font-display">Numu</h3>
              <p className="w-[70%] text-[1.1vw] leading-[1.4] font-medium">
              Brand identity for a premium early childhood centre
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-white">
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
              Brand Strategy
              </button>
              <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
                Brand Name
              </button>
            </div>

                </Link>
            </div>
            <div className='w-full h-full relative'>
                <Link href={"/"}>
                <img src='/assets/images/portfolio/portfolio-detail/work2.png' alt='work1'/>
                <div className="absolute bottom-[12%] left-[7%] text-black">
              <h3 className="text-[2vw] mb-[1vw] font-display">Luma</h3>
              <p className="w-full text-[1.1vw] leading-[1.4] font-medium">
              A brighter way to play
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-black rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
              Brand Strategy
              </button>
              <button className="w-fit border-[1px] border-black rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
                Brand Name
              </button>
            </div>

                </Link>
            </div>
            <div className='w-full h-full relative'>
                <Link href={"/"}>
                <img src='/assets/images/portfolio/portfolio-detail/work3.png' alt='work1'/>
                <div className="absolute bottom-[7%] left-[7%] text-black">
              <h3 className="text-[2vw] mb-[1vw] font-display">Misk</h3>
              <p className="w-[90%] text-[1.1vw] font-medium leading-[1.4]">
              Bespoke jewellery, from the UAE to the world
              </p>
            </div>
            <div className="absolute top-[7%] left-[7%] flex gap-[1.5vw] text-black">
              <button className="w-fit border-[1px] border-black rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
              Brand Strategy
              </button>
              <button className="w-fit border-[1px] border-black rounded-[30px] backdrop-blur-md px-[1vw] py-[0.2vw] text-[1vw]">
                Brand Name
              </button>
            </div>

                </Link>
            </div>
        </div>

    </section>
      
    </>
  )
}

