import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
  return (
    <>
      <section id="detail">
        <div className="container">
          <div className="grid grid-cols-3 gap-x-[3vw]">
            <div className="col-start-1">
              <div className="flex flex-col mb-[4vw]">
                <h3 className="font-display text-[1.8vw] font-medium mb-[1.5vw] heading-anim">
                  Posted On :
                </h3>
                <p className="text-[1.2vw] font-medium para-anim">June 6, 2024</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-[1.8vw] font-medium mb-[1.5vw] heading-anim">
                  Share Article :
                </h3>
                <div className="flex gap-[0.7vw]">
                    <Link href={"/"}>
                    <div className="w-[3vw] h-[3vw] relative">
                    <Image
                      src="/assets/images/blog/blogdetail/fb.svg"
                      alt="fb-logo"
                      fill
                    />
                  </div></Link>

                  <Link href={"/"}>
                  <div className="w-[3vw] h-[3vw] relative">
                    <Image
                      src="/assets/images/blog/blogdetail/linkedin.svg"
                      alt="linkedin-logo"
                      fill
                    />
                  </div>
                  </Link>
                  <Link href={"/"}>
                  <div className="w-[3vw] h-[3vw] relative">
                    <Image
                      src="/assets/images/blog/blogdetail/x.svg"
                      alt="x-logo"
                      fill
                    />
                  </div>
                  </Link>
                  
                  
                </div>
              </div>
            </div>
            <div className="col-start-2 col-span-2">
              <p className="text-[2vw] font-medium mb-[2vw] para-anim">
                Imagine walking down a bustling street, passing by countless
                shops and businesses. In this sea of logos and brand symbols,
                only a few will truly capture your attention and stick in your
                memory.
              </p>
              <p className="text-[2vw] font-medium mb-[2vw] para-anim">
                Have you ever wondered what makes these logos so special? How do
                designers create these memorable brand symbols that become
                synonymous with a brand’s identity?
              </p>
              <p className="text-[2vw] font-medium mb-[2vw] para-anim">
                In this blog post, we will unravel the secrets behind these
                iconic symbols!
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
                The Art of Simplicity
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
                One of the key principles of logo design is simplicity. A
                memorable logo should be easy to recognize and recall, even from
                a distance. Think of the Apple logo—a simple, elegant apple
                silhouette with a bite taken out of it. It’s clean, it’s
                minimalistic, and yet, it’s incredibly powerful.
              </p> 
              <p className="text-[1.2vw] font-medium mb-[3vw] para-anim">
                Designers often use negative space, the area around and between
                the subjects of an image, to create clever and memorable brand
                symbols. The FedEx logo, for instance, uses negative space to
                hide an arrow between the “E” and the “x,” symbolizing speed and
                precision, which are core values of the brand.
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
                Psychology Behind Color Choices
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
              Colors play a crucial role in logo design, as they can evoke emotions and convey messages without words. The color red, for example, is often associated with passion, energy, and excitement, which is why many fast-food chains like McDonald’s and KFC use it in their logos to stimulate appetite and create a sense of urgency.
              </p>
              <p className="text-[1.2vw] font-medium mb-[3vw] para-anim">
              On the other hand, blue is often used by tech companies like IBM and Intel to convey trust, reliability, and professionalism. The right color palette can not only make a logo visually appealing but also evoke the desired emotional response from the audience.
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
              Using Symbols To Tell Your Brand’s Story
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
              Memorable brand symbols are a powerful tool in logo design, as they can transcend language and cultural barriers to convey a message universally. Take the Mercedes-Benz logo, for instance. The iconic three-pointed star enclosed in a circle represents the brand’s dominance over land, sea, and air, a powerful symbol of its engineering excellence and innovation.
              </p>
              <p className="text-[1.2vw] font-medium mb-[3vw] para-anim">
              Similarly, the McDonald’s golden arches are instantly recognizable worldwide, symbolizing not just a fast-food chain but a cultural icon. Symbols have the ability to create a strong visual association with a brand, making them an indispensable part of logo design
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
              The Psychological Power of Typography
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
              Selecting the Perfect Font for Your Brand Typography isn’t just about choosing a font; it’s about selecting the voice of your brand. Whether it’s a bold, modern sans-serif or an elegant serif, every curve and line speaks volumes about your brand’s personality. For example, a bold, modern sans-serif font can suggest a brand that is innovative and forward-thinking, while an elegant serif font can convey a sense of tradition and sophistication. The choice of typography should align with the brand’s values and positioning to create a cohesive brand identity.
              </p>
              <p className="text-[1.2vw] font-medium mb-[3vw]">
                
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
              Logos That Stand the Test of Time:
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
              One of the keys to timeless design is subtlety. Avoiding overly complex designs or trendy elements ensures that your logo won’t look outdated in a few years.
              </p>
              <p className="text-[1.2vw] font-medium mb-[3vw] para-anim">
              Chanel’s interlocking C’s logo, designed by founder Coco Chanel herself in 1925, is a masterpiece of timeless design. The memorable brand symbol, which represents Coco’s initials, is simple, elegant, and instantly recognizable. Despite being nearly a century old, the Chanel logo remains as chic and relevant today as it was when it was first created.
              </p>
              <div className="w-[100vw] ml-[-3vw] h-[1px] bg-black mb-[3vw]"></div>
            </div>
            <div className="col-start-2 col-span-2">
              <h2 className="text-[2.5vw] font-display mb-[2vw] heading-anim">
              Conclusion
              </h2>
              <p className="text-[1.2vw] font-medium mb-[2vw] para-anim">
              In conclusion, logo design is a delicate blend of art, psychology, and storytelling. It’s about creating a visual identity that not only represents a brand but also resonates with its audience on a deeper level. A memorable logo is not just a symbol; it’s a story waiting to be told, a promise waiting to be fulfilled. So, the next time you see a logo that captures your imagination, take a moment to appreciate the artistry and creativity behind it. Who knows, it might just inspire you to create something equally extraordinary.
              </p>
              <p className="text-[1.2vw] font-medium mb-[3vw]">
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
