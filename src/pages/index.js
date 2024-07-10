import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import Clients from "@/components/HomePage/Clients";
import Blogs from "@/components/HomePage/Blogs";
import { getHomePagePosts } from "@/lib/posts";
import { getHomePageWorks } from "@/lib/works";
import { titleAnim , paraAnim , lineAnim, imageAnim , imgAnim , fadeIn} from '@/components/gsapAnimations';

export default function Home({recentPosts, recentWorks}) {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  imgAnim();
  fadeIn();

  return (
    <Layout className="">
      <Hero />
      <AboutUs />
      <Portfolio works={recentWorks} />
      <Services />
      <Clients />
      <Blogs posts={recentPosts} />
    </Layout>
  );
}

export async function getStaticProps() {

  const recentPosts = await getHomePagePosts();
  const recentWorks = await getHomePageWorks();

  return {
    props: {
      recentPosts,
      recentWorks,
    },
    revalidate: 500,
  };
}