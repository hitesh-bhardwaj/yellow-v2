/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Pagehero from '@/components/services-detail/Pagehero'
import About from '@/components/services-detail/About'
import Detail from '@/components/services-detail/Detail'
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import Work from '@/components/services-detail/Work';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';

export default function servicesdetail({recentWorks}) {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Integrated Marketing & Advertising Services in Dubai - Yellow Agency",
    description: "Create lasting relationships with your audience through compelling communication. Learn about advertising & marketing services that empower your brand here.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/communication"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <About />
        <Detail />
        <Work works={recentWorks}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getRelatedPortfolioForPages("brand-strategy");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}


