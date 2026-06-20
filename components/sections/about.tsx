"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function DoodleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="20" cy="20" r="18" strokeDasharray="4 3" />
      <path d="M14 18 Q14 14 20 14 Q26 14 26 18 Q26 22 20 22" className="animate-steam origin-bottom" />
      <path d="M12 24 Q14 22 12 20 M28 24 Q26 22 28 20" />
    </svg>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-coffee-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.12]">
        <DoodleIcon className="w-full h-full text-coffee-brown" />
      </div>
      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-[0.06]">
        <DoodleIcon className="w-full h-full text-coffee-brown" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#F3E7D8] to-[#E8D9C3] border-2 border-coffee-brown/15 overflow-hidden">
              {/* Photo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-coffee-brown/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-coffee-brown/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-coffee-brown/40 font-sans">Φωτογραφία</p>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-coffee-dark text-[#FBF3E9] flex items-center justify-center"
            >
              <span className="font-script text-lg">Από το 2018</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="font-script text-4xl md:text-5xl text-coffee-dark mb-6">
              Η Ιστορία μας
            </h2>
            <div className="space-y-4 text-coffee-dark/70 font-sans leading-relaxed">
              <p>
                Το Fratelli Cafe γεννήθηκε από την αγάπη για τον καφέ και την επιθυμία να δημιουργήσουμε έναν χώρο που νιώθεις σαν σπίτι. Το όνομά μας σημαίνει &quot;αδέρφια&quot; στα ιταλικά, γιατί εδώ είμαστε όμαστε μια οικογένεια.
              </p>
              <p>
                Με δύο τοποθεσίες στη καρδιά των Σερρών, προσφέρουμε έναν ζεστό χώρο για να απολαύσετε τον καφέ σας, να δουλέψετε, ή απλά να χαλαρώσετε με φίλους.
              </p>
              <p>
                Κάθε φλιτζάνι καφές φτιάχνεται με αγάπη και φροντίδα, χρησιμοποιώντας μόνο καλύτερα υλικά. Πιστεύουμε ότι κάθε γουλιά πρέπει να είναι μια μικρή στιγμή ευχαρίστησης.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
