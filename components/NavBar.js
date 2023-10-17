"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

function NavBar() {
  const [click, setClick] = useState(false);
  const lenis = useLenis();

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2, delay: 2 }}
      className={`absolute z-6 w-screen ${
        click ? "top-0" : "top-[-5rem]"
      } flex items-center justify-center transition-all duration-300 ease-in-out`}
    >
      <motion.div
        className="relative bg-primary text-text list-none flex items-center justify-around w-full h-20 "
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <motion.li
          className="absolute top-full left-1/2 translate-x-[-50%] bg-primary list-none text-white w-56 h-10 flex items-center justify-center text-lg font-semibold uppercase cursor-pointer"
          style={{
            clipPath: "polygon(0 0, 100% 0, 83% 100%, 18% 100%);",
          }}
          onClick={() => setClick(!click)}
        >
          Menu
        </motion.li>
        <motion.li
          onClick={() =>
            lenis.scrollTo("#home", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
          className="uppercase text-text"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </motion.li>
        <motion.li
          onClick={() =>
            lenis.scrollTo("#about", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
          className="uppercase text-text"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </motion.li>
        <motion.li
          onClick={() =>
            lenis.scrollTo("#shop", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
          className="uppercase text-text"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </motion.li>
        <motion.li
          onClick={() =>
            lenis.scrollTo("#new-arrival", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
          className="uppercase text-text"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New Arrival
        </motion.li>
      </motion.div>
    </motion.div>
  );
}

export default NavBar;
