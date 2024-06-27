import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import Clients from "@/components/HomePage/Clients";
import Blogs from "@/components/HomePage/Blogs";

export default function Home() {
  return (
    <Layout className="">
      <Hero />
      <AboutUs />
      <Portfolio />
      <Services />
      <Clients />
      <Blogs />
    </Layout>
  );
}
