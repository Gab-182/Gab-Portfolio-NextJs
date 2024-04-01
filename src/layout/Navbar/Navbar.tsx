import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedLogo } from "@/animation/AnimatedLogo";
import { classNames } from "@/utility/classNames";
import MenuLogo from "@/layout/Navbar/MenuButton";
import ThemeSwitch from "@/layout/Navbar/ThemeSwitch";
import { IoClose } from "react-icons/io5";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

type TNavbar = {
  routes: NavbarRoutes;
};

export default function Navbar(props: TNavbar) {
  const pathName = usePathname();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClick = (href: string) => {
    toggleModal();
    router.push(href);
  };

  return (
    <header className="relative z-50 mt-2 px-6 py-8 sm:mt-2 sm:px-14 md:px-12">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center drop-shadow-teralight"
          aria-label="Return to home page"
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-teal-600/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={_link.href}
                    className={classNames(
                      pathName === _link.href
                        ? "font-semibold text-white dark:text-zinc-900 dark:hover:text-white"
                        : "",
                      "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                    )}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-tera-500 group-hover:bg-tera-500/80 dark:bg-teal-400 dark:group-hover:bg-teal-500"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 overflow-y-auto bg-zinc-100/90 bg-opacity-90 backdrop-blur-sm dark:bg-teal-700/90 dark:bg-opacity-90"
            >
              <motion.div className="absolute right-0 top-0 h-full w-3/4 max-w-xs rounded-l-3xl bg-zinc-100 p-6 shadow-lg backdrop-blur-md dark:bg-teal-700 md:p-10">
                <div className="flex justify-between">
                  <div className="text-3xl font-bold text-teal-600 dark:text-zinc-100">
                    Menu
                  </div>
                  <button
                    className="text-teal-600 dark:text-zinc-100"
                    onClick={toggleModal}
                  >
                    <IoClose size={24} />
                  </button>
                </div>
                <div className="mt-6 flex flex-col items-start gap-4 text-left">
                  {props.routes.map((link, i) => (
                    <motion.button
                      key={i}
                      className="group relative py-2 text-2xl font-medium text-teal-600 hover:text-teal-800 dark:text-zinc-100 dark:hover:text-white"
                      onClick={() => handleClick(link.href)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className={classNames(
                          pathName === link.href ? "w-full" : "w-0",
                          "absolute -bottom-1 left-0 h-1 rounded-lg bg-teal-600 transition-[width] duration-300 group-hover:w-full dark:bg-zinc-100",
                        )}
                      ></span>
                      {link.title}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-auto flex justify-center">
                  <ThemeSwitch setClose={setIsModalOpen} />
                </div>
                <div className="mt-6 text-center">©2024 Ghaiath Abdoush</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
