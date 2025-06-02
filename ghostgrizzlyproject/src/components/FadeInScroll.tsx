import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInOnScroll({ children, delay = 0 }: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
