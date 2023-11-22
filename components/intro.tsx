"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { Sacramento } from "next/font/google";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";

const fontText = Sacramento({ subsets: ["latin"], weight: ["400"] });
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 h-screen bg-gradient-to-r from-orange-300 to-sky-400 dark:from-gray-500 dark:to-gray-700 w-full scroll-mt-[100rem] sm:mb-0"
      // className="mb-20 flex h-screen w-full scroll-mt-[100rem] flex-col justify-center bg-gray-300 text-center dark:bg-gray-700 sm:mb-0"
    >
      <div className="pt-[11rem] ">
        <div className="items-center justify-center ">
          <div className="relative">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/myPhoto.JPG"
                alt="ThuongPhoto"
                width={600}
                height={800}
                quality="95"
                priority={true}
                className="h-[180px] w-[180px] md:w-[18rem] md:h-[18rem] rounded-full object-cover object-right shadow-xl"
              />
            </motion.div>
            <div className="w-[20rem] md:w-[32rem] mx-auto">
              <motion.h1
                className={`${fontText.className} mb-10 mt-6 px-4 text-3xl !leading-[1.5] sm:text-4xl`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Hi. I'm Thuong
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
                className="text-sm md:text-lg "
              >
                Welcome to <strong>my world</strong>, where each line of code is
                not just a <em>skill</em>, but an <strong>art</strong>. I am on
                a path from being a <em>web developer</em> to becoming a{" "}
                <strong>full-stack developer</strong>.
              </motion.span>
            </div>

            <div className={"flex justify-center"}>
              <iframe
                width={300}
                height={300}
                src="https://lottie.host/?file=26fb1cf7-d96b-4ee4-8794-98301cc54359/PTWCm2BItz.json"
              ></iframe>
            </div>
            <motion.div
              className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="flex">
                <a
                  className="flex cursor-pointer items-center rounded-full p-2 text-[3rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:text-white/60"
                  href="https://www.facebook.com/thuong1910"
                  target="_blank"
                >
                  <FaSquareFacebook />
                </a>
                <a
                  className="flex cursor-pointer items-center rounded-full p-2 text-[3rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:text-white/60"
                  href="https://www.linkedin.com/in/thuong-la-77ab08254/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>

                <a
                  className="flex cursor-pointer items-center rounded-full p-2 text-[3rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:text-white/60"
                  href="https://github.com/latrongthuong2k"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <a
                className="group flex shadow-lg cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-sky-400 dark:from-gray-500 dark:to-gray-700 px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 "
                href="/CV.pdf"
                download
              >
                My CV{" "}
                <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/*<div className="flex-1 text-center pt-[300px] bg-gradient-to-r from-teal-500 via-emerald-400 to-sky-300">*/}
      {/*<iframe src="https://lottie.host/?file=26fb1cf7-d96b-4ee4-8794-98301cc54359/PTWCm2BItz.json"></iframe>*/}

      {/*<motion.h1*/}
      {/*  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"*/}
      {/*  initial={{ opacity: 0, y: 100 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*>*/}
      {/*  text*/}
      {/*</motion.h1>*/}
      {/*<motion.div*/}
      {/*  className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"*/}
      {/*  initial={{ opacity: 0, y: 100 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*  transition={{*/}
      {/*    delay: 0.1,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <a*/}
      {/*    className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"*/}
      {/*    href="/CV.pdf"*/}
      {/*    download*/}
      {/*  >*/}
      {/*    Download CV{" "}*/}
      {/*    <HiDownload className="opacity-60 transition group-hover:translate-y-1" />*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-5 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"*/}
      {/*    href="https://linkedin.com"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    <LinkedInIcon />*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-5 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"*/}
      {/*    href="https://github.com"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    <FaGithubSquare />*/}
      {/*  </a>*/}
      {/*</motion.div>*/}
      {/*</div>*/}
    </section>
  );
}
