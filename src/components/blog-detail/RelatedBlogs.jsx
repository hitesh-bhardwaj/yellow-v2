import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import Section from "../Section";

export default function RelatedBlogs({posts}) {
  return (
    <>
      <Section id="relatedBlog" className="bg-black">
        <div className="container pt-[5%] pb-[8%] bg-white mobile:pb-[20%]">
          <div className="w-full flex justify-between mb-[4vw] mobile:flex-col mobile:gap-[7vw] mobile:mb-[10vw]">
            <h2 data-title-anim className="text-[5.7vw] font-display uppercase mobile:text-[9.5vw]">
              Related Blogs
            </h2>
            <div className="fadeup flex items-end">
            <LinkButton
              btnLink={"/blog"}
              btnText={"All Blogs"}
              
            />
            </div>
          </div>
          <div className="flex justify-between gap-[2vw] mobile:flex-col mobile:gap-[7vw]">

            {posts.map((post,i) => (
              <div key={post.slug} className={`w-full border border-black/20 rounded-[10px] overflow-hidden group fadeup mobile:h-full ${i>1?"tablet:hidden":"tablet:block"}`}>
                <div className="h-[16vw] relative mobile:h-[50vw] tablet:h-[25vw]">
                  <Image
                    src={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                    fill
                    sizes={post.featuredImage.sizes}
                    quality={100}
                  />
                  <div className="absolute top-[7%] left-[7%] flex gap-[1vw] text-white mobile:gap-[2vw]">
                    <div className="w-fit border-[1px] border-white rounded-full backdrop-blur-lg px-[1.4vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                      {post.categories[1].name}
                    </div>
                    {post.categories[2] && (
                      <div className="w-fit border-[1px] border-white rounded-full backdrop-blur-lg px-[1.4vw] py-[0.2vw] text-[1vw] mobile:text-[4vw] mobile:px-[3vw] tablet:text-[2vw]">
                        {post.categories[2].name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full h-full px-[1.5vw] py-[1.5vw] flex flex-col gap-[2vw] mobile:px-[4vw] mobile:py-[7vw] mobile:gap-[5vw] tablet:py-[2.5vw]">
                  <h3 data-para-anim className="text-[1.5vw] font-display leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.2vw]">
                    {post.title}
                  </h3>
                  <LinkButton
                    btnLink={post.slug}
                    btnText="Read Article"
                    
                  />
                </div>
              </div>
            ))}          
          </div>
        </div>
      </Section>
    </>
  );
}
