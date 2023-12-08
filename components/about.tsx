"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

function AboutContentJP() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-medium capitalize sm:text-3xl">
        私について
      </h2>
      <p>
        こんにちは！私の名前はThuongです。{" "}
        <span className="font-bold"> ITデザイン</span>学部を卒業した後、
        <span className="font-bold">
          {" "}
          東京デザインテクノロジーセンターカレッジ
        </span>
        で、プログラミングのキャリアを追求し、ウェブ開発者になることを決めました。
        <span className="italic">プログラミングのお気に入りの部分</span>
        は問題解決です。難しい問題に対する解決策を見つける感覚が
        <span className="underline">大好き</span>です。私の主なスキルには
        <span className="font-bold">
          {" "}
          Java SpringBoot、React、Next.js、MySQL
        </span>
        が含まれます。また、
        <span className="font-bold">DevOps</span>
        の役割にも非常に興味があり、常に新しいテクノロジを学ぶ機会を探しています。
      </p>
      <p className={"pt-[1rem] md:pt-0"}>
        <span className="italic">コーディングしていないとき</span>
        、私はビデオゲームを楽しんだり、リラックスのためにランニングをしたり、絵を学ぶ時間を過ごすのが好きです。
        これらの趣味は、私の人生をバランスさせ、仕事での創造性を高めるのに役立ちます。
      </p>
    </>
  );
}
function AboutContentEN() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-medium capitalize sm:text-3xl">
        About Me
      </h2>
      <p>
        Hello There!, I'm Thuong. After graduating from the
        <span className="font-bold"> IT Design</span> department at
        <span className="font-bold">
          {" "}
          Tokyo Design Technology Center College
        </span>
        , I decided to pursue a career in programming and become a web
        developer.
        <span className="italic"> My favorite part of programming</span> is
        problem-solving. I <span className="underline">love</span> the feeling
        of finding solutions to challenging problems. My core skills include
        <span className="font-bold">
          {" "}
          Java SpringBoot, React, Next.js, and MySQL
        </span>
        . I am also very interested in the role of{" "}
        <span className="font-bold">DevOps</span> and always looking for
        opportunities to learn new technologies.
      </p>
      <p className={"pt-[1rem] md:pt-0"}>
        <span className="italic">When not coding</span>, I enjoy playing video
        games, running for relaxation, and spending time learning drawing. These
        hobbies help me balance my life and enhance my creativity at work.
      </p>
    </>
  );
}

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();
  const selectedLanguageContent = useMemo(() => {
    switch (language) {
      case "JP":
        return <AboutContentJP />;
      case "EN":
        return <AboutContentEN />;
      default:
        return null;
    }
  }, [language]);
  return (
    <motion.section
      ref={ref}
      className="mb-28 flex flex-col max-w-full scroll-mt-28 text-left text-sm leading-6 sm:flex-row sm:text-base sm:leading-7 sm:w-[70rem] md:mb-40 md:text-lg md:leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex-1 px-[2rem] md:pl-2 mb-6 md:mb-0 md:pr-4">
        {selectedLanguageContent}
      </div>
      <div className="flex-1 md:pl-2">
        <iframe
          className="w-full max-w-full md:w-[32rem] md:h-[32rem] h-[22rem]"
          src="https://lottie.host/?file=9d0145bc-2aef-43bf-b804-b551a49bc1bf/wQZsoy2KUS.json"
        ></iframe>
      </div>
    </motion.section>
  );
}
