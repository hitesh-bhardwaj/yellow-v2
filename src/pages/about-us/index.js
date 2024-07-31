import Layout from '@/components/Layout';
import Join from '@/components/about/Join';
import Pagehero from '@/components/about/Pagehero';
import Work from '@/components/about/Work';
import Values from '@/components/about/Values';
import React from 'react';
import { titleAnim, paraAnim, lineAnim, imageAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { getHomePageWorks } from '@/lib/works';
import Meet from '@/components/about/Meet';


export default function About({ recentWorks }) {

  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeIn();
  fadeUp();

  return (
    <Layout>
      <Pagehero />
      <Values />
      <Meet />
      <Join />
      <Work works={recentWorks} />
    </Layout>
  );
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
