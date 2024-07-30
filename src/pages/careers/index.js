import Essentials from '@/components/career/Essentials'
import Listing from '@/components/career/Listing'
import Pagehero from '@/components/career/Pagehero'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeIn , fadeUp } from '@/components/gsapAnimations';
import { getAllJobs } from '@/lib/jobs';

export default function Career({jobs}) {

  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeIn();
  fadeUp();

  return (
    <>
      <Layout>
          <Pagehero/>
          <Listing jobs={jobs} />
          <Essentials/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const jobs = await getAllJobs({
    queryIncludes: 'archive',
  });

  return {
      props: {
          jobs,
      },
      revalidate: 500,
  };
}