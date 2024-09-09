/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import useSearch from '@/hooks/use-search';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import Line from '@/components/Line';
import Link from 'next/link';
import { postPathBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/datetime';
import Image from 'next/image';

export default function Search() {
  const { query, results, search } = useSearch();
  const title = 'Search';
  const slug = 'search';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    search({
      query: params.get('q'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const description = `Search results for '${query}'`;

  const ResultCard = ({post}) => {
    return (
      <>
        <div className='col-span-1 h-full fadeup'>
            <Link href={postPathBySlug(post.slug)} className="hover:shadow-2xl group h-full w-full block transition-all duration-500 border border-black/40 rounded-[10px] overflow-hidden">
                <div className='h-[16vw] w-full relative mobile:h-[60vw] tablet:h-[25vw] overflow-hidden'>
                    <Image src={post.featuredImage.mediaItemUrl} className="scale-[1.05] group-hover:scale-100 object-cover transition-all duration-300" alt={post.featuredImage.altText} fill sizes={post.featuredImage.sizes} />
                </div>
                <div className='w-full h-full px-[1.5vw] pt-[1.5vw] py-[3vw] flex flex-col gap-[2vw] mobile:gap-[3vw] mobile:py-[7vw] mobile:px-[5vw]'>
                    <h3 className='text-[1.5vw] font-display leading-[1.3] mobile:text-[6vw] tablet:text-[3vw]'>{post.title}</h3>
                    <p className='text-[1vw] font-medium mobile:text-[4vw] tablet:text-[2vw]'>{formatDate(post.date)}</p>
                    <div className={`cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5.5vw]`}>
                        <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Read Article</span>
                        <svg className="relative -rotate-[135deg] w-[1.4vw] h-[1.4vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                            <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
      </>
      
    )
  }

  return (
    <>
      <Layout>
        <Section className='py-0 bg-black' id="hero">
          <div className='container min-h-screen pt-[10%] bg-white pb-[5%]'>
            <div className='w-full h-full'>
              <h1 data-title-anim className='text-[5.7vw] w-fit font-display leading-[1.1] uppercase mobile:text-[12vw] tablet:text-[6.5vw]'>{title}</h1>
              <p data-para-anim className="text-[1.9vw] font-medium leading-[1.4] mobile:text-[4vw] mt-[3vw] mb-[4vw] w-full">{description}</p>
            </div>
            <Line />
            <div className="w-full h-[1px] bg-black lineDraw hidden mobile:block tablet:block"></div>
            {/* <div className='h-[600vw] w-full' /> */}
            <div className='w-full h-full grid grid-cols-3 gap-[2vw] mt-[5vw] mobile:grid-cols-1 mobile:gap-[7vw] mobile:mt-[12vw] tablet:grid-cols-2 tablet:mt-[7vw] tablet:gap-x-[3vw] tablet:gap-y-[4vw]'>
              {results.map((result, index) => (
                <ResultCard key={index} post={result} />
              ))}
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
