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
      DARK: "/images/projects/SAR_1.png",
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
    imageUrl: ["/images/projects/SAR_1.png", "/images/projects/SAR_2.png"],
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
    name: "Many Games",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
