import Image from "next/image";
import { NextSeo } from "next-seo";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function Achievements() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
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

      <div className="mx-auto max-w-7xl px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl">
              Achievements and Reflections
            </h1>
          </FadeUp>
        </AnimatePresence>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <AnimatePresence>
              <FadeUp key="newspaper-mentions" duration={0.6} delay={0.2}>
                <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                  <h2 className="text-2xl font-bold">
                    I am on the national newspapers!
                  </h2>
                  <ul className="mt-4 list-disc pl-4">
                    <li className="mt-2">
                      <a
                        href="https://uaenews247.com/2023/04/24/42-abu-dhabi-continues-to-empower-its-students-to-propel-the-future-of-technology-in-the-emirate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/UaeNews247.ico"
                          alt="UAE News 24/7"
                          width={45}
                          height={45}
                        />
                        <span className="text-md font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          UAE News 24/7
                        </span>
                      </a>
                      <p className="mt-1 text-sm">
                        42 Abu Dhabi continues to empower its students to propel
                        the future of technology in the Emirate by developing
                        cutting-edge projects...
                      </p>
                    </li>
                    <li className="mt-2">
                      <a
                        href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/BNews.ico"
                          alt="Bizness Transform"
                          width={45}
                          height={45}
                        />
                        <span className="text-md font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          Bizness Transform
                        </span>
                      </a>
                      <p className="mt-1 text-sm">
                        42 Abu Dhabi and Al Hathboor Bikal AI host a hackathon
                        on computer vision using Python frameworks...
                      </p>
                    </li>

                    <li className="mt-2">
                      <a
                        href="https://theprint.in/world/42-abu-dhabi-empowers-students-for-tech-future-with-cutting-edge-projects/1530708/?amp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/thePrintIcon.ico"
                          alt="The Print Newspaper"
                          width={45}
                          height={45}
                        />
                        <span className="text-md font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          The Print Newspaper
                        </span>
                      </a>
                      <p className="mt-1 text-sm">
                        42 Abu Dhabi Coding School continues to cement its
                        position as a leading talent incubator for developing
                        and upskilling the Emirate's youth in the coding
                        field...
                      </p>
                    </li>
                    <li className="mt-2">
                      <a
                        href="https://www.bahrainthisweek.com/42-abu-dhabi-continues-to-empower-its-students-to-propel-the-future-of-technology-in-the-emirate-by-developing-cutting-edge-projects/?amp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src="/images/News/bahrineNews.ico"
                          alt="Bahrain This Week"
                          width={45}
                          height={45}
                        />
                        <span className="text-md font-bold text-teal-600 hover:cursor-pointer dark:text-teal-400">
                          Bahrain This Week
                        </span>
                      </a>
                      <p className="mt-1 text-sm">
                        42 Abu Dhabi's students developed a project featuring an
                        AI machine-learning model that predicts the occurrence
                        of chronic kidney diseases...
                      </p>
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>

          <div className="col-span-2">
            <AnimatePresence>
              <FadeUp key="achievements-description" duration={0.6} delay={0.4}>
                <div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-start shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                  <p>
                    Throughout my journey exploring AI, machine learning, and
                    data science, I've been on a quest for knowledge and
                    skill-building. One memorable experience was my involvement
                    in the healathon, where I teamed up with talented
                    individuals for an intensive bootcamp. Together, we tackled
                    a challenging project: creating a machine learning model to
                    early predict chronic kidney diseases (CKD).
                  </p>
                  <p className="mt-4">
                    We also crafted a user-friendly web app to improve
                    communication between healthcare providers and patients. Our
                    hard work paid off when we clinched the top spot globally,
                    earning recognition in national newspapers. Beyond this,
                    I've enjoyed participating in coding challenges, including
                    those hosted by 42 Abu Dhabi, Beacon Red and Bikal Tech.
                    These experiences have been invaluable, offering diverse
                    learning opportunities.
                  </p>
                  <p className="mt-4">
                    I'm particularly proud of our team's achievement in
                    developing 'Sawt AlRu'ya,' an app that leverages the
                    computer vision technology to empower visually impaired
                    individuals. This app converts live video into real-time
                    text descriptions and spoken words, enhancing daily
                    experiences.
                  </p>
                  <p className="mt-4">
                    As I continue on my journey, I'm committed to learning and
                    contributing to the exciting field of AI and data science.
                  </p>
                </div>
              </FadeUp>
            </AnimatePresence>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <AnimatePresence>
                <FadeUp key="healathon-hackathon" duration={0.6} delay={0.6}>
                  <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                    <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      Healathon Hackathon Winners
                    </h2>
                    <a
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
                    </a>
                    <p className="mt-2">
                      Survivor Stories in Healthcare & HealAThon Winner
                      Announcement...
                    </p>
                    <a
                      href="https://www.linkedin.com/posts/myraa-technologies_launch-speakers-healathon-activity-7045293165972508672-V7k6?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                    >
                      More
                    </a>
                  </div>
                </FadeUp>
              </AnimatePresence>

              <AnimatePresence>
                <FadeUp key="innovation-project" duration={0.6} delay={0.8}>
                  <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg">
                    <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      Innovative Student Projects
                    </h2>
                    <a
                      href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <Image
                        src="/images/News/computerVisionHackathonWinner.jpg"
                        alt="Innovative Students"
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </a>
                    <p className="mt-2">
                      The winning team developed 'Sawt AlRu'ya,' an app
                      utilizing advanced computer vision and AI. It transforms
                      live video into real-time text descriptions and translates
                      them into spoken words, empowering visually impaired
                      individuals and enhancing their daily experiences.
                    </p>
                    <a
                      href="https://www.biznesstransform.com/42-abu-dhabi-al-hathboor-bikal-ai-host-hackathon-on-computer-vision-using-python-frameworks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                    >
                      More
                    </a>
                  </div>
                </FadeUp>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
