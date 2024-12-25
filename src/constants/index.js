import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import { saminRay, mihan, digiexpress } from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Digiexpress",
    icon: digiexpress,
    iconBg: "#accbe1",
    date: "2024 - Present",
    points: [
      "Development of Nextjs project to send customer orders by drivers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mihan insurance",
    icon: mihan,
    iconBg: "#fbc3bc",
    date: "2023 - 2024",
    points: [
      "The project is about insurance.",
      "Spearheaded front-end development initiatives, driving successful completion of Bamihan, HamKarvan, Hamkhodro, BaniShoo, etc.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Saminray ICT co.",
    icon: saminRay,
    iconBg: "#b7e4c7",
    date: "2021 - 2023",
    points: [
      "Developed, refactored, and debugged projects with Reactjs and Nextjs",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/MaryamEsmaily",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/maryam-esmaili",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Carpet management",
    description:
      "The project was about carpet warehouse management. Developed management dashboard Using mock data",
    link: "https://carpet-management.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "Online mall",
    name: "Full Stack Threads Clone",
    description:
      "The project was about an online mall with 3D rooms. Created a custom dashboard and advocated on effective and functional React.js patterns.",
    link: "",
  },
  {
    iconUrl: threads,
    theme: "Online mall",
    name: "Full Stack Threads Clone",
    description:
      "The project was about an online mall with 3D rooms. Created a custom dashboard and advocated on effective and functional React.js patterns.",
    link: "",
  },
];
