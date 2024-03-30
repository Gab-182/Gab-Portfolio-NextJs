import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Early CKD Prediction",
    href: "/projects",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "XGBoost",
      "Data Visualization",
      "Decision Tree",
      "Random Forest",
      "Logistic Regression",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Cross Validation",
      "Model Evaluation",
      "Data Cleaning",
      "Data Analysis",
      "Machine Learning",
      "Flask",
    ],
    image: {
      LIGHT: "/images/projects/CKD_1.png",
      DARK: "/images/projects/CKD_1.png",
    },
  },
  {
    index: 1,
    title: "SawtAlRuya 👁️‍🗨️",
    href: "/projects",
    tags: [
      "Python",
      "Tensorflow",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Machine Learning",
      "Gpt-3.5 turbo API",
      "Google Text to Speech",
      "Salesforce/BLIP IMAGE API",
      "Palm",
      "Transformers",
    ],
    image: {
      LIGHT: "/images/projects/SAR_1.png",
      DARK: "/images/projects/SAR_11.png",
    },
  },
  {
    index: 2,
    title: "SpinMasters",
    href: "/projects",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "Nestjs",
      "Prisma",
      "Postgres",
      "Docker",
      "OAuth",
      "React.Js",
      "Typescript",
      "Google Auth",
      "Phaser",
      "Socket.io",
    ],
    image: {
      LIGHT: "/images/projects/SpineMaster_2.png",
      DARK: "/images/projects/SpineMaster_2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "SawtAlRuya",
    favicon: "/images/projects/logos/sawtalruya.ico",
    imageUrl: ["/images/projects/SAR_1.png", "/images/projects/SAR_11.png"],
    description:
      "Everything in our world is meant to be seen. That’s why we created SawtAlRuya, an AI-powered app that helps visually impaired people to \
      see the world around them. It uses the latest AI technologies to describe the world around them, and we used for that GPT-3.5 turbo API, \
      Google Text to Speech, Salesforce/BLIP IMAGE API, Google Palm model, Transformers ...",
    sourceCodeHref: "https://github.com/Gab-182/SawtAlRuya",
  },
  {
    name: "Early CKD Prediction",
    favicon: "/images/projects/logos/ckd.ico",
    imageUrl: [
      "/images/projects/CKD_1.png",
      "/images/projects/CKD_2.png",
      "/images/projects/CKD_3.png",
      "/images/projects/CKD_4.png",
    ],
    description:
      "Early CKD Prediction is a web application that predicts the Chronic Kidney Disease (CKD) using Machine Learning. \
    The application is built using Flask, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn, XGBoost, and other libraries. \
    The application uses Decision Tree, Random Forest, Logistic Regression, and other Machine Learning algorithms to predict the CKD. \
    The application also uses Feature Engineering, Hyperparameter Tuning, Cross Validation, Model Evaluation, Data Cleaning, and Data Analysis to improve the prediction.",
    sourceCodeHref: "https://github.com/Gab-182/CKD_PREDICT",
  },
  {
    name: "SpinMasters",
    favicon: "/images/projects/logos/spinmasters.ico",
    imageUrl: [
      "/images/projects/SpineMaster_1.png",
      "/images/projects/SpineMaster_2.png",
    ],
    description:
      "SpinMasters is a web application that allows users to play the modern pong game, \
      the application is built using Nextjs, Tailwindcss, Nestjs, Prisma, Postgres, Phaser, Socket.io, and other libraries. \
      It contains a game room where users can play the game, and a chat rooms where users can chat with each other. \
      The application uses Google Auth to authenticate users,\
      and Docker to deploy the application.",
    sourceCodeHref: "https://github.com/nousheenali/ft_transcendence",
  },
  {
    name: "Gab portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Home_Page_Light.png",
      "/images/projects/Home_Page_dark.png",
    ],
    description:
      "This is my portfolio website, It is made using Nextjs, Tailwindcss, and Typescript. \
      It contains information about me, my projects, and my skills. \
      The website is responsive and has a dark mode.",
    sourceCodeHref: "https://github.com/Gab-182/Gab-Portfolio-NextJs",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "IRC server",
    favicon: "/images/projects/logos/ircIcon.png",
    imageUrl: ["/images/projects/IRC_1.png"],
    description:
      "IRC server is a chat server that allows users to chat with each other. \
      The server is built using C++, and it uses the IRC protocol to communicate with the clients. \
      The server supports multiple channels, and users can join, leave, and create channels. \
      The server also supports private messages, and users can send messages to each other privately.",
    sourceCodeHref: "https://github.com/Gab-182/ft_irc",
  },
  {
    name: "Market Analysis for National Clothing Chain",
    favicon: "/images/projects/logos/analysis.png",
    imageUrl: [
      "/images/projects/MAC_1.png",
      "/images/projects/MAC_2.png",
      "/images/projects/MAC_3.png",
    ],
    description:
      "Market Analysis for National Clothing Chain is a project that analyzes the market trends for a national clothing chain. \
      The project is built Power BI, and it uses data from the national clothing chain to analyze the market trends, and predict the future trends. \
      The project contains a dashboard that shows the market trends, and a report that explains the analysis.",
    sourceCodeHref:
      "https://github.com/Gab-182/Market-Analysis-Report-for-National-Clothing-Chain",
  },
];
