"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LogoMark } from "@/components/logo";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/fratellicafe",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fratellicafe",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.2-6.782 2.618-6.982 6.982-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.618 6.782 6.982 6.982 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.982.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.618-6.782-6.982-6.982-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const locations = [
  {
    name: "Θουκυδίδου 41",
    phone: "+30 2321 012345",
  },
  {
    name: "Μπεκιάρη 27",
    phone: "+30 2321 098765",
  },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-black text-white py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-white rounded-full p-3">
                <LogoMark className="w-8 h-8" />
              </div>
            </div>
            <h3 className="font-script text-3xl mb-3">Fratelli Cafe</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Ένα ζεστό, οικογενειακό καφέ στη καρδιά των Σερρών.
              Από το 2018, πουτάμε τον καλύτερο καφέ με αγάπη.
            </p>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="font-script text-2xl mb-4">Τοποθεσίες</h4>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name}>
                  <p className="font-sans text-sm text-white/80">{location.name}</p>
                  <p className="font-sans text-xs text-white/50">Σέρρες</p>
                  <a
                    href={`tel:${location.phone}`}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="font-script text-2xl mb-4">Ακολουθήστε μας</h4>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:info@fratellicafe.gr"
              className="font-sans text-sm text-white/60 hover:text-white transition-colors"
            >
              info@fratellicafe.gr
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-white/10 my-8 md:my-12"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Fratelli Cafe. Με επιφύλαξη παντός δικαιώματος.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
