"use client";

import { motion } from "framer-motion";

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { container: "w-20 h-20", text: "text-lg" },
    md: { container: "w-32 h-32", text: "text-2xl" },
    lg: { container: "w-48 h-48", text: "text-4xl" },
  };

  return (
    <motion.div
      className={`relative ${sizes[size].container} ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <filter id="sketchy" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Circular badge background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="black"
          className="origin-center"
        />

        {/* Steaming coffee cup */}
        <g transform="translate(30, 35)">
          {/* Cup body */}
          <path
            d="M5 15 Q5 35 20 35 Q35 35 35 15 L35 8 L5 8 Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cup handle */}
          <path
            d="M35 12 Q45 12 45 22 Q45 30 35 28"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Steam */}
          <motion.path
            d="M12 5 Q14 2 12 -2 Q14 -5 12 -8"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M22 5 Q24 2 22 -2 Q24 -5 22 -8"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Whimsical children figures inside cup */}
        <g transform="translate(38, 45)">
          {/* Child 1 */}
          <circle cx="0" cy="0" r="2.5" fill="white" />
          <path
            d="M0 2.5 L0 8 M-1 6 L-3 9 M1 6 L3 9"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(50, 47)">
          {/* Child 2 */}
          <circle cx="0" cy="0" r="2.5" fill="white" />
          <path
            d="M0 2.5 L0 7 M-1 5 L-2 8 M1 5 L3 7"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Fratelli text below */}
      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-script ${sizes[size].text} text-black font-bold`}>
        Fratelli
      </div>
    </motion.div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-12 h-12 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="black" />
        <g transform="translate(30, 35)">
          <path
            d="M5 15 Q5 35 20 35 Q35 35 35 15 L35 8 L5 8 Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M35 12 Q45 12 45 22 Q45 30 35 28"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(38, 45)">
          <circle cx="0" cy="0" r="2.5" fill="white" />
          <path d="M0 2.5 L0 8 M-1 6 L-3 9 M1 6 L3 9" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <g transform="translate(50, 47)">
          <circle cx="0" cy="0" r="2.5" fill="white" />
          <path d="M0 2.5 L0 7 M-1 5 L-2 8 M1 5 L3 7" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
