import Section from "./Section";
import { TECH_STACK } from "../data/data";

export default function Stack() {
  return (
    <Section title="Technologies I work with">
      <dl className="ml-4 mt-4 border-t border-line">
        {TECH_STACK.map(({ group, items }) => (
          <div
            key={group}
            className="grid gap-1 border-b border-line py-5 pr-4 md:pr-0 sm:grid-cols-[12rem_1fr]"
          >
            <dt className="font-sans text-muted">{group}</dt>
            <dd className="flex flex-wrap gap-x-6 gap-y-1 font-display text-xl sm:text-2xl">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
