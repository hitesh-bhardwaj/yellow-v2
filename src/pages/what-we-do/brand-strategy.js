/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Pagehero from '@/components/services-detail/Pagehero'
import About from '@/components/services-detail/About'
import Detail from '@/components/services-detail/Detail'
import { titleAnim, paraAnim, lineAnim, fadeUp } from '@/components/gsapAnimations';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

export default function servicesdetail() {
  titleAnim();
  paraAnim();
  lineAnim();
  fadeUp();

  const metadata = {
    title: "Yellow | Brand agency, design and digital services in Dubai, UAE",
    description: "As a brand agency in Dubai offering Brand Strategy. we consider your brand across all communication channels.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "what-we-do/brand-strategy"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <About />
        <Detail />
      </Layout>
    </>
  )
}


