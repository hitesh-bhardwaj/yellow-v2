import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import Clients from "@/components/HomePage/Clients";
import Blogs from "@/components/HomePage/Blogs";
import { getHomePagePosts } from "@/lib/posts";

export default function Home({recentPosts}) {
  return (
    <Layout className="">
      <Hero />
      <AboutUs />
      <Portfolio />
      <Services />
      <Clients />
      <Blogs posts={recentPosts} />
    </Layout>
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