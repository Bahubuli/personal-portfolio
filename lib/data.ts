import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact ,FaCode,FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ecomm from '@/public/EcommProjectPic.jpg'
import expense from '@/public/expt.png'
import quiz from '@/public/quiz3.png'
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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B tech",
    location: "Jaipur, Rajasthan, India",
    description:
    "I completed my B.Tech in Computer Science and Engineering, fortifying my knowledge in the field. This educational achievement paved the way for my subsequent endeavors in technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "System Engineer",
    location: "Bengaluru, Karnataka",
    description:
      "I worked as a front-end developer for more than 1 year in TCS also  I refined my skills in front-end development, mastering HTML, CSS, JavaScript, and React.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Dec 2022",
  },
  {
    title: "Product Engineer",
    location: "Delhi, India",
    description:
      "I explored backend technologies, transforming into a well-rounded full-stack developer,I adeptly utilized Node.js, MongoDB, and Express to design robust and scalable server-side solutions. Leveraging these technologies, I contributed to the seamless integration of backend functionalities",
    icon: React.createElement(FaReact),
    date: "Dec 2023 - June 2023",
  },
  {
    title: "Freelance",
    location: "India",
    description:
      "As a freelancer, I collaborated with esteemed organizations like HitBullseye and Coding Thinker on a contractual basis, delivering high-quality solutions. Now, I am eagerly seeking full-time opportunities to apply my skills and expertise in a dynamic and collaborative professional environment",
    icon: React.createElement(FaCode),
    date: "June 2023 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "Procart an Ecommerce application ",
    description:
      "A full stack ",
    tags: ["React", "node.js", "Redux", "MongoDB", "Tailwind", "mongoose"],
    imageUrl: ecomm,
    github:"https://github.com/Bahubuli/E-commerce-reactJs",
    live:"https://ecommerce-jitendra.netlify.app"
  },
  {
    title: "Expense Tracker app",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["html", "css", "javascript"],
    imageUrl: expense,
    live:"https://ecommerce-jitendra.netlify.app"
  },
  {
    title: "Quiz app",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "CSS"],
    imageUrl: quiz,
    github:"https://github.com/Bahubuli/E-commerce-reactJs",
    live:"https://ecommerce-jitendra.netlify.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "DSA",
  "Git",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Redux",
  "SQL",
  "Python",
  "C++",



] as const;
