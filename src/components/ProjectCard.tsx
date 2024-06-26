import Image from "next/image";
import Corosel from "@/components/Corosel";
import { FiExternalLink } from "react-icons/fi";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

export type ProjectCardProps = {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-zinc-500/30 bg-white transition-shadow duration-150 hover:shadow-md
      dark:border-gray-800/50 dark:bg-gray-900/50 dark:text-gray-100 dark:shadow-lg dark:backdrop-blur-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative h-6 w-6">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <Link
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-1 text-xs underline hover:text-teal-600 dark:hover:text-teal-300 md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </Link>
          {props.liveWebsiteHref && (
            <Link
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline hover:text-teal-600 dark:hover:text-teal-300 md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
