import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { ImageObjectJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SearchProvider } from "@/hooks/use-search";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';


const outfit = localFont({
  src: [
    { path: './fonts/Outfit-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Outfit-Medium.woff', weight: '500', style: 'normal' }
  ],
  display: 'swap',
  variable: '--font-outfit'
});

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Medium.woff', weight: '500', style: 'normal' }
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
      <DefaultSeo
        title="Branding & Communication Agency in Dubai - Yellow Agency"
        description="Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!"
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=3.0',
          },
          {
            name: 'google-site-verification',
            content: 'YpkX5Bmr_5_6VKgKXJm-yxvKpnHKzd_tppgvKB7FBnk',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon-150x150.jpg',
            sizes: '32x32',
          },
          {
            rel: 'icon',
            href: '/favicon-300x300.jpg',
            sizes: '192x192',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon-300x300.jpg',
          },
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: 'Welcome To Yellow Feed',
            href: `https://welcometoyellow.com/feed.xml`
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Branding & Communication Agency in Dubai - Yellow Agency",
          description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
          url: "https://welcometoyellow.com",
          images: [
            {
              url: `https://welcometoyellow.com/assets/images/seo/home.png`,
              width: 1920,
              height: 1016,
              alt: "Yellow Brand Image",
              type: "image/png",
            },
          ],
          siteName: "Yellow",
        }}
        twitter={{
          site: 'Yellow',
          cardType: 'summary_large_image',
        }}
      />

      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />

      <SearchProvider>
        <ReactLenis root options={{ duration: 2 }}>
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
