"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const [animationProps, setAnimationProps] = useState({ y: -100, opacity: 0 });

  useEffect(() => {
    setAnimationProps({ y: -100, opacity: 0 });
    setTimeout(() => {
      setAnimationProps({ y: 0, opacity: 1 });
    }, 300); // delay
  }, [language]);

  return (
    <button
      className="fixed top-20 right-20 md:top-5 bg-transparent w-[3rem] h-[3rem] border-none rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleLanguage}
    >
      {language === "JP" ? (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={animationProps}>
          JP
        </motion.div>
      ) : (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={animationProps}>
          EN
        </motion.div>
      )}
    </button>
  );
}
