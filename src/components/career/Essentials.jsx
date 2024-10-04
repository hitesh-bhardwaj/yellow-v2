import React, { useState } from "react";
// import LinkButton from "../Button/LinkButton";
 // Import the modal component
// import CareerForm from "../career-detail/CareerForm";
import FormModal from "./FormModal";

const essentialsData = [
  {
    id: 1,
    title: "Easily amused",
    content:
      "Amongst all the deadlines and drama, how will it ever be fun if someone isn't bursting into song or being given gold stars or telling stories that sound wildly made up or sharing how they're a strong, independent woman at all of 23? As the cliche goes, we're incredibly serious about the work but a lot less so about ourselves.",
  },
  {
    id: 2,
    title: "Full of curiosity, wonder and passion",
    content:
      '"Every child is an artist. The problem is how to remain an artist once we grow up" Picasso <br/> We look for those who have managed to hold on to their inner child and the artist within. The ones who want to keep learning, not just about their craft, but about the world around them, about people, trends, fashion, cuisines. They&apos;re discoverers, curators and storytellers. And they bring all of this into the work they do, every day, sprinkling each project with their own magic.',
  },
  {
    id: 3,
    title: "Ready to dive in",
    content:
      "The best ones of us can't stop coming up with new ideas and then executing them flawlessly, are unafraid of jumping in, scraping their knees and getting it occasionally wrong, but always giving it their all. We're still small and growing, so we love that each member of our team is always willing to help out and take ownership.",
  },
  {
    id: 4,
    title: "Always open-minded",
    content:
      "We pride ourselves on being a safe space for different types of people - the geeks, the introverts, the main characters, the workaholics, the fitness enthusiasts, the future influencers and the future housewives of beverly hills (okay, maybe not). We're a very eclectic mix that accepts, encourages and celebrates each others' quirks, because that diversity of personalities and thoughts makes what we do all the more creative.",
  },
];

export default function Essentials({jobs}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  console.log(isModalOpen)
  const handleClose = () => {
   setIsModalOpen(false);
  };
  return (
    <section className="bg-black relative overflow-hidden" id="essentials">
      <div className="container py-[8%] mobile:py-[15%] bg-white">
        <div className="w-[50%] flex flex-col gap-[2vw] mb-[8vw] mobile:w-full mobile:gap-[5vw] tablet:w-[70%] mobile:mb-[20vw]">
          <h4
            data-para-anim
            className="text-[2vw] font-display mobile:text-[7vw] tablet:text-[3vw]"
          >
            Don’t see any job opening that might fit you?
          </h4>
          <p
            data-para-anim
            className="w-[90%] text-[1.4vw] font-medium leading-[1.3] mb-[2vw] mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw]"
          >
            We are always looking for exceptional talent. Send us your work or a
            note on why you think you would be a good fit for the company.
          </p>
          <div className="fadeup mobile:mt-[4vw]">
            <button 
              onClick={() => setIsModalOpen(true)} // Open modal on click
              className="cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium group mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5.5vw]"
            >
              <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Send Your CV</span>
            <svg className="relative -rotate-[135deg] w-[1.4vw] h-[1.4vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
                <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor"/>
            </svg>
             
            </button>
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-[2vw] mb-[5vw] mobile:w-full tablet:w-[70%]">
          <h2
            data-title-anim
            className="text-[5vw] font-display mobile:text-[10vw] tablet:text-[6vw]"
          >
            Essentials
          </h2>
          <p
            data-para-anim
            className="w-[80%] font-medium text-[1.4vw] mobile:w-full mobile:text-[4.5vw] mobile:font-normal tablet:text-[2.2vw]"
          >
            Our team is made up of some incredibly talented people who also
            happen to have a few traits in common. Things that make them all
            Yellow (this is the only time we are referencing *that song*, we
            promise!).
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-[2vw] gap-x-[15vw] mobile:flex mobile:flex-col mobile:gap-y-[5vw] tablet:gap-x-[5vw]">
          {essentialsData.map((item, index) => (
            <div
              key={item.id}
              className={`col-span-1 flex justify-center mobile:justify-start mobile:w-full`}
            >
              <div className="w-full">
                <span
                  data-title-anim
                  className="text-[7vw] font-normal font-display mb-[1.5vw] mobile:text-[17vw] mobile:font-normal tablet:text-[8vw]"
                >{`0${item.id}.`}</span>
                <h4
                  data-para-anim
                  className="text-[2vw] font-display mb-[1.5vw] mobile:text-[7vw] tablet:text-[3vw]"
                >
                  {item.title}
                </h4>
                <p
                  data-para-anim
                  className="text-[1.2vw] leading-[1.3] font-medium mobile:text-[4.5vw] mobile:font-normal tablet:text-[2vw]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div
                  className={`w-full bg-black h-[1px] mt-[12vw] lineDraw hidden mobile:block ${
                    index === essentialsData.length - 1 ? "mobile:hidden" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-lenis-prevent  className={`w-full fixed h-full top-0 right-0 overflow-y-auto overflow-x-hidden overflow-scroll detail-section z-[204] flex justify-end pointer-events-none`}>
          <div className={` w-full h-full detail-overlay opacity-0 ${isModalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none'}`}></div>
            <div className={` w-[70%] px-[5vw] absolute right-0 flex flex-col gap-[2vw] h-full overflow-y-auto overflow-scroll z-[205] pointer-events-auto mobile:w-full mobile:gap-[5vw] tablet:w-[80%] tablet:gap-[3vw] transition-all ease-in-out duration-700 ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}>
      <FormModal handleClose={handleClose} jobs={jobs} /> 
             
            </div>
        </div>
    </section>
  );
}
