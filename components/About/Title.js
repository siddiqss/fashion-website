"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { europaGrotesk, kaushanScript } from "../CoverVideo";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Title() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <div>
      <motion.h1
        className="font-semibold relative top-4 left-[40%] md:left-[5%] z-10 md:text-9xl text-6xl text-primary"
        style={{ fontFamily: europaGrotesk.style.fontFamily, x: y }}
      >
        About us
      </motion.h1>
    </div>
  );
}

export default Title;
