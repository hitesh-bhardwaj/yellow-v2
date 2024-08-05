// import Image from 'next/image';
import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import {
  paraAnim,
  imageAnim,
  fadeUp,
} from "@/components/gsapAnimations";
import Section from "@/components/Section";

const memberDetails = [
  {
    id: 1,
    name: "Wael Bittar",
    slug: "wael-bittar",
    role: "Communication Director",
    image: "/assets/images/about/Wael-Bittar.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 2,
    name: "Mamta Varekar",
    slug: "mamta-varekar",
    role: "General Manager",
    image: "/assets/images/about/Mamta-Varekar.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 3,
    name: "Stuart Harris",
    slug: "stuart-harris",
    role: "Creative Director",
    image: "/assets/images/about/stuart-harris.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 4,
    name: "Sarah Azmi",
    slug: "sarah-azmi",
    role: "Co-Founder & Head of Strategy",
    image: "/assets/images/about/Sarah-Azmi.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 5,
    name: "Aishwarya Carriappa",
    slug: "aishwarya-carriappa",
    role: "Designer",
    image: "/assets/images/about/Aishwarya-Carriappa.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 6,
    name: "Danielle Haddad",
    role: "Senior Account Manager",
    slug: "danielle-haddad",
    image: "/assets/images/about/Danielle-Haddad.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 7,
    name: "Gunjan Mathur",
    role: "Designer",
    slug: "gunjan-mathur",
    image: "/assets/images/about/Gunjan-Mathur.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 8,
    name: "Youmna Kanaan",
    role: "Designer",
    slug: "youmna-kanaan",
    image: "/assets/images/about/Youmna-Kanaan.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 9,
    name: "Maritony Flores",
    role: "Admin",
    slug: "maritony-flores",
    image: "/assets/images/about/Maritony-Flores.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
  {
    id: 10,
    name: "Sweatha Monichen",
    role: "Account Manager",
    slug: "swetha",
    image: "/assets/images/about/Sweatha.webp",
    content1:
      "Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
    content2:
      "She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
    content3:
      "And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
    content4:
      "Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
    email: "Mamta@welcometoyellow.com",
    LN: "Linkedin",
    detailImage: "/assets/images/about/detail-mamta.png",
  },
];

function Teamdetail() {
  paraAnim();
  imageAnim();
  fadeUp();

  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const member = memberDetails.find((member) => member.slug === slug);

  return (
    <Layout>
      <Section id="teamdetail" className="w-full h-full bg-black">
        <div className="container py-[8%] mobile:pt-[25%] mobile:pb-[15%] tablet:py-[15%] bg-white">
          <div className="flex gap-[4vw] h-full w-full mb-[3vw] mobile:flex-col mobile:gap-[5vw]">
            <div className="w-[35vw] h-[45vw] relative mobile:w-[85vw] mobile:h-[120vw] imageanim tablet:w-[45vw] tablet:h-[60vw]">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full "
              />
            </div>
            <div className="flex flex-col justify-between h-[70vh] mobile:h-full mobile:ml-[1%] tablet:h-[40vh] tablet:w-[40vw]">
              <div className="">
                <h1
                  data-para-anim
                  className="text-[5vw] font-display leading-[1.2] uppercase mobile:text-[12vw] tablet:text-[6.5vw]"
                >
                  {member.name}
                </h1>
                <p
                  data-para-anim
                  className="text-[1.8vw] font-medium ml-[1%] mobile:text-[5vw] tablet:text-[3vw]"
                >
                  {member.role}
                </p>
              </div>
              <div className="font-medium flex flex-col text-[1.3vw] ml-[1%] mobile:text-[4.5vw] mobile:mt-[10vw] tablet:text-[2.2vw]">
                <p
                  data-para-anim
                  className="opacity-40 font-medium mb-[0.5vw] mobile"
                >
                  Email:
                </p>
                <a
                  data-para-anim
                  href={`mailto:${member.email}`}
                  className="mb-[2vw] font-medium text-[1.6vw] group"
                >
                   <span className="link-line group-hover:text-gray-700">
                                            {member.email}
                                        </span>
                </a>
                <p data-para-anim className="opacity-40 font-medium mb-[0.5vw]">
                  Social Media:
                </p>
                <a data-para-anim href={member.LN} className="font-medium text-[1.6vw] group">
                  <span className="link-line group-hover:text-gray-700">
                  {member.LN}

                  </span>
                 
                </a>
              </div>
            </div>
          </div>

          <div className="text-[1.7vw] flex flex-col gap-[2vw] font-medium my-[5vw] mobile:text-[4.5vw] mobile:gap-[5vw] mobile:my-[10vw] tablet:text-[2.5vw] tablet:my-[7vw]">
            <p data-para-anim>{member.content1}</p>
            <p data-para-anim>{member.content2}</p>
            <p data-para-anim>{member.content3}</p>
            <p data-para-anim>{member.content4}</p>
          </div>
          <div className="w-[90vw] h-[40vw] relative mobile:w-[85vw] mobile:h-[50vw] fadeup tablet:w-[85vw] rounded-[15px] overflow-hidden">
            <img
              src={member.detailImage}
              alt={member.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default Teamdetail;
