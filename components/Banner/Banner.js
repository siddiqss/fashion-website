"use client";
import React from "react";
import { europaGrotesk, kaushanScript } from "../CoverVideo";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div
      className="min-h-screen w-[80vw] flex justify-center items-center relative"
      style={{ margin: "0 auto" }}
    >
      <div className=" min-h-screen flex flex-col items-center justify-evenly">
        <h1
          className="text-2xl md:text-7xl text-text whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: europaGrotesk.style.fontFamily,
          }}
        >
          <motion.span
            className="block bg-primary px-4 py-8"
            initial={{ x: "90%" }}
            whileInView={{ x: "0%" }}
            transition={{ delay: 0.5 }}
          >
            Dress like you've already made it—
          </motion.span>
        </h1>
        <h1
          className="text-2xl md:text-7xl text-text whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: europaGrotesk.style.fontFamily,
          }}
        >
          <motion.span
            className="block bg-primary px-4 py-8"
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ delay: 0.6 }}
          >
            Chicity,
          </motion.span>
        </h1>
        <h1
          className="text-2xl md:text-7xl text-text whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: europaGrotesk.style.fontFamily,
          }}
        >
          <motion.span
            className="block bg-primary px-4 py-8"
            initial={{ x: "100%"
            }}
            whileInView={{ x: "0%" }}
            transition={{ delay: 0.7 }}
          >
            where your style is the
          </motion.span>
        </h1>
        <h1
          className="text-2xl md:text-7xl text-text whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: europaGrotesk.style.fontFamily,
          }}
        >
          <motion.span
            className="block bg-primary px-4 py-8"
            initial={{ y: "-100%" }}
            whileInView={{ y: "0%" }}
            transition={{ delay: 0.8 }}
          >
            Signature on the masterpiece of you
          </motion.span>
        </h1>
        {/* <h1
          className="text-7xl text-text whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: kaushanScript.style.fontFamily,
          }}
        >
          <motion.span
            className="block bg-body px-4 py-8"
            initial={{ x: 300 }}
            whileInView={{ x: -300 }}
            transition={{ delay: 0.9, ease: "easeIn" }}
          >
            with a Little Black Dress.
          </motion.span>
        </h1> */}
      </div>
    </div>
  );
}

export default Banner;
