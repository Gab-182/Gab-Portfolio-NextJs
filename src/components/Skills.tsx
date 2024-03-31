import { JSX } from "react";
import { AnimatePresence } from "framer-motion";
import FadeRight from "@/animation/FadeRight";
import {
  MACHINE_LEARNING_FRAMEWORKS,
  DATABASE_ORM_PILL,
  LANGUAGES,
  LIBRARY_FRAMEWORK,
  TOOLS_TECHNOLOGIES,
} from "@/data/skills";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  const skillCategories = [
    { title: "Languages", data: LANGUAGES },
    { title: "Web Dev Frameworks & Libraries", data: LIBRARY_FRAMEWORK },
    { title: "Machine Learning Frameworks", data: MACHINE_LEARNING_FRAMEWORKS },
    { title: "Databases & ORMs", data: DATABASE_ORM_PILL },
    { title: "Tools & Technologies", data: TOOLS_TECHNOLOGIES },
  ];
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold sm:text-4xl">Skills</h2>

        {skillCategories.map((category, index) => (
          <AnimatePresence key={`category-${index}`}>
            <div className="mt-8">
              <span className="text-xs font-semibold sm:text-sm">
                {category.title}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100">
                {category.data.map((pill, index) => (
                  <FadeRight
                    key={`pill-${index}`}
                    duration={0.1}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebonced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
