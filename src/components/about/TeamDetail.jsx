import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';



const memberDetails = [
    { id:1,
      name: "Wael Bittar",
      role: "Communication Director",
      image: "/assets/images/about/Wael-Bittar.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"

    },
    { id:2,
      name: "Mamta Varekar",
      role: "General Manager",
      image: "/assets/images/about/Mamta-Varekar.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",

      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:3,
      name: "Stuart Harris",
      role: "Creative Director",
      image: "/assets/images/about/stuart-harris.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:4,
      name: "Sarah Azmi",
      role: "Co-Founder & Head of Strategy",
      image: "/assets/images/about/Sarah-Azmi.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:5,
      name: "Aishwarya Carriappa",
      role: "Designer",
      image: "/assets/images/about/Aishwarya-Carriappa.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:6,
      name: "Danielle Haddad",
      role: "Senior Account Manager",
      image: "/assets/images/about/Danielle-Haddad.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:7,
      name: "Gunjan Mathur",
      role: "Designer",
      image: "/assets/images/about/Gunjan-Mathur.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
     detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:8,
      name: "Youmna Kanaan",
      role: "Designer",
      image: "/assets/images/about/Youmna-Kanaan.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:9,
      name: "Maritony Flores",
      role: "Admin",
      image: "/assets/images/about/Maritony-Flores.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
    { id:10,
      name: "Sweatha Monichen",
      role: "Account Manager",
      image: "/assets/images/about/Sweatha.webp",
      content1:"Mamta is the loudest person we know. Her version of a whisper is still a decibel or two above normal conversation levels.",
      content2:"She is also the most lovable person we know. She may actually be our favourite persons to laugh at and with, as she’s always just a little bit too dramatic, a little extra, and her reactions are always a bit over the top (this makes pulling pranks on her a favourite side hustle of ours). All this energy lends itself wonderfully to work - it’s with the same passion and determination that she dives completely wholeheartedly into whatever she takes on and gets it done.",
      content3:"And she keeps taking on new things...Harvard courses, moderating panels, hosting conferences and TV pilots, starting her own podcast, drawing & illustrating, consulting on multiple projects and still somehow remaining completely focused on heading up Yellow.",
      content4:"Often found : In a meeting. Or splayed on her couch watching gilmore girls.",
      email:"Mamta@welcometoyellow.com",
      LN:"Linkedin",
      detailImage:"/assets/images/about/detail-mamta.png"
    },
  ];

export default function TeamDetail({ index, handleClose  , detailOpen}) {
  const member = memberDetails[index-1];
  
  useEffect(()=>{
    if(detailOpen){
      gsap.to(".detail-overlay",{
        opacity:0.2,
      
        ease:"power2.in"
      })

    }
    else{
      gsap.to(".detail-overlay",{
        opacity:0,
        delay:-0.2,
        ease:"power2.in"
      })

    }
    
  },[detailOpen])


  return (
    <>
      <section data-lenis-prevent id='team-detail' className={`w-full bg-transparent fixed h-full  top-0 right-0 overflow-y-auto overflow-x-hidden overflow-scroll detail-section z-[204] flex justify-end pointer-events-none `}>
        <div className='bg-[#000000] w-full h-full detail-overlay opacity-0'></div>
        <div  className={` w-[70%] px-[5vw] absolute right-0 flex flex-col gap-[2vw] bg-white h-full overflow-y-auto overflow-scroll z-[205] pointer-events-auto mobile:w-full mobile:gap-[5vw] tablet:w-[80%] tablet:gap-[3vw] ${detailOpen ? "transition-all ease-in-out duration-700" : "translate-x-[100%] transition-all ease-in-out duration-700"}`}>
          <div className='w-full flex justify-between pt-[5%] mobile:pt-[10%]'>
            <div className='w-[3vw] h-[3vw] cursor-pointer relative mobile:w-[10vw] mobile:h-[10vw] tablet:w-[7vw] tablet:h-[7vw]' onClick={handleClose} ><Image src="/assets/icons/cross.svg" alt='cross' fill/></div>
            <span className='text-[1.5vw] mobile:text-[3.5vw] tablet:text-[2.5vw]'>{index}/{memberDetails.length}</span>
          </div>
          <div className='w-full h-[1px] py-[0.01vw] bg-black lineDraw mobile:my-[4vw] mobile:py-[0.1vw] tablet:my-[2vw]'></div>
          <div className='w-full flex gap-[2vw] mobile:flex-col mobile:gap-[5vw]'>
            <div className='w-[25vw] h-[30vw] relative mobile:w-[90vw] mobile:h-[120vw] tablet:w-[40vw] tablet:h-[50vw]'>
              <Image src={member.image} alt={member.name} className="object-cover" fill/>
            </div>
            <div className='tablet:w-[30%] '>
              <h2 className='text-[4vw] font-display leading-[1.1] mobile:text-[10vw] mobile:mb-[2vw] tablet:text-[6.5vw]'>{member.name}</h2>
              <p className='text-[1.2vw] font-medium mobile:text-[4.5vw] tablet:text-[2.5vw]'>{member.role}</p>
            </div>
          </div>
          <div className='flex flex-col gap-[1.5vw] text-[1.5vw] font-medium mobile:text-[4.5vw] mobile:gap-[3vw] tablet:text-[3vw] tablet:gap-[2vw]'>
            <p>{member.content1}</p>
            <p>{member.content2}</p>
            <p>{member.content3}</p>
            <div className='flex flex-col gap-[0.2vw] mobile:gap-[2vw] mobile:my-[4vw]'>
            <p className='opacity-40 text-[1.2vw]'>Email</p>
            <Link href={`mailto:${member.email}`} className='mb-[1vw] group'>
            <span className='link-line group-hover:text-gray-700'>
            {member.email}
              </span></Link>
            <p className='opacity-40 text-[1.2vw]'>Social Media</p>
            <Link href={"#"} className='group'>
            <span className='link-line group-hover:text-gray-700'>
            {member.LN}
              </span></Link>
             </div> 
            
            <p>{member.content4}</p>
            <div className='w-[62vw] h-[30vw] relative my-[5%] mobile:w-[90vw] mobile:h-[55vw] mobile:mb-[10%] tablet:mb-[10%] tablet:w-[70vw] tablet:h-[40vw]'>
              <Image src={member.detailImage} fill alt='image'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
