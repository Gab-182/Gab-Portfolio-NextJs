import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

export default function RenderCv() {
  return (
    <>
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
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 md:px-20 md:pt-20">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-4xl md:text-5xl">
              My Curriculum Vitae
            </h1>
          </FadeUp>
        </AnimatePresence>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border-2 border-teal-500 shadow-lg dark:shadow-xl">
          <AnimatePresence>
            <FadeUp key="cv-iframe" duration={0.6} delay={0.2}>
              <div className="relative h-[600px] sm:h-[800px]">
                <iframe
                  src="/Ghaiath_Abdoush_CV.pdf"
                  className="border-3 h-full w-full rounded-lg border border-teal-500 shadow-lg dark:shadow-xl"
                  style={{ height: "100%", width: "100%" }}
                />
                <Link
                  href="/Ghaiath_Abdoush_CV.pdf"
                  target="_blank"
                  download
                  className="absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-teal-500 p-2 text-white shadow-lg transition-all hover:bg-teal-600"
                >
                  <IoMdDownload size={24} />
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}