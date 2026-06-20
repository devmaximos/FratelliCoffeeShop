"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/logo";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // On mobile, the address bar resizing mid-scroll makes scroll-linked
  // transforms jitter, so we disable the parallax there and keep only
  // the entrance animations (which look fine on every device).
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yCircle2Raw = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yCircle3Raw = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const y = isMobile ? "0%" : yRaw;
  const yCircle2 = isMobile ? "0%" : yCircle2Raw;
  const yCircle3 = isMobile ? "0%" : yCircle3Raw;
  const opacity = isMobile ? 1 : opacityRaw;
  const scale = isMobile ? 1 : scaleRaw;

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-coffee-page">
      {/* Background pattern with subtle texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%233B2418' fill-opacity='1'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }} />
      </div>

      {/* Parallax decorative circles */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full border border-coffee-brown/15"
      />
      <motion.div
        style={{ y: yCircle2 }}
        className="absolute bottom-40 left-10 w-40 h-40 rounded-full border border-coffee-brown/10"
      />
      <motion.div
        style={{ y: yCircle3 }}
        className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-coffee-gold/10"
      />

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Logo size="lg" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-3xl md:text-4xl text-coffee-brown mb-6"
        >
          Καφέ & Τοστ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-xl md:text-2xl font-light text-coffee-dark/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ένα ζεστό, οικογενειακό καφέ στη καρδιά των Σερρών.
          <br />
          Απολαύστε εξαιρετικό καφέ και χαλαρή ατμόσφαιρα.
        </motion.h1>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-coffee-dark text-[#FBF3E9] px-8 py-4 rounded-full font-sans text-lg font-medium hover:bg-coffee-brown transition-colors"
        >
          Δείτε το Μενού
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-coffee-brown/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-coffee-brown/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
