"use client";
import img1 from "@/public/Images/1.webp";
import img2 from "@/public/Images/2.webp";
import img3 from "@/public/Images/3.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Images() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -300);

  return (
    <div className="md:w-1/2 absolute md:top-0 top-[0%] right-0">
      <img src={img1.src} className="w-full h-auto " alt="About us" />
      <motion.img
        style={{ y }}
        src={img2.src}
        className="h-auto absolute hidden md:right-[95%] md:bottom-[30%] md:w-[40%]"
        alt="img2"
      />
      <img
        src={img3.src}
        className="h-auto w-[40%] absolute left-[80%] bottom-[30%]"
        alt="img3"
      />
    </div>
  );
}

export default Images;
