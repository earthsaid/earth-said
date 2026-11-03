import { TextLink } from "./Typography";

export default function ProjectCard({
  title,
  description,
  tags,
  screenShot,
  demo,
  github,
}) {
  const links = [
    { label: "Live demo", href: demo },
    { label: "Source code", href: github },
  ].filter(({ href }) => href);

  return (
    <article className="w-[90%] shrink-0 snap-start lg:w-[70%]">
      <img
        src={screenShot}
        alt={`Screenshot of the ${title} website`}
        loading="lazy"
        className="aspect-video w-full object-cover border border-line bg-surface"
      />

      <h3 className="-ml-px mt-4 font-display text-2xl">{title}</h3>
      <p className="-ml-px mt-1 font-sans text-ink">{description}</p>
      <p className="-ml-px mt-2 font-sans text-sm text-muted">
        {tags.join(", ")}
      </p>

      <div className="-ml-px mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans">
        {links.map(({ label, href }) => (
          <TextLink key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </TextLink>
        ))}
      </div>
    </article>
  );
}
