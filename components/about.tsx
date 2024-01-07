"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a B tech degree in{" "}
        <span className="font-medium">Computer Science</span>, I joined Tata Consultancy Service
        as a frontend developer and learned{" "}
        <span className="font-medium">Basic of web html,css and js to building complex apps using Reactjs</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect that's why i also participate in coding contests  <a className="text-blue-400" href="https://leetcode.com/BahubaIi/">leetcode</a> I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React,Node.js,express.js, and MongoDB
        </span>
        . I am also familiar with Tailwind and SQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
      </p>
    </motion.section>
  );
}
