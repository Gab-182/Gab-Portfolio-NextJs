import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function Achievements() {
  console.log(siteMetadata.theme);
  return (
    <>
      <div className="hidden md:block">
        <CursorTrailCanvas
          color="hsla(183, 64%, 27%, 0.2)"
          className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        />
      </div>
      <NextSeo
        title="Achievements | Ghaiath Abdoush"
        description="Explore the remarkable achievements of Ghaiath Abdoush, a talented software and web developer, who is making waves in the industry."
        canonical={`${siteMetadata.siteUrl}/achievements`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/achievements`,
          title: "Achievements | Ghaiath Abdoush",
          description:
            "Discover the impressive achievements of Ghaiath Abdoush, a skilled software and web developer, as he propels the future of technology.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ghaiath Abdoush - Achievements Image",
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
              "Ghaiath Abdoush Achievements, Software Developer Achievements, Web Developer Achievements, Fullstack Developer Achievements, Cutting-Edge Projects, Technology Advancements, UAE News 24/7, 42 Abu Dhabi, Empowering Students, Future of Technology, Remarkable Achievements, Talented Developer, Software Development",
          },
        ]}
      />

      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-start text-2xl font-semibold md:text-4xl">
            Achievements and Reflections
          </h1>
          <div className="my-2 text-start">
            <span className="max-w-3xl text-base font-semibold text-teal-600 dark:text-teal-300 sm:text-base md:text-xl">
              Here are some of the achievements and reflections I&apos;d like to
              share
            </span>
          </div>

          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
              <AnimatePresence>
                <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                  <h2 className="text-xl font-semibold">
                    I am on the national newspapers!
                  </h2>
                  <ul className="mt-4 list-disc pl-4">
                    <li className="mt-2">
                      <Link
                        href="https://uaenews247.com/2023/04/24/42-abu-dhabi-continues-to-empower-its-students-to-propel-the-future-of-technology-in-the-emirate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/UaeNews247.ico"
                          alt="UAE News 24/7"
                          width={35}
                          height={35}
                        />
                        <span className="text-sm font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          UAE News 24/7
                        </span>
                      </Link>
                      <p className="mt-1 text-start text-sm">
                        42 Abu Dhabi continues to empower its students to propel
                        the future of technology in the Emirate by developing
                        cutting-edge projects...
                      </p>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/BNews.ico"
                          alt="Bizness Transform"
                          width={35}
                          height={35}
                        />
                        <span className="text-sm font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          Bizness Transform
                        </span>
                      </Link>
                      <p className="mt-1 text-start text-sm">
                        42 Abu Dhabi and Al Hathboor Bikal AI host a hackathon
                        on computer vision using Python frameworks...
                      </p>
                    </li>

                    <li className="mt-2">
                      <Link
                        href="https://theprint.in/world/42-abu-dhabi-empowers-students-for-tech-future-with-cutting-edge-projects/1530708/?amp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/thePrintIcon.ico"
                          alt="The Print Newspaper"
                          width={35}
                          height={35}
                        />
                        <span className="text-sm font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          The Print Newspaper
                        </span>
                      </Link>
                      <p className="mt-1 text-start text-sm">
                        42 Abu Dhabi Coding School continues to cement its
                        position as a leading talent incubator for developing
                        and upskilling the Emirate's youth in the coding
                        field...
                      </p>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://www.bahrainthisweek.com/42-abu-dhabi-continues-to-empower-its-students-to-propel-the-future-of-technology-in-the-emirate-by-developing-cutting-edge-projects/?amp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/bahrineNews.ico"
                          alt="Bahrain This Week"
                          width={35}
                          height={35}
                        />
                        <span className="text-sm font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          Bahrain This Week
                        </span>
                      </Link>
                      <p className="mt-1 text-start text-sm">
                        42 Abu Dhabi's students developed a project featuring an
                        AI machine-learning model that predicts the occurrence
                        of chronic kidney diseases...
                      </p>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Image
                      src="/images/News/latestNewsDark.svg"
                      alt="Newspaper Mentions"
                      width={300}
                      height={300}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </AnimatePresence>
            </div>

            <div className="col-span-2">
              <AnimatePresence>
                <div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-start shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                  <p>
                    Throughout my journey exploring{" "}
                    <span className="font-semibold text-teal-600">AI</span>,{" "}
                    <span className="italic">machine learning</span>, and{" "}
                    <span className="italic">data science</span>, I've been on a
                    quest for knowledge and skill-building. One memorable
                    experience was my involvement in the{" "}
                    <span className="font-semibold text-teal-600">
                      healathon
                    </span>
                    , where I teamed up with talented individuals for an
                    intensive bootcamp. Together, we tackled a challenging
                    project: creating a machine learning model to{" "}
                    <span className="font-semibold text-teal-600">
                      early predict chronic kidney diseases (CKD)
                    </span>
                    .
                  </p>
                  <p className="mt-4">
                    We also crafted a user-friendly web app to improve
                    communication between{" "}
                    <span className="font-semibold text-teal-600">
                      healthcare providers
                    </span>{" "}
                    and patients. Our hard work paid off when we clinched the
                    top spot globally, earning recognition in{" "}
                    <span className="font-semibold text-teal-600">
                      national newspapers
                    </span>
                    . Beyond this, I've enjoyed participating in coding
                    challenges, including those hosted by{" "}
                    <span className="font-semibold text-teal-600">
                      42 Abu Dhabi
                    </span>
                    ,{" "}
                    <span className="font-semibold text-teal-600">
                      Beacon Red
                    </span>
                    , and{" "}
                    <span className="font-semibold text-teal-600">
                      Bikal Tech
                    </span>
                    . These experiences have been invaluable, offering diverse
                    learning opportunities.
                  </p>
                  <p className="mt-4">
                    I'm particularly proud of our team's achievement in
                    developing '
                    <span className="font-semibold text-teal-600">
                      Sawt AlRu'ya
                    </span>
                    ,' an app that leverages the{" "}
                    <span className="italic">computer vision technology</span>{" "}
                    to empower visually impaired individuals. This app converts
                    live video into real-time text descriptions and spoken
                    words, enhancing daily experiences.
                  </p>
                  <p className="mt-4">
                    As I continue on my journey, I'm committed to learning and
                    contributing to the exciting field of{" "}
                    <span className="font-semibold text-teal-600">AI</span> and{" "}
                    <span className="italic">data science</span>.
                  </p>
                </div>
              </AnimatePresence>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <AnimatePresence>
                  <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                    <h2 className="text-center text-xl font-semibold text-teal-600 dark:text-teal-400">
                      Healathon Hackathon Winners
                    </h2>
                    <Link
                      href="https://www.linkedin.com/posts/myraa-technologies_launch-speakers-healathon-activity-7045293165972508672-V7k6?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <Image
                        src="/images/News/healathonWinner.jpg"
                        alt="Hackathon"
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </Link>
                    <p className="mt-2 text-start">
                      Survivor Stories in Healthcare & HealAThon Winner
                      Announcement...
                    </p>

                    <div className="mt-2 flex justify-center">
                      <Link
                        href="https://www.linkedin.com/posts/myraa-technologies_launch-speakers-healathon-activity-7045293165972508672-V7k6?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </AnimatePresence>
                <AnimatePresence>
                  <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                    <h2 className="text-center text-xl font-semibold text-teal-600 dark:text-teal-400">
                      Meet the Visionaries Behind 'Sawt AlRu'ya
                    </h2>
                    <Link
                      href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <Image
                        src="/images/News/computerVisionHackathonWinner.jpg"
                        alt="Innovative Students"
                        width={700}
                        height={400}
                        className="rounded-lg"
                      />
                    </Link>
                    <p className="mt-2 text-start">
                      The winning team developed 'Sawt AlRu'ya,' an app
                      utilizing advanced computer vision and AI. It transforms
                      live video into real-time text descriptions and translates
                      them into spoken words, empowering visually impaired
                      individuals and enhancing their daily experiences.
                    </p>
                    <div className="mt-2 flex justify-center">
                      <Link
                        href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
