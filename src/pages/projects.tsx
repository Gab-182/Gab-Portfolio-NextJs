import { NextSeo } from "next-seo";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Ghaiath Abdoush - Software & Web Developer Portfolio"
        description="Explore a collection of projects by Ghaiath Abdoush (Gab), a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title:
            "Discover Projects by Ghaiath Abdoush - Software & Web Developer",
          description:
            "Dive into the story of Ghaiath Abdoush, a Software and Web Developer with a passion for AI, Machine Learning, and Full-Stack Development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ghaiath Abdoush- Portfolio Image",
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
              "Projects, Portfolio,Fullstack web Developer, Frontend Developer, Web Developer, React.js, Frontend Development, Web Development, Machine Learning, AI, Software Developer, Software Engineer, Portfolio, Ghaiath Abdoush, Ghaiath, Abdoush, Ghaiath Abdoush Portfolio, Ghaiath Abdoush Website, Ghaiath Abdoush Developer, Ghaiath Abdoush Software Developer",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
          <div className="my-2">
            <span className="max-w-3xl text-base font-semibold text-teal-600 dark:text-teal-300 sm:text-base md:text-xl">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning more about AI
              🤖, Machine Learning 🦾, and Deep Learning, to improve my skills
              in the field🚀
            </span>
            <br />
            <span className="text-xl font-bold md:text-2xl">
              Also pursuing the Mastery field in Software Engineering at{" "}
            </span>
            <Link
              href="https://42abudhabi.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="max-w-3xl text-base font-semibold text-teal-600 dark:text-teal-300 sm:text-base md:text-2xl">
                {" "}
                42 Abu Dhabi
              </span>{" "}
            </Link>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-medium text-tera-500 underline underline-offset-2 hover:text-teal-600 dark:text-teal-400"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
