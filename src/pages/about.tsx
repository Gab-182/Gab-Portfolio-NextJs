import Image from "next/image";
import { NextSeo } from "next-seo";
import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import ShowCaseList from "@/components/ShowCaseList";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import heroProfileImg from "@/public/images/gab.png";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function About() {
  return (
    <>
      <div className="hidden md:block">
        <CursorTrailCanvas
          color="hsla(183, 64%, 27%, 0.2)"
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        />
      </div>
      <NextSeo
        title="About Ghaiath Abdoush | Software & Web Developer"
        description="Learn more about Ghaiath Abdoush, a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Ghaiath Abdoush - Software & Web Developer",
          description:
            "Dive into the story of Ghaiath Abdoush, a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ghaiath Abdoush - Portfolio Image",
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
      <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={heroProfileImg}
                width={100}
                height={100}
                className="h-auto w-full px-0 xl:px-16"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting" duration={0.6}>
              <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-6xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Ghaiath Abdoush
              </h1>
            </FadeUp>
            <FadeUp key="description-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                I bring ideas to life through code. With a solid foundation in
                software development, data analysis, and machine learning, I
                take on every project with a focus on innovation and an
                understanding of what users need.
              </p>
            </FadeUp>
            <FadeUp key="description-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Take a look at my portfolio to see my experience in action, from
                Python and JavaScript to React, Next.js, and other leading
                technologies. My aim is to deliver creative, impactful solutions
                that combine technical excellence with real-world practicality.
              </p>
            </FadeUp>
            <FadeRight
              key="hero-location"
              duration={0.6}
              delay={0.8}
              className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="UAE flag"
                  src="https://flagcdn.com/ae.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium">Abu Dhabi, UAE</span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      <ShowCaseList title="Education" details={EDUCATION} />
    </>
  );
}
