"use client";
import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [animationProps, setAnimationProps] = useState({ y: -100, opacity: 0 });

  useEffect(() => {
    // Khi theme thay đổi, cập nhật animation
    setAnimationProps({ y: -100, opacity: 0 });
    setTimeout(() => {
      setAnimationProps({ y: 0, opacity: 1 });
    }, 300); // Thêm một khoảng trễ nhỏ
  }, [theme]);

  return (
    <button
      className="fixed top-5 right-5 bg-transparent w-[3rem] h-[3rem] border-none rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={animationProps}>
          <BsSun />
        </motion.div>
      ) : (
        <motion.div initial={{ y: -100, opacity: 0 }} animate={animationProps}>
          <BsMoon />
        </motion.div>
      )}
    </button>
  );
}
