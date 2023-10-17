"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { sirinStencil } from "@/app/layout";
import { bonFoyage } from "./CoverVideo";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: -5,
    transition: { duration: 2, delay: 2, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

function Logo() {
  return (
    <div className="absolute top-4 left-4 w-full text-text z-5">
      <Link href={"/"} className="flex items-end">
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M3 11.0001L5.82341 9.79002C6.06208 9.68773 6.18142 9.63659 6.2562 9.55125C6.32206 9.47611 6.36389 9.38296 6.3763 9.28382C6.39039 9.17124 6.34934 9.04806 6.26722 8.80172L5.65307 6.95927C5.4418 6.32546 5.33617 6.00855 5.41069 5.79339C5.47559 5.60605 5.62012 5.45707 5.80542 5.38653C6.01822 5.30552 6.33818 5.40151 6.9781 5.59348L8.6504 6.09517C9.12832 6.23855 9.36728 6.31024 9.58513 6.27915C9.77707 6.25175 9.95691 6.16916 10.1028 6.0414C10.2683 5.89641 10.3696 5.66842 10.5723 5.21247L11.0204 4.20417C11.3306 3.5061 11.4858 3.15706 11.7019 3.04969C11.8897 2.95642 12.1103 2.95642 12.2981 3.04969C12.5142 3.15706 12.6694 3.5061 12.9796 4.20417L13.4277 5.21247C13.6304 5.66841 13.7317 5.89641 13.8972 6.0414C14.0431 6.16916 14.2229 6.25175 14.4149 6.27915C14.6327 6.31024 14.8717 6.23855 15.3496 6.09517L17.0219 5.59348C17.6618 5.40151 17.9818 5.30552 18.1946 5.38653C18.3799 5.45707 18.5244 5.60605 18.5893 5.79339C18.6638 6.00855 18.5582 6.32546 18.3469 6.95927L17.7328 8.80172C17.6507 9.04806 17.6096 9.17124 17.6237 9.28382C17.6361 9.38296 17.6779 9.47611 17.7438 9.55125C17.8186 9.63659 17.9379 9.68773 18.1766 9.79002L21 11.0001M10 11.0001C10 9.89548 10.8954 9.00005 12 9.00005C13.1046 9.00005 14 9.89548 14 11.0001M13 21.0001H21M17 15.0001H21M5 15.0001H13M3 18.0001H19M5 21.0001H9"
            stroke="#fff"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: bonFoyage.style.fontFamily,
          }}
          className="text-lg text-primary pb-2 ml-1"
        >
          Chicity
        </motion.span>
      </Link>
    </div>
  );
}

export default Logo;
