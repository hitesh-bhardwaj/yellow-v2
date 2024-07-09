import React from "react";

const teamMembers = [
  {
    name: "Wael Bittar",
    role: "Communication Director",
    image: "/assets/images/about/1.png",
    imagebw: "/assets/images/about/1bw.png",
  },
  {
    name: "mamta varekar",
    role: "General Manager",
    image: "/assets/images/about/2.png",
    imagebw: "/assets/images/about/2bw.png",
  },
  {
    name: "Stuart Harris",
    role: "Creative Director",
    image: "/assets/images/about/3.png",
    imagebw: "/assets/images/about/3bw.png",
  },
  {
    name: "Sarah Azmi",
    role: "Co-Founder & Head of Strategy",
    image: "/assets/images/about/4.png",
    imagebw: "/assets/images/about/4bw.png",
  },
  {
    name: "Aishwarya Carriappa",
    role: "Designer",
    image: "/assets/images/about/5.png",
    imagebw: "/assets/images/about/5bw.png",
  },
  {
    name: "Danielle Haddad",
    role: "Senior Account Manager",
    image: "/assets/images/about/6.png",
    imagebw: "/assets/images/about/6bw.png",
  },
  {
    name: "Gunjan Mathur",
    role: "Designer",
    image: "/assets/images/about/7.png",
    imagebw: "/assets/images/about/7bw.png",
  },
  {
    name: "Youmna Kanaan",
    role: "Designer",
    image: "/assets/images/about/8.png",
    imagebw: "/assets/images/about/8bw.png",
  },
  {
    name: "Maritony Flores",
    role: "Admin",
    image: "/assets/images/about/9.png",
    imagebw: "/assets/images/about/9bw.png",
  },
  {
    name: "sweatha",
    role: "Account manager",
    image: "/assets/images/about/10.png",
    imagebw: "/assets/images/about/10bw.png",
  },
  
  
];

export default function Meet() {
  return (
    <>
      <section className="w-full h-full py-[5%]" id="meet">
        <div className="container">
        <h2 className="text-[5.7vw] font-display uppercase mb-[3vw] heading-anim">
          Meet the people
        </h2>
        <p className="text-[2vw] w-[30%] font-medium leading-[1.2] para-anim">
          We grow amazing companies through exceptional branding and
          communications.
        </p>
        <div className="flex flex-wrap mt-[10vw] justify-between gap-y-[3vw]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`w-[32%] h-[36vw] group cursor-pointer relative overflow-hidden`}
            >
              <img
                src={member.image}
                alt={`meet-${index + 1}`}
                className="object-cover h-full w-full group-hover:opacity-0 transition-all ease"
              />
              <img
                src={member.imagebw}
                alt={`meet-bw-${index + 1}`}
                className="absolute object-cover h-full w-full group-hover:opacity-100 opacity-0 transition-all ease top-0 left-0"
              />
              <div className="absolute w-full px-[2vw] py-[1.5vw] z-[2] bottom-0 backdrop-blur-lg bg-black bg-opacity-40">
                <div className="text-white flex w-full justify-between h-full">
                  <div className="flex flex-col">
                    <h4 className="text-[1.8vw] font-display leading-[1.2] uppercase heading-anim">
                      {member.name}
                    </h4>
                    <p className="para-anim">{member.role}</p>
                  </div>
                  <div className="">
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
              </div>
              
            </div>
          ))}
        </div>

        </div>
        
      </section>
    </>
  );
}
