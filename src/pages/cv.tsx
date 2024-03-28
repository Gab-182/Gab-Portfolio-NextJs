import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function RenderCv() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Ghaiath Abdoush | Software & Web Developer - CV"
        description="View the comprehensive curriculum vitae (CV) of Ghaiath Abdoush, a talented software and web developer with expertise in AI, Machine Learning, and Full-Stack Development."
        canonical={`${siteMetadata.siteUrl}/cv`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/cv`,
          title: "Ghaiath Abdoush - Software & Web Developer - CV",
          description:
            "Explore the detailed curriculum vitae (CV) of Ghaiath Abdoush, showcasing his skills, experience, and achievements in the fields of software development, AI, Machine Learning, and Full-Stack Development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ghaiath Abdoush - CV Image",
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
              "Ghaiath Abdoush CV, Software Developer CV, Web Developer CV, Fullstack Developer CV, AI Developer CV, Machine Learning Developer CV, Full-Stack Development CV, Curriculum Vitae, Resume, Portfolio, Ghaiath Abdoush Software Developer, Ghaiath Abdoush Web Developer, Ghaiath Abdoush Fullstack Developer, Ghaiath Abdoush AI Developer, Ghaiath Abdoush Machine Learning Developer",
          },
        ]}
      />
      <div className="mx-auto max-w-5xl px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl">
              My Curriculum Vitae
            </h1>
          </FadeUp>
        </AnimatePresence>
        <div className="mx-auto mt-10 rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
          <AnimatePresence>
            <FadeUp key="cv-iframe" duration={0.6}>
              <iframe
                src="/Ghaiath_Abdoush_CV.pdf"
                width="100%"
                height="800px"
                className="rounded-lg"
              />
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
