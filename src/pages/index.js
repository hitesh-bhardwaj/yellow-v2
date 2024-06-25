import Layout from "@/components/Layout";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio";

export default function Home() {
  return (
    <Layout className="">
      <Hero />
      <AboutUs />
      <Portfolio />
      <div className="h-screen w-full bg-black"></div>
    </Layout>
  );
}
