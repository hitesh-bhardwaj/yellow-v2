import Layout from '@/components/Layout'
import Pagehero from '@/components/services/Pagehero'
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import { getRelatedPortfolioForPages } from '@/lib/portfolio';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import RelatedWork from '@/components/Metadata/RelatedWork';
import ServiceList from '@/components/services/ServiceList';

export default function services({ recentWorks }) {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Yellow | Brand agency, design and digital services in Dubai, UAE",
    description: "As a brand agency in Dubai offering brand strategy, naming, brand design and advertising, we consider your brand across all communication channels.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do"
  }

// const services = [
//   { name: 'Brand Strategy', description: 'Research, positioning, architecture, and go-to-market planning.', url: '/what-we-do/brand-strategy' },
//   { name: 'Brand Identity', description: 'Logo systems, typography, color palettes, and brand guidelines.', url: '/what-we-do/brand-identity' },
//   { name: 'Naming', description: 'Memorable brand and product names with linguistic and cultural checks.', url: '/what-we-do/naming' },
//   { name: 'Communication', description: 'Campaign concepts, messaging, copywriting, and brand voice across channels.', url: '/what-we-do/communication' },
//   { name: 'Digital', description: 'Digital strategy, social content, performance creatives, and always-on campaigns.', url: '/what-we-do/digital' },
  
// ];


  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      {/* <LocalBusiness/> */}
      {/* <ServicesJsonLd services={services}/> */}
      <Layout>
        <Pagehero />
        <ServiceList/>
        <RelatedWork
          works={recentWorks}
          heading={"Our Work"}  
          subheading={"We grow amazing companies through exceptional branding and communications."}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const recentWorks = await getRelatedPortfolioForPages("what-we-do");

  return {
    props: {
      recentWorks,
    },
    revalidate: 500,
  };
}


