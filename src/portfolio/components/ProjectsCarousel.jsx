import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/data";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const arrowButtonStyle =
  "pointer-events-auto bg-muted rounded-full m-1 p-3 shadow-xl shadow-black/50 text-canvas cursor-pointer";

const ARROWS = [
  {
    label: "Previous project",
    direction: -1,
    Icon: ArrowLeft,
    style: arrowButtonStyle,
  },
  {
    label: "Next project",
    direction: 1,
    Icon: ArrowRight,
    style: `-translate-x-4 ${arrowButtonStyle}`,
  },
];

export default function ProjectsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.firstElementChild.offsetWidth + gap;

    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Section
      title="What I've built"
      className="relative w-full overflow-hidden"
    >
      <div
        ref={scrollRef}
        className="ml-4 mt-4 py-1 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain border-l border-line"
      >
        <div className="w-[90%] shrink-0 snap-start lg:w-[70%]">
          <div className="aspect-video bg-[#080808] flex items-center justify-center">
            <h1 className="text-6xl md:text-9xl text-white font-extrabold">NEID</h1>
          </div>

          <h3 className="-ml-px mt-4 font-display text-2xl">NEID</h3>
          <p className="-ml-px mt-1 font-sans text-ink">
            A web app for freelancers to manage their clients, projects, and
            tasks.
          </p>
          <p className="-ml-px mt-2 font-sans text-sm text-muted">
            React, Tailwind CSS, JavaScript | Node.js, Express, PostgreSQL
          </p>

          <a
            href="https://www.neid.ma"
            target="_blank"
            rel="noreferrer"
            className="inline-block -ml-px mt-3 text-ink underline decoration-muted underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            Live demo
          </a>
        </div>

        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full hidden sm:flex justify-between gap-2 ml-4">
        {ARROWS.map(({ label, direction, Icon, style }) => (
          <button
            key={label}
            type="button"
            onClick={() => scroll(direction)}
            aria-label={label}
            className={style}
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </Section>
  );
}
