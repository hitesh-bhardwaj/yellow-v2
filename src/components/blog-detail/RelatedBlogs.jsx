import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";


export default function RelatedBlogs() {
  return (
    <>
      <section id="relatedBlog">
        <div className="container py-[7%] mobile:pb-[20%]">
          <div className="w-full flex justify-between mb-[4vw] mobile:flex-col mobile:gap-[7vw] mobile:mb-[10vw]">
            <h2 data-title-anim className="text-[5.7vw] font-display uppercase mobile:text-[9.5vw] " >Related Blogs</h2>
            
            
            <div className="fadeup flex items-end">
            <LinkButton
              btnLink={"/"}
              btnText={"All Blogs"}
              className="text-[1.8vw] font-medium mobile:text-[5vw] tablet:text-[2.5vw]"
            />

            </div>
            
          </div>
          <div className="flex justify-between mobile:flex-col mobile:gap-[7vw]">
            
            <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group fadeup mobile:w-[85vw] mobile:h-full tablet:w-[41vw] tablet:h-full">
              <div className="w-[28vw] h-[15vw] relative mobile:w-[85vw] mobile:h-[50vw] tablet:w-[41vw] tablet:h-[25vw]">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white mobile:gap-[2vw]">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw] mobile:px-[4vw] mobile:py-[7vw] mobile:gap-[5vw] tablet:pb-[2vw]">
                <h3 data-para-anim className="text-[1.5vw] font-display leading-[1.2] mobile:text-[6.5vw] tablet:text-[3vw] ">
                  Packaging Design: Elevating Your Product’s Visual Appeal and
                  Brand Identity
                </h3>

                <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className="text-[1.5vw] mobile:text-[5vw] tablet:text-[2vw]"
                />
              </div>
            </div>
            

           
            <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group fadeup mobile:w-[85vw] mobile:h-full tablet:w-[41vw] tablet:h-full">
              <div className="w-[28vw] h-[15vw] relative mobile:w-[85vw] mobile:h-[50vw] tablet:w-[41vw] tablet:h-[25vw]">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white mobile:gap-[2vw]">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw] mobile:px-[4vw] mobile:py-[7vw] mobile:gap-[5vw] tablet:pb-[2vw]">
                <h3 data-para-anim className="text-[1.5vw] font-display leading-[1.2] mobile:text-[6.5vw] tablet:text-[3vw] ">
                  Packaging Design: Elevating Your Product’s Visual Appeal and
                  Brand Identity
                </h3>

                <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className="text-[1.5vw] mobile:text-[5vw] tablet:text-[2vw]"
                />
              </div>
            </div>
          
          
            <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group fadeup mobile:w-[85vw] mobile:h-full tablet:hidden">
              <div className="w-[28vw] h-[15vw] relative mobile:w-[85vw] mobile:h-[50vw]">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white mobile:gap-[2vw]">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw] mobile:px-[4vw] mobile:py-[7vw] mobile:gap-[5vw]">
                <h3 data-para-anim className="text-[1.5vw] font-display leading-[1.2] mobile:text-[6.5vw] ">
                  Packaging Design: Elevating Your Product’s Visual Appeal and
                  Brand Identity
                </h3>
              
               <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className={"text-[1.4vw] mobile:text-[5vw] "}
                />

               
                
              </div>
            </div>
          
            
          </div>
        </div>
      </section>
    </>
  );
}
