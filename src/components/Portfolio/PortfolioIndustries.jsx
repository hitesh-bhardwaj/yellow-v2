import { portfolioIndustryPathBySlug } from '@/lib/portfolioIndustries';
import Link from 'next/link';

const PortfolioIndustries = ({ portfolioIndustries, activeIndustry, setActiveIndustry }) => {
  const portfolioIndustriesArray = Array.isArray(portfolioIndustries) ? portfolioIndustries : portfolioIndustries?.portfolioIndustries || [];
  const filteredIndustries = portfolioIndustriesArray.filter((portfolioIndustry) => portfolioIndustry.name !== 'All')

  return (
    <div className='flex gap-[1.5vw] flex-wrap w-full h-fit mobile:gap-[2vw] mobile:mb-[7vw] fadeup'>
      <Link key={"all"} href="/our-work" onClick={() => setActiveIndustry('all')} className={`group overflow-hidden relative text-body border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.3]  mobile:text-[3.5vw] mobile:py-[1.5vw] mobile:px-[3.5vw] tablet:text-[1.8vw] tablet:py-[0.7vw] ${activeIndustry === 'all' ? 'bg-body text-white hover:animate-none' : ''}`}>
        <span className='leading-[1.4] relative z-[1]'>All</span>
        <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
      </Link>
      {filteredIndustries.map((industry) => (
        <Link key={industry.slug} href={portfolioIndustryPathBySlug(industry.slug)} onClick={() => setActiveIndustry(industry.slug)} className={`group overflow-hidden relative border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.3] text-body mobile:text-[3.5vw] mobile:py-[1.5vw] mobile:px-[3.5vw] tablet:text-[1.8vw] tablet:py-[0.7vw] ${activeIndustry === industry.slug ? 'hover:animate-none bg-body text-white' : ''}`}>
          <span className='leading-[1.4] relative z-[1]'>{industry.name}</span>
          <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
        </Link>
      ))}
    </div>
  );
};

export default PortfolioIndustries;

