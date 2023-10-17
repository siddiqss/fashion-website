"use client";
import { motion } from "framer-motion";
import { europaGrotesk, kaushanScript } from "./CoverVideo";
import { sirinStencil } from "@/app/layout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 2, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function Title() {
  return (
    <>
      <motion.div
        className="flex items-center flex-col text-primary"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex">
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            C
          </motion.h1>
          <motion.h1
            // data-scroll-speed="4"
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            H
          </motion.h1>
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            I
          </motion.h1>
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            C
          </motion.h1>
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            I
          </motion.h1>
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            T
          </motion.h1>
          <motion.h1
            style={{
              fontFamily: europaGrotesk.style.fontFamily,
            }}
            variants={itemVariants}
            className="text-9xl drop-shadow-sm"
          >
            Y
          </motion.h1>
        </div>

        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: europaGrotesk.style.fontFamily,
            fontWeight: 300,
          }}
          className="text-lg capitalize text-body"
        >
          Inpsire. Create. Believe
        </motion.h2>
      </motion.div>
    </>
  );
}

export default Title;
