import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Ghaiath Abdoush | Software & Web Developer"
        description="Explore the professional portfolio of Ghaiath Abdoush, a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Ghaiath Abdoush | Software & Web Developer Portfolio",
          description:
            "Dive into the world of Technology with Ghaiath Abdoush, a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ghaiath Abdoush  - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Fullstack web Developer, Frontend Developer, Web Developer, React.js, Frontend Development, Web Development, Machine Learning, AI, Software Developer, Software Engineer, Portfolio, Ghaiath Abdoush, Ghaiath, Abdoush, Ghaiath Abdoush Portfolio, Ghaiath Abdoush Website, Ghaiath Abdoush Developer, Ghaiath Abdoush Software Developer, Ghaiath Abdoush Web Developer, Ghaiath Abdoush Fullstack Developer, Ghaiath Abdoush Fullstack Web Developer, Ghaiath Abdoush Fullstack Software Developer, Ghaiath Abdoush Fullstack Web Developer Portfolio, Ghaiath Abdoush Fullstack Software Developer Portfolio, Ghaiath Abdoush Fullstack Developer Portfolio, Ghaiath Abdoush Fullstack Web Developer Website, Ghaiath Abdoush Fullstack Software Developer Website, Ghaiath Abdoush Fullstack Developer Website, Ghaiath Abdoush Fullstack Web Developer Developer, Ghaiath Abdoush Fullstack Software Developer Developer, Ghaiath Abdoush Fullstack Developer Developer",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <Hero />
      <Skills />
      <Project projects={PROJECT_SHOWCASE} />
    </>
  );
}
