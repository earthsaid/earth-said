import { useState } from "react";
import Section from "./Section";
import { Highlight } from "./Typography";
import MenuToggle from "../../components/MenuToggle";
import Menu from "../../components/Menu";
import { House } from "lucide-react";
import { PROSE_BLOCK_STYLE, PROSE_TEXT_STYLE } from "./index";

export default function Hero({ focusEmail }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <div className="relative w-full pt-5 border-b border-line flex items-center justify-between gap-2">
        <h1 className="-ml-px text-4xl sm:text-5xl md:text-6xl font-display">
          Said Hadji
        </h1>

        <MenuToggle isMenu={isMenu} setIsMenu={setIsMenu} />
        {isMenu && <Menu items={[{ icon: House, label: "Personal public space", to: "personal-public-space" }]} />}
      </div>

      <Section title="Who am I?">
        <div className={`${PROSE_BLOCK_STYLE} space-y-1`}>
          <p className={PROSE_TEXT_STYLE}>
            I'm an <Highlight>early-career frontend developer</Highlight> from{" "}
            <Highlight>Morocco</Highlight>.
          </p>

          <p className={PROSE_TEXT_STYLE}>
            Looking for a <Highlight>frontend internship</Highlight>
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-4">
            <a
              href="/cv/SAID_HADJI_CV.pdf"
              download="SAID_HADJI_CV.pdf"
              className="inline-block w-55 sm:w-40 bg-ink hover:bg-accent py-2 sm:py-3 text-canvas text-center cursor-pointer"
            >
              Download CV
            </a>
            <button
              onClick={focusEmail}
              className="w-55 sm:w-40 border border-ink hover:border-accent hover:bg-accent py-2 sm:py-3 text-ink hover:text-canvas text-center cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
