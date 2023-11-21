"use client";

import React from "react";
import { Roboto_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 flex max-w-[60rem] flex-wrap
        scroll-mt-28 text-left text-[17px] leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex-1 pr-2">
        <h2 className=" sm:w-full mb-8 text-left text-3xl font-medium capitalize">
          About Me
        </h2>
        <p className={`mb-3`}>
          Hello There!, I'm Thuong. After graduating from the{" "}
          <span className="font-bold">IT Design</span> department at{" "}
          <span className="font-bold">
            Tokyo Design Technology Center College
          </span>
          , I decided to pursue a career in programming and become a web
          developer.{" "}
          <span className="italic">My favorite part of programming</span> is
          problem-solving. I <span className="underline">love</span> the feeling
          of finding solutions to challenging problems. My core skills include{" "}
          <span className="font-bold">
            Java SpringBoot, React, Next.js, and MySQL
          </span>
          . I am also very interested in the role of{" "}
          <span className="font-bold">DevOps</span> and always looking for
          opportunities to learn new technologies.
        </p>

        <p>
          <span className="italic">When not coding</span>, I enjoy playing video
          games, running for relaxation, and spending time learning drawing.
          These hobbies help me balance my life and enhance my creativity at
          work.
        </p>
      </div>
      <div className="flex-1 pl-2">
        <iframe
          width={"500"}
          height="500"
          src="https://lottie.host/?file=9d0145bc-2aef-43bf-b804-b551a49bc1bf/wQZsoy2KUS.json"
        ></iframe>
      </div>
    </motion.section>
  );
}
