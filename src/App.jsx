import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Moon, Sun } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xnppzawy";
const GITHUB_URL = "https://github.com/earth-said";
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const EMPTY_FORM = { email: "", message: "" };

const TECH_STACK = [
  { group: "Foundations", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Frameworks", items: ["React", "Tailwind CSS"] },
];

const PROJECTS = [
  {
    title: "Coreframe",
    description: "Hardware e-commerce website",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/coreframe_s.png",
    demo: "https://coreframe-hardware.vercel.app",
  },
  {
    title: "Quartier",
    description: "Website for a neighborhood café.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/quartier_s.png",
    demo: "https://quartier-cafe.vercel.app/",
    github: `${GITHUB_URL}/quartier-cafe`,
  },
  {
    title: "IronForge",
    description: "Landing page for a gym.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/ironforge_s.png",
    demo: "https://ironforge-gym-rose.vercel.app/",
    github: `${GITHUB_URL}/ironforge-gym`,
  },
  {
    title: "Otelury",
    description: "Website for a boutique hotel.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/otelury_s.png",
    demo: "https://otelury-hotel.vercel.app/",
    github: `${GITHUB_URL}/otelury-hotel`,
  },
  {
    title: "Brewhaus",
    description: "Website for a coffee shop.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: "/screenShots/brewhaus_s.png",
    demo: "https://brewhaus-iota.vercel.app/",
    github: `${GITHUB_URL}/Brewhaus`,
  },
];

const STATUS_MESSAGES = {
  success: {
    role: "status",
    text: "Thanks! Your message was sent. I'll get back to you soon.",
  },
  error: {
    role: "alert",
    text: "Your message was not sent. Please try again.",
  },
};

/* ---------- Shared styles ---------- */

const arrowButtonStyle =
  "pointer-events-auto bg-muted rounded-full m-1 p-3 shadow-xl shadow-black/50 text-canvas cursor-pointer";

const linkStyle =
  "text-ink underline decoration-muted underline-offset-4 hover:text-accent hover:decoration-accent";

const proseBlockStyle =
  "max-w-prose ml-4 mr-4 md:mr-0 mt-4 py-1 border-l border-line";

const proseTextStyle = "-ml-0.5 text-[18px] text-muted font-sans";

const fieldStyle =
  "w-full min-w-0 text-lg border-b border-line pt-4 placeholder:text-muted outline-none focus:border-ink";

/* ---------- Small building blocks ---------- */

function Title({ text }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-display w-fit max-w-full border-b border-line">
      {text}
    </h2>
  );
}

function Section({ title, id, className = "", children }) {
  return (
    <section id={id} className={`mt-14 ${className}`}>
      <Title text={title} />
      {children}
    </section>
  );
}

