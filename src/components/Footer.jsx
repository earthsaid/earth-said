import { SOCIAL_MEDIA } from "../portfolio/data/data";

export default function Footer() {
  return (
    <footer className="mt-14 flex items-center justify-between gap-4 border-t border-line py-5 pr-4 md:pr-0 font-sans text-muted">
      <p>© {new Date().getFullYear()} Said Hadji</p>

      <div className="flex items-center gap-8 md:gap-4">
        {SOCIAL_MEDIA.map(({ label, url, icon: Icon }) => (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title={label}
            className="hover:text-accent"
          >
            <Icon className="size-5"/>
          </a>
        ))}
      </div>
    </footer>
  );
}
