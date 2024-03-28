import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";

// Render the cv in the browser
export default function RenderCv() {
  return (
    <>
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
      <div className="mx-auto mt-0 flex h-screen max-w-7xl flex-col items-center gap-6 rounded-xl border-2 border-gray-200 bg-white px-6 pt-20 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <iframe src="/Ghaiath_Abdoush_CV.pdf" width="100%" height="100%" />
      </div>
    </>
  );
}
