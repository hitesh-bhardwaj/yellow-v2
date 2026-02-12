import dynamic from "next/dynamic";

const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then(m => m.SpeedInsights),
  { ssr: false }
);

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then(m => m.Analytics),
  { ssr: false }
);

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then(m => m.GoogleTagManager),
  { ssr: false }
);

const GoogleAnalytics = dynamic(
  () => import("@next/third-parties/google").then(m => m.GoogleAnalytics),
  { ssr: false }
);



import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";

import localFont from 'next/font/local';
import nextSeoConfig from "../../next-seo.config";
import { SearchProvider } from "@/hooks/use-search";
import 'lenis/dist/lenis.css';
import { LocalBusiness } from "@/lib/json-ld";

const outfit = localFont({
  src: [
    {
      path: './fonts/Outfit-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Outfit-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-outfit'
});

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-satoshi'
});

export default function App({ Component, pageProps = {}, }) {

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo {...nextSeoConfig}/>
      <LocalBusiness/>
      <SearchProvider>
        <ReactLenis root options={{ lerp: 0.05 }}>
          <main className={`${outfit.variable} ${satoshi.variable}`}>
            <Component {...pageProps} />
          </main>
        </ReactLenis>
      </SearchProvider>

      <SpeedInsights />
      <Analytics />

      <GoogleTagManager gtmId="GTM-W99KBPB" />
      <GoogleAnalytics gaId="G-CSXSBEQKTY" />
    </>
  );
}