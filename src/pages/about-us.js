import Layout from '@/components/Layout';
import Join from '@/components/about/Join';
import Pagehero from '@/components/about/Pagehero';
import Work from '@/components/about/Work';
import Values from '@/components/about/Values';
import React from 'react';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import { getHomePageWorks } from '@/lib/works';
import Meet from '@/components/about/Meet';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/Metadata';
import { getAllTeams } from '@/lib/teams';

export default function About({ recentWorks, teams }) {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  const metadata = {
    title: "About Yellow Agency: Branding & Design Experts in UAE",
    description: "Discover more about Yellow Agency, a trusted branding and design expert based in Dubai. Learn about our expertise, services, and how we can help your brand succeed. Explore now!",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "about-us"
  }

  return (
    <>
      <MetaData metadata={metadata}/>
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Pagehero />
        <Values />
        <Meet teams={teams} />
        <Join />
        <Work works={recentWorks} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const recentWorks = await getHomePageWorks();
  const teams = await getAllTeams({
    queryIncludes: "archive"
  });

  return {
    props: {
      recentWorks,
      teams,
    },
    revalidate: 500,
  };
}
