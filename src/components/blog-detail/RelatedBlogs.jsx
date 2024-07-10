import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
export default function RelatedBlogs() {
  return (
    <>
      <section id="relatedBlog">
        <div className="container py-[7%]">
          <div className="w-full flex justify-between mb-[4vw]">
            <h2 className="text-[5.7vw] font-display uppercase heading-anim">
              Related Blogs
            </h2>
            <LinkButton
              btnLink={"/"}
              btnText={"All Blogs"}
              className="text-[1.4vw] font-medium"
            />
          </div>
          <div className="flex justify-between">
            
            <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group">
              <div className="w-[28vw] h-[15vw] relative">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw]">
                <h3 className="text-[1.5vw] font-display leading-[1.2] para-anim">
                  Packaging Design: Elevating Your Product&apos;s Visual Appeal and
                  Brand Identity
                </h3>

                <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className="text-[1.5vw]"
                />
              </div>
            </div>
            

           
           <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group">
              <div className="w-[28vw] h-[15vw] relative">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw]">
                <h3 className="text-[1.5vw] font-display leading-[1.2] para-anim">
                  Packaging Design: Elevating Your Product&apos;s Visual Appeal and
                  Brand Identity
                </h3>

                <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className="text-[1.5vw]"
                />
              </div>
            </div>
          
          
            <div className="w-[28vw] h-[30vw] border-[1px] border-black border-opacity-40 rounded-[10px] overflow-hidden group">
              <div className="w-[28vw] h-[15vw] relative">
                <Image
                  src="/assets/images/blog/bloglist-2.png"
                  alt="related-blog-1"
                  fill
                />
                <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white">
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Branding
                  </button>
                  <button className="w-fit border-[1px] border-white rounded-[30px] backdrop-blur-md px-[1.7vw] py-[0.2vw] text-[1vw]">
                    Digital
                  </button>
                </div>
              </div>
              <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw]">
                <h3 className="text-[1.5vw] font-display leading-[1.2] para-anim">
                  Packaging Design: Elevating Your Product&apos;s Visual Appeal and
                  Brand Identity
                </h3>

                <LinkButton
                  btnLink={"/"}
                  btnText={"Read Article"}
                  className="text-[1.5vw]"
                />
              </div>
            </div>
          
            
          </div>
        </div>
      </section>
    </>
  );
}
