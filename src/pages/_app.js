import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react'
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
  <>

      <DefaultSeo
        title='Branding & Communication Agency in Dubai - Yellow Agency'
        description='Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!'
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon-150x150.jpg',
            sizes: '32x32'
          },
          {
            rel: 'icon',
            href: '/favicon-300x300.jpg',
            sizes: '192x192'
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon-300x300.jpg',
          },
          {
            rel: 'preload',
            href: '/assets/fonts/Outfit-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous'
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Branding & Communication Agency in Dubai - Yellow Agency",
          description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
          url: "https://welcometoyellow.com/",
          images: [
            {
              url: "https://yellow-v2.vercel.app/assets/images/seo/home.png",
              width: 1920,
              height: 1016,
              alt: "Yellow Brand Image",
              type: "image/png",
            },
          ],
          siteName: "Welcome To Yellow",
        }}
        twitter={{
          site: 'Welcome To Yellow',
          cardType: 'summary_large_image',
        }}
      />

    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>
  </>
  )
};
