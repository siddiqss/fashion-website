"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import Link from "next/link";

function Bottom() {
  const lenis = useLenis();

  return (
    <motion.div
      className="w-[80vw]"
      initial={{ y: "-400px" }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
    >
      <ul
        className="list-none flex justify-between items-center flex-wrap md:m-8 mt-16 border-t-2 border-solid border-b-2"
        style={{ padding: "0 1rem" }}
      >
        <li
          style={{ padding: "2rem" }}
          className="text-lg uppercase cursor-pointer transition-all hover:scale-110"
          onClick={() =>
            lenis.scrollTo("#home", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
        >
          home
        </li>
        <li
          style={{ padding: "2rem" }}
          className="text-lg uppercase cursor-pointer transition-all hover:scale-110"
          onClick={() =>
            lenis.scrollTo("#home", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
        >
          about
        </li>
        <li
          style={{ padding: "2rem" }}
          className="text-lg uppercase cursor-pointer transition-all hover:scale-110"
          onClick={() =>
            lenis.scrollTo("#about", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
        >
          shop
        </li>
        <li
          style={{ padding: "2rem" }}
          className="text-lg uppercase cursor-pointer transition-all hover:scale-110"
          onClick={() =>
            lenis.scrollTo("#shop", {
              duration: 2,
              easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
              smooth: true,
            })
          }
        >
          new arrival
        </li>
      </ul>
      <div
        className="text-lg flex justify-between items-center md:flex-row flex-col"
        style={{ padding: "0.5rem 0", margin: "2rem 4rem" }}
      >
        <span className="w-max md:w-auto">&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
        <span className="w-max md:w-auto">
          Made with &hearts; by{" "}
          <Link
            href={"https://talhasiddique.com"}
            target="_blank"
            className="underline decoration-solid"
          >
            Talha Siddique
          </Link>
        </span>
      </div>
    </motion.div>
  );
}

export default Bottom;
