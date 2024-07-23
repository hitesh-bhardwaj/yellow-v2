/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getPaginatedWorks } from '@/lib/works';
import Layout from '@/components/Layout';
import PageHero from '@/components/Portfolio/PageHero';
import Section from '@/components/Section';
import WorkCategories from '@/components/Portfolio/WorkCategories';
import { getWorkCategories } from '@/lib/workcategories';
import WorkCard from '@/components/Portfolio/WorkCard';

import styles from "@/styles/blogDetail.module.css"

gsap.registerPlugin(ScrollTrigger);

export default function Works({ initialWorks, initialPagination, workcategories }) {
  const [works, setWorks] = useState(initialWorks);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const loadMoreWorks = async () => {
    if (pagination.currentPage < pagination.pagesCount && !isLoading) {
      setIsLoading(true);
      const nextPage = pagination.currentPage + 1;

      const res = await fetch(`/api/getWorks?page=${nextPage}`);
      const { works: newWorks, pagination: newPagination } = await res.json();

      setWorks((prevWorks) => [...prevWorks, ...newWorks]);
      setPagination(newPagination);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll('.imageanim');
    images.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
        },
        '--beforeHeight': '0%',
        duration: 1.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      });
    });
  }, [works]);

  return (
    <>
      <Layout>
        <PageHero />
        <Section id="second-section" className='bg-black'>
          <div className='container py-[5%] bg-white'>
            
            <div className='pb-[5%]'>
              <WorkCategories workcategories={workcategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>

            <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw] mb-[3vw]">
              {works.map((work, index) => {
                const isFullWidth = index % 3 === 0;
                const cardClass = isFullWidth ? 'col-span-2' : 'col-span-1';
                return (
                  <div key={work.slug} className={`work-card h-full ${cardClass} ${styles.postCard}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <WorkCard work={work} index={index} />
                  </div>
                );
              })}
            </div>

            {pagination && pagination.currentPage < pagination.pagesCount && (
              <div className="flex w-full justify-center">
                <button onClick={loadMoreWorks} disabled={isLoading} className={`cursor-pointer flex w-fit relative text-[1.3vw] gap-[0.5vw] items-center font-medium group mobile:text-[6vw] mobile:gap-[2vw] `}>
                  <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">{isLoading ? 'Loading' : 'Load More'}</span>
                  <svg className="relative -rotate-[135deg] w-[1.2vw] h-[1.2vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                    <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params || {};

  // Fetch paginated posts
  let { works, pagination } = await getPaginatedWorks({
    queryIncludes: 'archive',
  });

  // Fetch categories
  const workcategories = await getWorkCategories();

  // If a category slug is provided, filter posts by category
  if (slug) {
    const { works: filteredWorks, pagination: filteredPagination } = await getPaginatedWorks({
      queryIncludes: 'archive',
      categoryId: slug, // Pass the category ID or slug to filter posts
    });

    works = filteredWorks;
    pagination = {
      ...filteredPagination,
      basePath: `/our-work/category/${slug}/page`,
    };
  }

  return {
    props: {
      initialWorks: works,
      workcategories,
      initialPagination: {
        ...pagination,
        basePath: slug ? `/our-work/category/${slug}/page` : '/our-work',
      },
    },
    revalidate: 500,
  };
}
