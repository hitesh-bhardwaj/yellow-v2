// pages/branding-agency-saudi-arabia.tsx (or .js)
/* eslint-disable no-unused-vars */
import Layout from "@/components/Layout";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from "@/components/gsapAnimations";
import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/Metadata";
import dynamic from "next/dynamic";
import Hero from "@/components/saudi/Hero";
import Trusted from "@/components/saudi/Trusted";
import Services from "@/components/saudi/Services";
import Details from "@/components/saudi/Details";
import AdvertisingSolutions from "@/components/saudi/AdvertisingSolutions";
import Clients from "@/components/saudi/Clients";
import WhyUs from "@/components/saudi/WhyUs";
const RelatedWork = dynamic(() =>
  import("@/components/Metadata/RelatedWork")
);


// const Trusted = dynamic(() => import("@/components/saudi/Trusted"));
// const Services = dynamic(() => import("@/components/saudi/Services"));
// const Details = dynamic(() => import("@/components/saudi/Details"));
// const AdvertisingSolutions = dynamic(() => import("@/components/saudi/AdvertisingSolutions"));
// const Clients = dynamic(() => import("@/components/saudi/Clients"));
// const WhyUs = dynamic(() => import("@/components/saudi/WhyUs"));
// const RelatedWork = dynamic(() => import("@/components/Metadata/RelatedWork"));
import { getRelatedPortfolioForPages } from "@/lib/portfolio";
import { skipInCI } from "@/lib/util";

export default function SaudiLanding({ recentWorks = [] }) {

    titleAnim();
    paraAnim();
    lineAnim();
    fadeIn();
    fadeUp();

  const metadata = {
    title: "Yellow - Advertising & Branding Agency Riyadh, Saudi Arabia",
    description:
      "Yellow is a leading creative branding agency in Riyadh, Saudi Arabia, specializing in brand strategy, identity, and advertising services to elevate your brand.",
    img: "home.png",
    slug: "branding-agency-saudi-arabia",
    date_published: "2025-05-27T06:17",
    date_modified: "2025-05-27T06:17",
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <LocalBusiness />
      <Layout>
        <Hero />
        <Trusted />
        <Services />
        <Details />
        <AdvertisingSolutions />
        <Clients />
        <WhyUs />
        <RelatedWork
          works={recentWorks}
          heading="Our Works"
          subheading=""
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // ⛳ Skip remote calls on CI/build machines so the build never hits WP
  if (skipInCI()) {
    return {
      props: { recentWorks: [] },
      revalidate: 60, // ISR will repopulate after deploy
    };
  }

  try {
    const recentWorks = await getRelatedPortfolioForPages("brand-strategy").catch(() => []);
    return {
      props: { recentWorks: Array.isArray(recentWorks) ? recentWorks : [] },
      revalidate: 300,
    };
  } catch {
    return {
      props: { recentWorks: [] },
      revalidate: 60,
    };
  }
}
