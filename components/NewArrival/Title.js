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
  const y = useParallax(scrollYProgress, 300);

  return (
    <div>
      <motion.h1
        className="font-semibold absolute  text-body top-0 md:top-4 -left-[15%] md:-left-[10%] z-20 text-6xl md:text-8xl"
        style={{ fontFamily: europaGrotesk.style.fontFamily, x: y }}
      >
        New Arrivals
      </motion.h1>
    </div>
  );
}

export default Title;
