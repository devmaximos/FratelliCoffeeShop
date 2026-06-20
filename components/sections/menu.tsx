"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const menuCategories = [
  {
    id: "espresso",
    title: "Espresso",
    subtitle: "Κλασσικός Ελληνικός",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <path d="M12 30 Q12 34 20 34 Q28 34 28 30" />
        <path d="M10 18 L10 30 Q10 34 20 34 Q30 34 30 30 L30 18" />
        <path d="M10 18 Q20 20 30 18" />
        <path d="M30 22 Q36 22 36 26 Q36 30 30 28" />
        <motion.path
          d="M16 14 Q18 10 16 6"
          initial={{ pathLength: 0.5 }}
          animate={{ pathLength: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M24 14 Q26 10 24 6"
          initial={{ pathLength: 0.5 }}
          animate={{ pathLength: [0.5, 1, 0.5], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    ),
  },
  {
    id: "freddo",
    title: "Freddo",
    subtitle: "Δροσερά Ροφήματα",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <path d="M10 16 L12 32 Q12 36 20 36 Q28 36 28 32 L30 16" />
        <path d="M8 16 Q20 18 32 16" />
        <path d="M14 10 L14 16 M20 8 L20 16 M26 10 L26 16" strokeDasharray="2 2" />
        <circle cx="18" cy="26" r="3" />
        <circle cx="26" cy="24" r="2" />
      </svg>
    ),
  },
  {
    id: "breakfast",
    title: "Πρωινό",
    subtitle: "Τοστ & Γλυκά",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <path d="M8 20 Q8 16 20 16 Q32 16 32 20 L32 24 Q32 28 20 28 Q8 28 8 24 Z" />
        <path d="M10 20 L30 20" />
        <path d="M12 24 L28 24" />
        <path d="M14 16 L14 12 M20 16 L20 10 M26 16 L26 12" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "snacks",
    title: "Σνακ",
    subtitle: "Ελαφριά & Νόστιμα",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <ellipse cx="20" cy="26" rx="14" ry="8" />
        <path d="M6 26 Q6 18 20 18 Q34 18 34 26" />
        <path d="M12 22 L14 22 M18 22 L20 22 M24 22 L26 22" />
        <path d="M10 14 Q12 10 16 12 M28 12 Q30 8 32 12" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "drinks",
    title: "Ποτά",
    subtitle: "Χυμοί & Ροφήματα",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <path d="M14 8 L12 32 Q12 36 20 36 Q28 36 28 32 L26 8" />
        <path d="M12 8 L28 8" />
        <path d="M10 8 Q10 4 20 4 Q30 4 30 8" />
        <path d="M16 16 L24 16 M16 22 L24 22" strokeDasharray="3 2" />
        <path d="M32 12 L36 16 L32 20" />
      </svg>
    ),
  },
  {
    id: "desserts",
    title: "Γλυκά",
    subtitle: "Σπιτικά Επιδόρπια",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
        <path d="M8 28 Q8 20 20 20 Q32 20 32 28" />
        <ellipse cx="20" cy="28" rx="12" ry="6" />
        <path d="M20 8 Q22 6 20 4 Q18 2 20 0" strokeDasharray="1 2" />
        <circle cx="16" cy="6" r="1.5" />
        <circle cx="24" cy="4" r="1" />
        <circle cx="20" cy="12" r="2" />
      </svg>
    ),
  },
];

interface MenuCardProps {
  category: typeof menuCategories[0];
  index: number;
  isInView: boolean;
}

function MenuCard({ category, index, isInView }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: (index % 2 === 0 ? -5 : 5)
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{
        scale: 1.05,
        rotate: (index % 2 === 0 ? 2 : -2),
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl border-2 border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Card content */}
        <div className="p-6 text-center">
          {/* Icon circle */}
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-black/5 flex items-center justify-center text-black"
          >
            {category.icon}
          </motion.div>

          <h3 className="font-script text-2xl text-black mb-1">{category.title}</h3>
          <p className="font-sans text-sm text-black/50">{category.subtitle}</p>
        </div>

        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-black/5 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-black/20 font-sans">Φωτογραφία</p>
          </div>
        </div>
      </div>

      {/* Hover ring effect */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isHovered ? { scale: 1.02, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        className="absolute inset-0 rounded-2xl border-2 border-black pointer-events-none"
      />
    </motion.div>
  );
}

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fan-out transform
  const rotate = useTransform(scrollYProgress, [0.2, 0.5], [15, 0]);
  const x = useTransform(scrollYProgress, [0.2, 0.5], [-50, 0]);

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-black mb-4">
            Το Μενού μας
          </h2>
          <p className="font-sans text-lg text-black/60 max-w-2xl mx-auto">
            Από τον κλασσικό ελληνικό καφέ μέχρι νόστιμα σνακ και γλυκά,
            όλα φτιαγμένα με αγάπη και φρέσκα υλικά.
          </p>
        </motion.div>

        {/* Menu grid with fan-out animation */}
        <div ref={containerRef} className="relative">
          <motion.div
            style={{ rotate, x }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {menuCategories.map((category, index) => (
              <MenuCard
                key={category.id}
                category={category}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Decorative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 -left-20 w-64 h-64 rounded-full border-2 border-black"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </section>
  );
}
