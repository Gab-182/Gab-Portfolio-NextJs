import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
  SiPostgresql,
  SiMariadb,
} from "react-icons/si";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "Python",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
      </span>
    ),
  },
  {
    name: "C++",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
      </span>
    ),
  },
  {
    name: "C",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
      </span>
    ),
  },
  {
    name: "Java",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
      </span>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      </span>
    ),
  },
  {
    name: "Typescript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
      </span>
    ),
  },

  {
    name: "HTML",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
      </span>
    ),
  },
  {
    name: "CSS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
      </span>
    ),
  },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "Reactjs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      </span>
    ),
  },
  {
    name: "Nextjs",
    icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Tailwindcss",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
      </span>
    ),
  },

  {
    name: "Nestjs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
      </span>
    ),
  },
  {
    name: "Nodejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
      </span>
    ),
  },
  {
    name: "Express",
    icon: <SiExpress className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Flask",
    icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "PostgreSQL",
    icon: (
      <SiPostgresql className="h-5 w-5 fill-[#336791] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
      </span>
    ),
  },
  {
    name: "MariaDB",
    icon: (
      <SiMariadb className="h-5 w-5 fill-[#003545] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <SiPrisma className="h-5 w-5 fill-[#2d3748] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
];

export const MACHINE_LEARNING_FRAMEWORKS: SkillPillProps[] = [
  {
    name: "Tensorflow",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
      </span>
    ),
  },
  {
    name: "Pytorch",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
      </span>
    ),
  },
  {
    name: "Scikit-learn",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
      </span>
    ),
  },
  {
    name: "Keras",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" />
      </span>
    ),
  },
  {
    name: "OpenCV",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />
      </span>
    ),
  },
  {
    name: "Pandas",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
      </span>
    ),
  },
  {
    name: "Numpy",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
      </span>
    ),
  },
  {
    name: "Matplotlib",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />
      </span>
    ),
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
      </span>
    ),
  },
  {
    name: "Github",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
      </span>
    ),
  },
  {
    name: "Docker",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
      </span>
    ),
  },
  {
    name: "Postman",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
      </span>
    ),
  },
  {
    name: "Vscode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
      </span>
    ),
  },
  {
    name: "Jupyter",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
      </span>
    ),
  },
  {
    name: "Linux",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
      </span>
    ),
  },
  {
    name: "Heroku",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg" />
      </span>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
      </span>
    ),
  },
  {
    name: "Figma",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
      </span>
    ),
  },
];
