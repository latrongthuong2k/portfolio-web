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
  // {
  //   title: "Learning Management System Web",
  //   description:
  //     "Developed a Front-end comprehensive Learning Management System (LMS) to manage courses, students, teachers, and user accounts. " +
  //     "It features a user-friendly interface, interactive elements for enhanced user engagement",
  //   tags: ["Html", "Css", "JavaScript", "Bootstrap 5"],
  //   imageUrl: lmsImage,
  //   projectUrl: "https://github.com/latrongthuong2k/studentManagementWeb",
  // },
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
  {
    title: "Back-end Api for Ecommerce-App & Warehouse-App",
    description:
      "This project involved developing a comprehensive Spring Boot back-end for an online " +
      "shopping website and admin warehouse website. It included a robust set of APIs for security, managing user accounts, " +
      "user authorization, and necessary CRUD operations to retrieve data from the database to the user." +
      " Additionally, the project incorporated data caching for enhanced performance.",
    tags: ["MySQL", "Java Spring", "AWS-S3", "AWS-Ec2"],
    imageUrl: springBootApp,
    projectUrl: "https://github.com/latrongthuong2k/Web-E-commerce-BE-Project",
  },
];

export const educateHistoryJP = [
  {
    title: "高等学校",
    location: "ベトナム",
    description:
      "高校時代、数学と物理に情熱を注ぎ、国際的に活躍するために外国語を習得することに力を入れていました。",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "語学学校",
    location: "東京、日本",
    description:
      "日本語を学ぶ間、言語の習得に専念し、N2の熟練度を達成しました。これにより、ネイティブスピーカーと自信を持ってコミュニケーションを取ることができました。",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "専門学校",
    location: "東京、日本",
    description:
      "東京デザインテクノロジーセンター専門学校で、プログラミングスキル、アルゴリズムの解決、バグ修正、テストに焦点を当てました。ゲーム開発やウェブサイト設計を含む様々な実践プロジェクトに携わりました。特に2年目の主要な試験での学業優秀さが、30万円の奨学金を得ることにつながりました。",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
];
export const projectsDataJP = [
  {
    title: "ポートフォリオウェブ",
    description:
      "自分のプロジェクトを紹介するNextJsのポートフォリオウェブサイトを開発しました。ReactJSによるモダンなデザイン、Framer Motionによるインタラクティビティの向上、レスポンシブなレイアウトが特徴です。",
    tags: ["NextJS", "ReactJS", "Tailwind", "Framer Motion"],
    imageUrl: portfolioProject,
    projectUrl: "https://github.com/latrongthuong2k/portfolio-web",
  },
  // {
  //   title: "学習管理システムWeb",
  //   description:
  //     "コース、学生、教師、ユーザーアカウントを管理するためのフロントエンド包括的な学習管理システム(LMS)を開発しました。ユーザーフレンドリーなインターフェースと、ユーザーエンゲージメントを向上させるインタラクティブな要素が特徴です。",
  //   tags: ["Html", "Css", "JavaScript", "Bootstrap 5"],
  //   imageUrl: lmsImage,
  //   projectUrl: "https://github.com/latrongthuong2k/studentManagementWeb",
  // },
  {
    title: "倉庫管理アプリ",
    description:
      "このプロジェクトは、ユーザーデータ、製品、請求書などを管理するための管理者向けの包括的なシステムです。データ処理のためのSpring Boot APIとシームレスに統合されています。",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Java Spring"],
    imageUrl: warehouseMNGI,
    projectUrl:
      "https://github.com/latrongthuong2k/Web-Admin-Ecommerce-Project",
  },
  {
    title: "EコマースバックエンドApi",
    description:
      "このプロジェクトでは、オンラインショッピングウェブサイトと倉庫管理ウェブアプリケーションウェブサイトのための包括的なSpring Bootバックエンドを開発しました。" +
      "セキュリティ、ユーザーアカウントの管理、ユーザー認証、データベースからユーザーへのデータを取得するための必要なCRUD操作の堅牢なAPIセットが含まれています。" +
      "さらに、パフォーマンスを向上させるためにデータキャッシングを取り入れました。",
    tags: ["MySQL", "Java Spring", "AWS-S3", "AWS-Ec2"],
    imageUrl: springBootApp,
    projectUrl: "https://github.com/latrongthuong2k/Web-E-commerce-BE-Project",
  },
];

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
