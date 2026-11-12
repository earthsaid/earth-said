import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const GITHUB_URL = "https://github.com/earthsaid";

export const PROJECTS = [
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

export const TECH_STACK = [
  { group: "Foundations", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Frameworks", items: ["React", "Tailwind CSS"] },
];

export const STATUS_MESSAGES = {
  success: {
    role: "status",
    text: "Thanks! Your message was sent. I'll get back to you soon.",
  },
  error: {
    role: "alert",
    text: "Your message was not sent. Please try again.",
  },
};

export const SOCIAL_MEDIA = [
  {
    label: "Github",
    url: GITHUB_URL,
    icon: FaGithub,
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/said-hadji-363793404",
    icon: FaLinkedin,
  },

  {
    label: "Instagram",
    url: "https://www.instagram.com/earth.said?exln=bmdoOWpwMTI3dDUO",
    icon: FaInstagram,
  },
];
