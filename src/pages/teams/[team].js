/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "@/components/Layout";
import {
  paraAnim,
  imageAnim,
  fadeUp,
} from "@/components/gsapAnimations";
import Section from "@/components/Section";
import { getAllTeams, getTeamBySlug } from "@/lib/teams";
import config from '../../../package.json';
import { NextSeo } from "next-seo";
import { WebpageJsonLd } from "@/lib/json-ld";

function Teamdetail({ team }) {
  const {
    featuredImage,
    title,
    teams,
    content,
    seo,
    slug,
    date,
    modified,
  } = team;

  const { homepage = '' } = config;

  const metadata = {
    title: seo.title,
    description: seo.metaDesc,
    slug: `teams/${slug}`,
    date_published: date,
    date_modified: modified,
  }

  paraAnim();
  imageAnim();
  fadeUp();

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDesc}
        openGraph={{
          url: `${homepage}/teams/${slug}`,
          title: `${seo.title}`,
          "description": `${seo.metaDesc}`,
          images: [
            {
              url: seo.opengraphImage.sourceUrl,
              width: seo.opengraphImage.mediaDetails.width,
              height: seo.opengraphImage.mediaDetails.height,
              alt: "Page Og Image",
              type: "image/webp",
            },
          ],
          siteName: "Yellow",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `${homepage}/teams/${slug}`,
          },
          {
            rel: "alternate",
            href: `${homepage}/teams/${slug}`,
            hreflang: "x-default",
          }
        ]}
      />
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <Section id="teamdetail" className="w-full h-full bg-black">
          <div className="container py-[8%] mobile:pt-[25%] mobile:pb-[15%] tablet:py-[15%] bg-white">
            <div className="flex gap-[4vw] h-full w-full mb-[3vw] mobile:flex-col mobile:gap-[5vw]">
              <div className="w-[35vw] h-[45vw] relative mobile:w-[85vw] mobile:h-[120vw] imageanim tablet:w-[45vw] tablet:h-[60vw]">
                <img
                  src={featuredImage.node.sourceUrl}
                  alt={`${title} Image`}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex flex-col justify-between h-[70vh] mobile:h-full mobile:ml-[1%] tablet:h-[40vh] tablet:w-[40vw]">
                <div className="">
                  <h1
                    data-para-anim
                    className="text-[5vw] font-display leading-[1.3] uppercase mobile:text-[12vw] tablet:text-[6.5vw]"
                  >
                    {title}
                  </h1>
                  <p
                    data-para-anim
                    className="text-[1.8vw] font-medium ml-[1%] mobile:text-[5vw] tablet:text-[3vw]"
                  >
                    {teams.designation}
                  </p>
                </div>
                <div className="font-medium flex flex-col text-[1.3vw] ml-[1%] mobile:text-[4.5vw] mobile:mt-[10vw] tablet:text-[2.2vw]">
                  <p
                    data-para-anim
                    className="opacity-40 font-medium mb-[0.5vw] mobile"
                  >
                    Email:
                  </p>
                  <a
                    data-para-anim
                    href={`mailto:${teams.email}`}
                    className="mb-[2vw] font-medium text-[1.6vw] group"
                  >
                    <span className="link-line group-hover:text-gray-700">
                      {teams.email}
                    </span>
                  </a>
                  <p data-para-anim className="opacity-40 font-medium mb-[0.5vw]">
                    Social Media:
                  </p>
                  <a target="_blank" data-para-anim href={teams.linkedin} className="font-medium text-[1.6vw] group">
                    <span className="link-line group-hover:text-gray-700">
                      {teams.linkedin}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[1.7vw] flex flex-col gap-[2vw] font-medium my-[5vw] mobile:text-[4.5vw] mobile:gap-[5vw] mobile:my-[10vw] tablet:text-[2.5vw] tablet:my-[7vw]">
              <div
                className="space-y-[2vw]"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </div>
            <div className="w-[90vw] h-[40vw] relative mobile:w-[85vw] mobile:h-[50vw] fadeup tablet:w-[85vw] rounded-[15px] overflow-hidden">
              <img
                src={teams.profilePicture.node.sourceUrl}
                alt={`${title} Profile Image`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}

export default Teamdetail;

export async function getStaticProps({ params = {} } = {}) {
  const { team: teamSlug } = params;
  const { team } = await getTeamBySlug(teamSlug);

  if (!team) {
    return {
      props: {},
      notFound: true,
    };
  }

  const props = {
    team,
  };

  return {
    props,
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { teams } = await getAllTeams({
    queryIncludes: 'index',
  });

  const paths = teams
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        team: slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}



