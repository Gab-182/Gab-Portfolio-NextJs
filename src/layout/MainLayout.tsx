import { ReactNode, useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { classNames } from "@/utility/classNames";
import Navbar from "@/layout/Navbar/Navbar";
import { routes } from "@/data/navigationRoutes";
import Footer from "@/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={classNames(
        "fixed bottom-8 right-4 z-50 rounded-full bg-teal-600 p-2 text-zinc-100 shadow-md transition-opacity duration-300 dark:bg-teal-500 dark:text-zinc-100",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </button>
  );
};

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <SpeedInsights />
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <ScrollToTopIcon />
      <Footer />
    </>
  );
}
