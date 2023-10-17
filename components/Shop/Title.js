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
  const y = useParallax(scrollYProgress, 440);

  return (
    <div>
      <h1
        className="font-semibold absolute top-4 left-[5%] z-20 text-6xl md:text-8xl text-text drop-shadow-md"
        style={{ fontFamily: europaGrotesk.style.fontFamily, }}
      >
        New Collection
      </h1>
    </div>
  );
}

export default Title;
