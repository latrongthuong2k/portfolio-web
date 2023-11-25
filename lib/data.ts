import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import warehouseMNGI from "@/public/WarehouseMng.png";
import springBootApp from "@/public/BackEndApi.png";
import portfolioProject from "@/public/portfolioProject.png";
import lmsImage from "@/public/lms.png";

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
    title: "Portfolio web",
    description:
      "Developed a NextJs portfolio website showcasing my projects." +
      " Features modern design with ReactJS, enhanced interactivity with Framer Motion, " +
      "and responsive layout.",
    tags: ["NextJS", "ReactJS", "Tailwind", "Framer Motion"],
    imageUrl: portfolioProject,
    projectUrl: "https://github.com/latrongthuong2k/portfolio-web",
  },
  {
    title: "Learning Management System Web",
    description:
      "Developed a Front-end comprehensive Learning Management System (LMS) to manage courses, students, teachers, and user accounts. " +
      "It features a user-friendly interface, interactive elements for enhanced user engagement",
    tags: ["Html", "Css", "JavaScript", "Bootstrap 5"],
    imageUrl: lmsImage,
    projectUrl: "https://github.com/latrongthuong2k/studentManagementWeb",
  },
  {
    title: "Warehouse Manager App",
    description:
      "This project is a comprehensive system for Admins to manage user data, products, bills, and more, " +
      "seamlessly integrated with a Spring Boot API for data handling.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Java Spring"],
    imageUrl: warehouseMNGI,
    projectUrl:
      "https://github.com/latrongthuong2k/Web-Admin-Ecommerce-Project",
  },

  // "This project features a Spring Boot backend for an online sales platform, " +
  // "providing comprehensive APIs for security, user account storage, user role management, " +
  // "along with essential CRUD APIs for data retrieval from the database to the end-user, and data caching." +
  // " Integrated with a React and Next.js frontend, utilizing MySQL for database management and Tailwind for styling.",
  {
    title: "Ecommerce Back-end Api",
    description:
      "This project involved developing a comprehensive Spring Boot back-end for an online " +
      "shopping website. It included a robust set of APIs for security, managing user accounts, " +
      "user authorization, and necessary CRUD operations to retrieve data from the database to the user." +
      " Additionally, the project incorporated data caching for enhanced performance.",
    tags: ["MySQL", "Java Spring"],
    imageUrl: springBootApp,
    projectUrl: "https://github.com/latrongthuong2k/WebE-commerce2",
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
