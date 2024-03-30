import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence, motion } from "framer-motion";
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
      <section className="mx-auto mb-16 mt-6 w-full px-6 sm:mb-20 sm:mt-12 sm:px-14 md:mb-20 md:px-14 lg:mb-32 xl:mb-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-start text-2xl font-semibold md:text-4xl">
            Curriculum Vitae
          </h1>
          <div className="my-2 text-start">
            <span className="max-w-3xl text-base font-semibold text-teal-600 dark:text-teal-300 sm:text-base md:text-xl">
              Here is my curriculum vitae that I&apos;d like to share 📄
            </span>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 0.4,
              }}
              className="relative mt-8 h-[600px] sm:h-[800px]"
            >
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
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
