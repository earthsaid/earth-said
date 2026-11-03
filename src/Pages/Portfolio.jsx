import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import ContactForm from "../portfolio/components/ContactForm";
import Hero from "../portfolio/components/Hero";
import Stack from "../portfolio/components/Stack";
import ProjectsCarousel from "../portfolio/components/ProjectsCarousel";

export default function Portfolio() {
  const emailRef = useRef(null);

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
    <>
      <main>
        <Hero focusEmail={focusEmail} />
        <Stack />
        <ProjectsCarousel />
        <ContactForm emailRef={emailRef} />
      </main>
      <Footer />
    </>
  );
}
