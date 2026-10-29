import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Loader2, Moon, Sun } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

const TECH_STACK = [
  { group: "Foundations", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Frameworks", items: ["React", "Tailwind CSS"] },
];

const PROJECTS = [
  {
    title: "Quartier",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/quartierScreenshot.png",
    demo: "https://quartier-cafe.vercel.app/",
    github: "https://github.com/said-hadji/quartier-cafe",
  },
  {
    title: "IronForge",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/ironforgeScreenshot.png",
    demo: "https://ironforge-gym-rose.vercel.app/",
    github: "https://github.com/said-hadji/ironforge-gym",
  },
  {
    title: "Otelury",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/oteluryScreenshot.png",
    demo: "https://otelury-hotel.vercel.app/",
    github: "https://github.com/said-hadji/otelury-hotel",
  },
  {
    title: "Brewhaus",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/brewhausScreenshot.png",
    demo: "https://brewhaus-iota.vercel.app/",
    github: "https://github.com/said-hadji/Brewhaus",
  },
];

const arrowButtonStyle =
  "pointer-events-auto bg-muted rounded-full m-1 p-3 shadow-xl shadow-black/50 text-canvas cursor-pointer";

const linkStyle = "text-accent underline";

function Title({ text }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-display w-fit max-w-full border-b border-line">
      {text}
    </h2>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }

    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="mr-4 shrink-0 text-muted cursor-pointer hover:border-ink hover:text-ink"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function ProjectCard({ title, tags, screenShot, demo, github }) {
  return (
    <article className="-ml-px w-[90%] shrink-0 snap-start lg:w-[70%]">
      <img
        src={screenShot}
        alt={`Screenshot of the ${title} website`}
        loading="lazy"
        className="aspect-video w-full object-cover border border-line"
      />

      <p className="-ml-px font-sans text-muted mt-4">{tags.join(", ")}</p>

      <div className="-ml-px mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans">
        <a href={demo} target="_blank" rel="noreferrer" className={linkStyle}>
          Live demo
        </a>
        <a href={github} target="_blank" rel="noreferrer" className={linkStyle}>
          Source code
        </a>
      </div>
    </article>
  );
}

function ProjectsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.firstElementChild.offsetWidth + gap;

    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden mt-14">
      <Title text="What I've built" />

      <div
        ref={scrollRef}
        className="ml-4 mt-4 py-1 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain border-l border-line"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full hidden sm:flex justify-between gap-2 ml-4">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous project"
          className={arrowButtonStyle}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next project"
          className={`-translate-x-4 ${arrowButtonStyle}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const isLoading = status === "loading";
  const canSend =
    EMAIL_PATTERN.test(values.email.trim()) &&
    values.message.trim() !== "" &&
    !isLoading;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSend) return;

    setStatus("loading");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");

      setValues({ email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-14">
      <Title text="Let's talk about your project" />

      {/* Was `w-full max-w-80 ml-4`: w-full + ml-4 overflowed narrow screens.
          Now the form fills the space left by the margins, capped at 20rem. */}
      <form
        onSubmit={handleSubmit}
        className="max-w-80 ml-4 mr-4 mt-4 py-1 flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          aria-label="Your email"
          placeholder="Your email"
          className="w-full min-w-0 text-lg border-b border-line pt-4 placeholder:text-muted outline-none focus-within:border-ink"
        />
        <textarea
          name="message"
          required
          value={values.message}
          onChange={handleChange}
          aria-label="About your project"
          placeholder="Tell me about your project..."
          className="w-full min-w-0 resize-y min-h-40 max-h-80 text-lg border-b border-line pt-4 placeholder:text-muted outline-none focus-within:border-ink"
        ></textarea>

        <button
          type="submit"
          disabled={!canSend}
          className="flex items-center justify-center gap-2 bg-muted hover:bg-ink disabled:hover:bg-muted border border-line px-4 py-4 font-sans text-canvas cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading && <Loader2 size={16} className="animate-spin" />}
          {isLoading ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p role="status" className="font-sans text-sm text-muted">
            Thanks! Your message was sent. I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="font-sans text-sm text-muted">
            Your message was not sent. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

function App() {
  const [picture, setPicture] = useState(false);

  return (
    <div className="w-full min-h-screen bg-canvas overflow-x-hidden">
      {picture && (
        <div
          onClick={() => setPicture(false)}
          className="fixed inset-0 z-50 bg-ink/20 backdrop-blur-sm flex justify-center items-center"
        >
          <img
            src="/images/my-picture.jpg"
            alt="Portrait of Said Hadji"
            className="aspect-square w-70 max-w-[80vw] rounded-full object-cover"
          />
        </div>
      )}

      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-275 h-full border-l border-line">
          <div className="w-full pt-5 border-b border-line flex items-center justify-between gap-2">
            <h1 className="-ml-px text-4xl sm:text-5xl md:text-6xl font-display">
              Said Hadji
            </h1>
            <ThemeToggle />
          </div>

          <div className="mt-14">
            <Title text="Who am I?" />

            <div className="max-w-prose ml-4 mr-4 md:mr-0 mt-4 py-1 border-l border-line space-y-1">
              <p className="-ml-0.5 text-[18px] text-muted font-sans">
                I'm an{" "}
                <span className="text-ink">early-career frontend developer</span>{" "}
                from <span className="text-ink">Morocco</span>.
              </p>

              <button
                onClick={() => setPicture(true)}
                className="font-sans text-ink text-[18px] underline cursor-pointer -ml-px"
              >
                View my photo
              </button>
            </div>
          </div>

          <div className="mt-14">
            <Title text="Technologies I work with" />

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
          </div>

          <div className="mt-14">
            <Title text="What I can build for you" />

            <div className="max-w-prose ml-4 mr-4 md:mr-0 mt-4 py-1 border-l border-line">
              <p className="-ml-0.5 text-[18px] text-muted font-sans leading-7.5">
                I build clean, responsive websites and web apps with{" "}
                <span className="text-ink">
                  React, JavaScript, and Tailwind CSS
                </span>
                , from landing pages to dashboards. I focus on the details:
                readable typography, smooth interactions, and layouts that work
                on every screen. My code is simple to read and easy to
                maintain, and what I build looks as good as it works.
              </p>
            </div>
          </div>

          <ProjectsCarousel />

          <ContactForm />

          <footer className="mt-14 flex items-center justify-between gap-4 border-t border-line py-5 pr-4 md:pr-0 font-sans text-sm text-muted">
            <p>© {new Date().getFullYear()} Said Hadji</p>
            <a
              href="https://github.com/said-hadji"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;