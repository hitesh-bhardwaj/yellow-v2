import { useState, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import WorkCategories from '@/components/Portfolio/WorkCategories';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import styles from "@/styles/blogDetail.module.css";
import { getAllWorkCategories, getWorkCategoryBySlug } from '@/lib/workcategories';
import { getWorkCategoryByIdForWorks } from '@/lib/works';
import WorkCard from '@/components/Portfolio/WorkCard';
import MetaData from '@/components/Metadata';

gsap.registerPlugin(ScrollTrigger);

const Category = ({ workcategory, works, workcategories }) => {
  const [activeCategory, setActiveCategory] = useState(`${workcategory.slug}`);

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

  const metadata = {
    title: `${workcategory.name} Portfolio Archive | Yellow`,
    description: `Dive into our case studies of our latest projects for ${workcategory.name} category.`,
    slug: `our-work/category/${workcategory.slug}`,
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <Layout>
        <main>
          <Section id="hero" >
            <div className="container">
              <div className='pt-[10%] mobile:pt-[30%] tablet:pt-[15%]'>
                <h1 className='text-[5.7vw] font-display leading-[1.2] mobile:text-[10vw]'>
                  {workcategory.name} Works
                </h1>
              </div>
              <div className="lineDraw w-full h-[1px] bg-body mt-[6%] mobile:mt-[10%] mobile:mb-[8%]" />
            </div>
          </Section>

          <Section id="second-section" className="bg-black">
            <div className="container py-[5%] bg-white">
              <div className='pb-[5%]'>
                <WorkCategories workcategories={workcategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              </div>

              <div className="grid grid-cols-2 w-full h-full gap-x-[3vw] gap-y-[3vw] mb-[3vw] mobile:flex mobile:flex-col mobile:gap-[7vw]">
                {works.length > 0 ? (
                  works.map((work, index) => {
                    const isFullWidth = index % 3 === 0;
                    const cardClass = isFullWidth ? 'col-span-2' : 'col-span-1';
                    return (
                      <div key={work.slug} className={`work-card h-full ${cardClass} ${styles.postCard}`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <WorkCard work={work} index={index} />
                      </div>
                    );
                  })
                ) : (
                  <p className="col-span-2 text-center text-[1.2vw] text-body mt-[5%]">There are no works for the selected category.</p>
                )}
              </div>

            </div>
          </Section>
        </main>
      </Layout>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const { slug: workcategorySlug } = params;
  const { workcategory } = await getWorkCategoryBySlug(workcategorySlug);

  if (!workcategory) {
    return {
      notFound: true,
    };
  }

  const { works } = await getWorkCategoryByIdForWorks({
    workcategoryId: workcategory.databaseId,
    queryIncludes: 'all',
  });

  const { workcategories } = await getAllWorkCategories();

  return {
    props: {
      workcategory,
      works,
      workcategories,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { workcategories } = await getAllWorkCategories();

  const paths = workcategories.map((workcategory) => ({
    params: {
      slug: workcategory.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
