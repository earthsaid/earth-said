import Section from "./Section";
import ThemeToggle from "./ThemeToggle";
import { Highlight, TextLink } from "./Typography";

const proseBlockStyle =
  "max-w-prose ml-4 mr-4 md:mr-0 mt-4 py-1 border-l border-line";

const proseTextStyle = "-ml-0.5 text-[18px] text-muted font-sans";

export default function Hero({ focusEmail }) {
  return (
    <div>
      <div className="w-full pt-5 border-b border-line flex items-center justify-between gap-2">
        <h1 className="-ml-px text-4xl sm:text-5xl md:text-6xl font-display">
          Said Hadji
        </h1>
        <ThemeToggle />
      </div>

      <Section title="Who am I?">
        <div className={`${proseBlockStyle} space-y-1`}>
          <p className={proseTextStyle}>
            I'm an <Highlight>early-career frontend developer</Highlight> from{" "}
            <Highlight>Morocco</Highlight>.
          </p>

          <p className={proseTextStyle}>
            Available for <Highlight>frontend work</Highlight>.{" "}
            <TextLink href="#contact" onClick={focusEmail}>
              Get in touch
            </TextLink>
          </p>

          <img
            src="/images/my-picture.jpg"
            alt="Portrait of Said Hadji"
            className="aspect-square w-70 max-w-[80vw] object-cover border-t border-b border-r border-line"
          />
        </div>
      </Section>
    </div>
  );
}
