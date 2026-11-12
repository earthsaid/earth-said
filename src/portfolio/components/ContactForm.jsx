import { useState } from "react";
import { Loader2 } from "lucide-react";
import { STATUS_MESSAGES } from "../data/data";
import Section from "./Section";

const FORM_ENDPOINT = "https://formspree.io/f/xnppzawy";
const EMPTY_FORM = { email: "", message: "" };
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

const fieldStyle =
  "w-full min-w-0 text-lg border-b border-line pt-4 placeholder:text-muted outline-none focus:border-ink";

async function sendMessage({ email, message }) {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim(), message: message.trim() }),
  });

  if (!res.ok) throw new Error("Request failed");
}

export default function ContactForm({ emailRef }) {
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
      await sendMessage(values);
      setValues(EMPTY_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Get in touch">
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
        />

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
