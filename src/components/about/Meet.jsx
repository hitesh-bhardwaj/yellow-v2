import React from "react";

export default function Meet() {
  return (
    <>
      <section className="px-[5vw] w-full h-full py-[5%]">
        <h2 className="text-[5.7vw] font-display uppercase mb-[3vw]">
          Meet the peoples
        </h2>
        <p className="text-[2vw] w-[30%] font-medium leading-[1.2]">
          We grow amazing companies through exceptional branding and
          communications.
        </p>
        <div className="flex gap-[2vw] mt-[10vw]">
          <div className="w-[30vw] h-[32vw] relative group cursor-pointer">
            <img
              src="/assets/images/about/meet-1.png"
              alt="meet-1"
              className="object-contain h-full w-full"
            />
            <div className="absolute px-[1.5vw] py-[1.5vw] z-[2] bottom-0">
              <div className="text-white flex w-full justify-between h-full">
                <div className="flex flex-col">
                  <h4 className="text-[2vw] font-display mb-[0.4vw] uppercase">
                    Wael Bittar
                  </h4>
                  <p className="">Communication Director</p>
                </div>
                
              </div>
              
            </div>
            <div className="absolute right-[10%] bottom-[10%]">
                  <svg
                    className="relative -rotate-[135deg] w-[2.3vw] h-[2.3vw] overflow-hidden"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                      d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                      fill="#ffffff"
                    />
                    <path
                      className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                      d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
          </div>
          <div className="w-[30vw] h-[32vw] bg-[#D9D9D9] relative">
            <img
              src="/assets/images/about/meet-2.png"
              alt="meet-1"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="w-[30vw] h-[32vw] relative">
            <img
              src="/assets/images/about/meet-3.png"
              alt="meet-1"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
