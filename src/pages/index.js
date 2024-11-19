/* eslint-disable no-unused-vars */
import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import { getHomePagePosts } from "@/lib/posts";
import { fadeIn, fadeUp, lineAnim, paraAnim, titleAnim } from '@/components/gsapAnimations';
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/Metadata";
import dynamic from 'next/dynamic';
import AboutUs from "@/components/HomePage/AboutUs";

// Dynamically import Blogs component
const Blogs = dynamic(() => import('@/components/HomePage/Blogs'));
const Portfolio = dynamic(()=> import('@/components/HomePage/Portfolio'));
const Clients = dynamic(()=>import ('@/components/HomePage/Clients'), { ssr: false });
const Services = dynamic(()=>import ('@/components/HomePage/Services'), { ssr: false });



export default function Home({ recentPosts }) {

  const metadata = {
    title: "Branding & Communication Agency in Dubai - Yellow Agency",
    description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
    img: "home.png",
    slug: "",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
  }

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();
  
  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero />
        <AboutUs />
        <Portfolio />
        <Services />
        <Clients />
        <Blogs posts={recentPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {

  const recentPosts = await getHomePagePosts();

  return {
    props: {
      recentPosts,
    },
    revalidate: 500,
  };
}
