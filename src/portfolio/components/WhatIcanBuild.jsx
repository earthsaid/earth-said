import Section from "./Section";
import { Highlight } from "./Typography";
import { PROSE_BLOCK_STYLE, PROSE_TEXT_STYLE } from "./index";

export default function WhatIcanBuild() {
  return (
    <Section title="What I can build for you">
      <div className={PROSE_BLOCK_STYLE}>
        <p className={`${PROSE_TEXT_STYLE} text-justify leading-7.5`}>
          I build clean, responsive websites and web apps with{" "}
          <Highlight>React, JavaScript, and Tailwind CSS</Highlight>, from
          landing pages to dashboards. I focus on the details: readable
          typography, smooth interactions, and layouts that work on every
          screen. My code is simple to read and easy to maintain, and what I
          build looks as good as it works.
        </p>
      </div>
    </Section>
  );
}