function Highlight({ children }) {
  return <span className="text-ink">{children}</span>;
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
      className="mr-4 shrink-0 text-muted cursor-pointer hover:text-ink"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

/* ---------- Projects ---------- */

function ProjectCard({ title, description, tags, screenShot, demo, github }) {
  return (
    <article className="w-[90%] shrink-0 snap-start lg:w-[70%]">
      <img
        src={screenShot}
        alt={`Screenshot of the ${title} website`}
        loading="lazy"
        className="aspect-video w-full object-cover border border-line"
      />

      <h3 className="-ml-px mt-4 font-display text-2xl">{title}</h3>
      <p className="-ml-px mt-1 font-sans text-ink">{description}</p>
      <p className="-ml-px mt-2 font-sans text-sm text-muted">
        {tags.join(", ")}
      </p>

      <div className="-ml-px mt-3 flex flex-wrap gap-x-4 gap-y-1 font-sans">
        {demo && <a href={demo} target="_blank" rel="noreferrer" className={linkStyle}>
          Live demo
        </a>
        }
        {github && <a href={github} target="_blank" rel="noreferrer" className={linkStyle}>
          Source code
        </a>}
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
    <Section
      title="What I've built"
      className="relative w-full overflow-hidden"
    >
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
    </Section>
  );
}

/* ---------- Contact ---------- */

function ContactForm({ emailRef }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const isLoading = status === "loading";
  const feedback = STATUS_MESSAGES[status];
  const canSend =
    EMAIL_PATTERN.test(values.email.trim()) &&
    values.message.trim() !== "" &&
    !isLoading;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (feedback) setStatus("idle");
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

      setValues(EMPTY_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Let's talk about your project">
      <form
        onSubmit={handleSubmit}
        className="max-w-80 ml-4 mr-4 mt-4 py-1 flex flex-col gap-4"
      >
        <input
          ref={emailRef}
          type="email"
          name="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          aria-label="Your email"
          placeholder="Your email"
          className={fieldStyle}
        />
        <textarea
          name="message"
          required
          value={values.message}
          onChange={handleChange}
          aria-label="About your project"
          placeholder="Tell me about your project..."
          className={`${fieldStyle} min-h-40 max-h-80`}
        ></textarea>

        <button
          type="submit"
          disabled={!canSend}
          className="flex items-center justify-center gap-2 border border-line bg-ink px-4 py-4 font-sans text-canvas cursor-pointer hover:bg-accent disabled:cursor-not-allowed disabled:bg-transparent disabled:text-muted disabled:hover:bg-transparent"
        >
          {isLoading && <Loader2 size={16} className="animate-spin" />}
          {isLoading ? "Sending..." : "Send message"}
        </button>

        {feedback && (
          <p role={feedback.role} className="font-sans text-sm text-muted">
            {feedback.text}
          </p>
        )}
      </form>
    </Section>
  );
}

/* ---------- Page ---------- */

function App() {
  const emailRef = useRef(null);

  // Clicking anywhere outside the email field takes focus away from it.
  useEffect(() => {
    const blurEmail = (e) => {
      if (e.target !== emailRef.current) emailRef.current?.blur();
    };

    document.addEventListener("click", blurEmail, true);
    return () => document.removeEventListener("click", blurEmail, true);
  }, []);

  const focusEmail = (e) => {
    e.preventDefault();
    emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    emailRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="w-full min-h-screen bg-canvas overflow-x-hidden">
      <div className="container mx-auto flex justify-center px-2 sm:px-0">
        <div className="w-full max-w-275 h-full border-l border-line">
          <div className="w-full pt-5 border-b border-line flex items-center justify-between gap-2">
            <h1 className="-ml-px text-4xl sm:text-5xl md:text-6xl font-display">
              Said Hadji
            </h1>
            <ThemeToggle />
          </div>

          <Section title="Who am I?">
            <div className={`${proseBlockStyle} space-y-1`}>
              <p className={proseTextStyle}>
                I'm an <Highlight>early-career frontend developer</Highlight>{" "}
                from <Highlight>Morocco</Highlight>.
              </p>

              <p className={proseTextStyle}>
                Available for <Highlight>frontend work</Highlight>.{" "}
                <a href="#contact" onClick={focusEmail} className={linkStyle}>
                  Get in touch
                </a>
              </p>

              <img
                src="/images/my-picture.jpg"
                alt="Portrait of Said Hadji"
                className="aspect-square w-70 max-w-[80vw] object-cover border-t border-b border-r border-line"
              />
            </div>
          </Section>

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

          <Section title="What I can build for you">
            <div className={proseBlockStyle}>
              <p className={`${proseTextStyle} leading-7.5`}>
                I build clean, responsive websites and web apps with{" "}
                <Highlight>React, JavaScript, and Tailwind CSS</Highlight>, from
                landing pages to dashboards. I focus on the details: readable
                typography, smooth interactions, and layouts that work on every
                screen. My code is simple to read and easy to maintain, and what
                I build looks as good as it works.
              </p>
            </div>
          </Section>

          <ProjectsCarousel />

          <ContactForm emailRef={emailRef} />

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
        </div>
      </div>
    </div>
  );
}

export default App;