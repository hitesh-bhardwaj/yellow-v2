/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Pagehero from '@/components/services/Pagehero'
import ServiceList from '@/components/services/ServiceList'
import { titleAnim , paraAnim , lineAnim, imageAnim, imgAnim , fadeUp} from '@/components/gsapAnimations';
import { getHomePageWorks } from '@/lib/works';
import RecentWorks from '@/components/services/RecentWorks';

export default function services({recentWorks}) {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  imgAnim();
  fadeUp();

  return (
    <>
      <Layout>
          <Pagehero/>
          <ServiceList/>
          <RecentWorks works={recentWorks} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getHomePageWorks();

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}


