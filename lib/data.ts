import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educateHistory = [
  {
    title: "High School",
    location: "Vietnam",
    description:
      "In high school, I was passionate about Mathematics, Physics, " +
      "and mastering Foreign Languages, driven by my ambition to work internationally.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "Language School",
    location: "Tokyo, Japan",
    description:
      "During my time studying Japanese, I dedicated myself to mastering the language, " +
      "culminating in achieving the N2 proficiency level. " +
      "This enabled me to communicate confidently with native speakers.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "College School",
    location: "Tokyo, Japan",
    description:
      "At Tokyo Design Technology Center College, my focus was on honing programming skills, " +
      "algorithm solving, bug fixing, and testing. I engaged in various practical projects," +
      " including game development and website design. My academic excellence, " +
      "especially in key examinations during my second year, earned me a scholarship worth 300,000 yen.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
];
export const projectsData = [
  {
    title: "Warehouse manager app",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Java Spring"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring FW",
  "Git",
  "Docker",
  "MySQL",
  "Unity",
  "Ec2",
  "S3",
  "Tailwind",
  "Prisma",
  "Japanese",
] as const;
