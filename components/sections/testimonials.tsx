"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react"; 

const testimonials = [
  {
    id: 1,
    name: "Μαρία Κ.",
    rating: 5,
    text: "Εξαιρετικός καφές και πολύ φιλικό προσωπικό! Το αγαπημένο μου μέρος για πρωινό καφέ στη πόλη.",
    date: "Πριν 2 μήνες",
  },
  {
    id: 2,
    name: "Γιώργος Π.",
    rating: 5,
    text: "Τέλεια ατμόσφαιρα για δουλειά ή χαλάρωση. Τα toasts είναι φανταστικά και ο espresso από τους καλύτερους που έχω δοκιμάσει.",
    date: "Πριν 1 μήνα",
  },
  {
    id: 3,
    name: "Ελένη Σ.",
    rating: 4,
    text: "Πολύ ωραίος χώρος και νόστιμος καφές. Μου αρέσει που είναι ήσυχο και χαλαρωτικό. Θα ξαναπάω σίγουρα!",
    date: "Πριν 3 εβδομάδες",
  },
  {
    id: 4,
    name: "Νίκος Μ.",
    rating: 5,
    text: "Κάνω καφέ εδώ κάθε μέρα. Η ποιότητα του καφέ είναι σταθερά υψηλή και το προσωπικό πάντα χαμογελαστό.",
    date: "Πριν 1 εβδομάδα",
  },
];

function StarIcon({ className = "", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 6.384a.56.56 0 01-.84.612l-4.925-2.722a.563.563 0 00-.586 0L6.652 19.44a.56.56 0 01-.84-.612l1.285-6.384a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.562.562 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-13.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  isInView: boolean;
}

function TestimonialCard({ testimonial, index, isInView }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="bg-coffee-card rounded-2xl border border-coffee-brown/15 p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        {/* Quote icon */}
        <QuoteIcon className="w-8 h-8 text-coffee-brown/15 mb-4" />

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? "text-coffee-gold" : "text-coffee-brown/20"}`}
              filled={i < testimonial.rating}
            />
          ))}
        </div>

        {/* Text */}
        <p className="font-sans text-coffee-dark/70 leading-relaxed mb-6">
          {testimonial.text}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between pt-4 border-t border-coffee-brown/15">
          <div>
            <p className="font-script text-lg text-coffee-dark">{testimonial.name}</p>
            <p className="font-sans text-xs text-coffee-dark/40">{testimonial.date}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-coffee-brown/10 flex items-center justify-center">
            <span className="font-sans text-sm text-coffee-brown/50">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-coffee-page relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-coffee-brown"
        style={{ pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header with rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Rating badge */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-coffee-dark text-[#FBF3E9] px-6 py-3 rounded-full mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-coffee-gold" filled={i < 5} />
              ))}
            </div>
            <span className="font-sans font-bold text-xl">4.7</span>
            <span className="font-sans text-sm opacity-70">από 200+ αξιολογήσεις</span>
          </motion.div>

          <h2 className="font-script text-5xl md:text-6xl text-coffee-dark mb-4">
            Τι λένε οι πελάτες
          </h2>
          <p className="font-sans text-lg text-coffee-dark/60 max-w-2xl mx-auto">
            Είμαστε ευγνώμονες για την εμπιστοσύνη που μας δείχνουν οι πελάτες μας κάθε μέρα.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Google Reviews link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/search/fratelli+cafe+serres"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-coffee-dark/60 hover:text-coffee-dark transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Δείτε όλες τις αξιολογήσεις στο Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
