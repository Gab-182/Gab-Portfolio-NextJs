import { ContactForm } from "@/components/ContactForm";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
} from "@/components/Icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between bg-teal-600 px-4 py-8 text-white md:flex-row md:items-start md:justify-between md:p-16">
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4">
        {/* <Link
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="text-lg font-semibold underline hover:text-teal-100"
        >
          Ghaiath.Abdoush@gmail.com
        </Link> */}
        <div className="mt-4 md:mt-0"><ContactForm/></div>
      </div>
      <div className="mt-4 flex space-x-4 md:mt-0">
        <Link href={siteMetadata.github} target="_blank">
          <GithubIcon className="h-6 w-6 transition-colors duration-150 hover:text-teal-100" />
        </Link>
        <Link href={siteMetadata.twitter} target="_blank">
          <TwitterIcon className="h-6 w-6 transition-colors duration-150 hover:text-teal-100" />
        </Link>
        <Link href={siteMetadata.linkedin} target="_blank">
          <LinkedinIcon className="h-6 w-6 transition-colors duration-150 hover:text-teal-100" />
        </Link>
        <Link href={siteMetadata.discord} target="_blank">
          <DiscordIcon className="h-6 w-6 transition-colors duration-150 hover:text-teal-100" />
        </Link>
      </div>
      <span className="mt-4 text-xs md:mt-0">©2024 Ghaiath Abdoush</span>
    </footer>
  );
}
