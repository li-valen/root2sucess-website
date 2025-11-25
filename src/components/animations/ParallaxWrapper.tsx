import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxWrapper({ children, offset = 50, className }: ParallaxWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }} className="h-full w-full relative">{children}</motion.div>
    </div>
  );
}
