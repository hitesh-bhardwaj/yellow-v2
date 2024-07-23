import { workcategoryPathBySlug } from '@/lib/workcategories';
import Link from 'next/link';

const WorkCategories = ({ workcategories, activeCategory, setActiveCategory }) => {
  const workcategoriesArray = Array.isArray(workcategories) ? workcategories : workcategories?.workcategories || [];
  const filteredCategories = workcategoriesArray.filter((workcategory) => workcategory.name !== 'All').slice(0, 6);

  return (
    <div className='flex gap-[1.5vw] flex-wrap w-full h-fit'>
      <Link key={"all"} href="/our-work" onClick={() => setActiveCategory('all')} className={`group overflow-hidden relative text-body border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.2] fadeup ${activeCategory === 'all' ? 'bg-body text-white hover:animate-none' : ''}`}>
        <span className='leading-[1.4] relative z-[1]'>Show All</span>
        <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
      </Link>
      {filteredCategories.map((category) => (
        <Link key={category.slug} href={workcategoryPathBySlug(category.slug)} onClick={() => setActiveCategory(category.slug)} className={`group overflow-hidden relative border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.2] fadeup text-body ${activeCategory === category.slug ? 'hover:animate-none bg-body text-white' : ''}`}>
          <span className='leading-[1.4] relative z-[1]'>{category.name}</span>
          <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
        </Link>
      ))}
    </div>
  );
};

export default WorkCategories;

