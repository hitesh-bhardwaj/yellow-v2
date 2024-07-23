import Link from 'next/link';

import { categoryPathBySlug } from '@/lib/categories';

const Categories = ({ categories, className="" }) => {

  return (
    <div className={`flex gap-[1vw] ${className}`}>
        {categories.map((category) => {
            return (
                  <Link key={category.id} href={categoryPathBySlug(category.slug)} className='group overflow-hidden relative border hover:animate-scale-up hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.2] fadeup'>
                      <span className='leading-[1.4] relative z-[1]'>{category.name}</span>
                      <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
                  </Link>
            );
        })}
    </div>
  );
};

export default Categories;
