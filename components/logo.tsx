"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sizes = {
  sm: 80,
  md: 128,
  lg: 192,
};

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const px = sizes[size];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: px, height: px }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src="/fratellicoffeelogo.png"
        alt="Fratelli Cafe"
        width={px}
        height={px}
        priority
      />
    </motion.div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-12 h-12 ${className}`}>
      <Image
        src="/fratellicoffeelogo.png"
        alt="Fratelli Cafe"
        width={48}
        height={48}
      />
    </div>
  );
}
