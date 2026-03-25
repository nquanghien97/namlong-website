"use client";

import { motion, Variants, Transition } from "framer-motion";

type AnimationType = "fadeIn" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideUp" | "zoomIn";

const variants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface ViewportOptions {
  once?: boolean;
  amount?: number | "some" | "all";
  root?: React.RefObject<Element>;
  margin?: string;
}

interface AnimateProps {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  ease?: Transition["ease"];
  viewport?: ViewportOptions;
  className?: string;
}

export default function Animate({
  children,
  type = "fadeIn",
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
  viewport = { once: true, amount: 0.2 },
  className,
}: AnimateProps) {
  return (
    <motion.div
      className={`${className ? className : ''} overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[type]}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}