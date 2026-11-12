import { useState } from "react";
import Section from "./Section";
import { Highlight } from "./Typography";
import MenuToggle from "../../components/MenuToggle";
import Menu from "../../components/Menu";
import { House } from "lucide-react";

const proseBlockStyle =
  "max-w-prose ml-4 mr-4 md:mr-0 mt-4 py-1 border-l border-line";

const proseTextStyle = "-ml-0.5 text-[18px] text-muted font-sans";

export default function Hero({ focusEmail }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <div className="relative w-full pt-5 border-b border-line flex items-center justify-between gap-2">
        <h1 className="-ml-px text-4xl sm:text-5xl md:text-6xl font-display">
          Said Hadji
        </h1>

        <MenuToggle isMenu={isMenu} setIsMenu={setIsMenu} />
        {isMenu && <Menu items={[{ icon: House, label: "Said's PPS" }]} />}
      </div>

      <Section title="Who am I?">
        <div className={`${proseBlockStyle} space-y-1`}>
          <p className={proseTextStyle}>
            I'm an <Highlight>early-career frontend developer</Highlight> from{" "}
            <Highlight>Morocco</Highlight>.
          </p>

          <p className={proseTextStyle}>
            Looking for a <Highlight>frontend internship</Highlight>
          </p>

          <div className="space-x-3 mt-4">
            <a
              href="/cv/SAID_HADJI_CV.pdf"
              download="SAID_HADJI_CV.pdf"
              className="inline-block bg-ink hover:bg-accent px-6 py-3 text-canvas cursor-pointer"
            >
              Download CV
            </a>
            <button
              onClick={focusEmail}
              className="bg-ink hover:bg-accent px-6 py-3 text-canvas cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
