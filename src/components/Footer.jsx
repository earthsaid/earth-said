import { GITHUB_URL } from "../portfolio/data/data";

export default function Footer() {
  return (
    <footer className="mt-14 flex items-center justify-between gap-4 border-t border-line py-5 pr-4 md:pr-0 font-sans text-sm text-muted">
      <p>© {new Date().getFullYear()} Said Hadji</p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="hover:text-accent"
      >
        GitHub
      </a>
    </footer>
  );
}
