"use client";

import { AnimatePresence } from "framer-motion";

function AnimatePresenceProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

export default AnimatePresenceProvider;
